import { Component, OnInit } from '@angular/core';
import { ProductoService, Escoba, Fabricante } from '../../services/producto.service'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Importar para ngModel y formularios

@Component({
  selector: 'app-escobas',
  standalone: true,
  // ¡Añadir FormsModule!
  imports: [CommonModule, FormsModule], 
  templateUrl: './escobas.component.html',
  styleUrl: './escobas.component.css'
})
export class EscobasComponent implements OnInit {
  escobas: Escoba[] = [];
  cargando: boolean = true;
  error: string | null = null;
  
  // Propiedades para el formulario
  mostrarFormulario: boolean = false;
  fabricantesDisponibles: Fabricante[] = []; // Lista para el select
  nuevaEscoba: any = {}; 
  fabricanteSeleccionadoId: number | null = null; 

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarEscobas();
    this.cargarFabricantes();
  }

  cargarFabricantes(): void {
    this.productoService.obtenerTodosLosFabricantes().subscribe({
      next: (data) => {
        this.fabricantesDisponibles = data;
      },
      error: (err) => {
        console.error('Error al cargar fabricantes para el formulario:', err);
      }
    });
  }

  cargarEscobas(): void {
    this.productoService.obtenerTodasLasEscobas().subscribe({
      next: (data: Escoba[]) => {
        this.escobas = data;
        this.cargando = false;
        this.error = null;
      },
      error: (err: any) => {
        console.error('Error al obtener escobas:', err);
        this.cargando = false;
        this.error = 'Falló la conexión o la carga de datos.';
      }
    });
  }
  // NUEVO: Estado de edición
    escobaEnEdicion: Escoba | null = null; // Almacena la escoba que se está editando
    
    // ... (constructor y cargarEscobas)

    // Lógica para ABRIR el Formulario de Edición
    abrirFormularioEdicion(escoba: Escoba): void {
        // Clonar el objeto para que los cambios en el formulario no afecten la lista
        this.escobaEnEdicion = { ...escoba }; 
        this.mostrarFormulario = true; // Reutiliza el flag de "Crear" si no quieres un formulario modal separado
    }

    // Lógica para CERRAR el Formulario de Edición
    cerrarFormularioEdicion(): void {
        this.escobaEnEdicion = null;
        this.mostrarFormulario = false; 
    }

    // Lógica de ENVÍO (PUT)
    enviarFormularioEdicion(): void {
        if (!this.escobaEnEdicion || !this.escobaEnEdicion.id) return;
        
        const id = this.escobaEnEdicion.id;
        
        // El Backend espera el objeto Escoba, pero la interfaz de POST/PUT requiere 'nombre'.
        // Usaremos el campo 'nombre' para el PUT, ya que es el campo que se usa en el Backend para el nombre.
        
        this.productoService.actualizarEscoba(id, this.escobaEnEdicion).subscribe({
            next: () => {
                alert(`Escoba con ID ${id} actualizada con éxito!`);
                this.cerrarFormularioEdicion();
                this.cargarEscobas(); // Recarga la lista
            },
            error: (err) => {
                console.error('Error al actualizar escoba:', err);
                alert('Error al actualizar: revisa la consola y el backend.');
            }
        });
    }
  // Lógica de Eliminación
  eliminarEscoba(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar esta escoba?')) {
      this.productoService.eliminarEscoba(id).subscribe({
        next: () => {
          console.log(`Escoba con ID ${id} eliminada.`);
          this.cargarEscobas(); 
        },
        error: (err) => {
          console.error('Error al eliminar escoba:', err);
          alert('Error al eliminar: revisa la consola y el backend.');
        }
      });
    }
  }

  // Lógica del Formulario
  abrirFormularioCreacion(): void {
    if (this.fabricantesDisponibles.length === 0) {
        alert('Cree al menos un fabricante antes de crear una escoba.');
        return;
    }
    this.mostrarFormulario = true;
    this.nuevaEscoba = { nombre: '', color: '', tipoDeMadera: '', longitudCm: null, usoRecomendado: '' };
    this.fabricanteSeleccionadoId = this.fabricantesDisponibles[0].id; 
  }

  cerrarFormularioCreacion(): void {
    this.mostrarFormulario = false;
  }

  enviarFormularioCreacion(): void {
    if (!this.nuevaEscoba.nombre || !this.fabricanteSeleccionadoId) {
      alert('El Nombre/Modelo y el Fabricante son obligatorios.');
      return;
    }
    
    // Mapea los datos del formulario al objeto Escoba para enviar
    const escobaParaEnviar = {
        nombre: this.nuevaEscoba.nombre, // El nombre que el POST requiere
        color: this.nuevaEscoba.color,
        tipoDeMadera: this.nuevaEscoba.tipoDeMadera,
        longitudCm: this.nuevaEscoba.longitudCm,
        usoRecomendado: this.nuevaEscoba.usoRecomendado,
    } as Escoba;


    this.productoService.crearEscoba(escobaParaEnviar, this.fabricanteSeleccionadoId).subscribe({
      next: () => {
        alert('Escoba creada con éxito!');
        this.cerrarFormularioCreacion();
        this.cargarEscobas(); 
      },
      error: (err) => {
        console.error('Error al crear escoba:', err);
        alert('Error al crear: revisa la consola y el backend.');
      }
    });
  }
}