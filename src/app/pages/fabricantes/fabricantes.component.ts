import { Component, OnInit } from '@angular/core';
import { ProductoService, Fabricante, Escoba } from '../../services/producto.service'; 
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-fabricantes',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  template: `
    <div class="container mt-4">
      <h2>Lista de Fabricantes</h2>
      
      <button *ngIf="!mostrarFormulario && !editMode" class="btn-create" (click)="abrirFormularioCreacion()">Crear Nuevo Fabricante</button>
      <hr>

      <div *ngIf="mostrarFormulario || editMode" class="form-card">
        <h3>{{ editMode ? 'Editar Fabricante (ID: ' + formFabricante.id + ')' : 'Nuevo Fabricante' }}</h3>
        
        <form (ngSubmit)="guardarFabricante()">
          
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" [(ngModel)]="formFabricante.nombre" name="nombre" required>
          
          <label for="fundacion">Año de Fundación:</label>
          <input type="number" id="fundacion" [(ngModel)]="formFabricante.anoFundacion" name="fundacion">
          
          <label for="sitioWeb">Sitio Web:</label>
          <input type="text" id="sitioWeb" [(ngModel)]="formFabricante.sitioWeb" name="sitioWeb">

          <button type="submit" class="btn-submit">{{ editMode ? 'Guardar Cambios' : 'Guardar Fabricante' }}</button>
          <button type="button" class="btn-cancel" (click)="cerrarFormulario()">Cancelar</button>
        </form>
        <hr>
      </div>
      
      <div *ngIf="cargando" class="no-data-message">Cargando fabricantes...</div>
      <div *ngIf="error" class="error-message">Error: {{ error }}</div>
      
      <div *ngIf="!cargando && fabricantes.length > 0" class="data-grid">
        <div *ngFor="let fabricante of fabricantes" class="data-card">
          <button class="btn-delete" (click)="eliminarFabricante(fabricante.id)">Eliminar</button>
          <div class="crud-buttons">
              <button class="btn-edit" (click)="abrirFormularioEdicion(fabricante)">Editar</button>
          </div>

          <h4>{{ fabricante.nombre }}</h4>
          <p>ID: {{ fabricante.id }}</p>
          <p>Fundación: {{ fabricante.anoFundacion }}</p>
          <p>Web: <a [href]="'http://' + fabricante.sitioWeb" target="_blank">{{ fabricante.sitioWeb }}</a></p>
          <p>Productos: <strong>{{ fabricante.escobas.length }}</strong></p>
          
          <hr>
          <details>
            <summary>Ver Escobas ({{ fabricante.escobas.length }})</summary>
            <ul class="escoba-list">
                <li *ngIf="fabricante.escobas.length === 0">No hay escobas para este fabricante.</li>
                <li *ngFor="let escoba of fabricante.escobas">
                    - {{ escoba.modelo || 'Modelo NO Definido' }} ({{ escoba.color || 'sin color' }})
                </li>
            </ul>
          </details>
        </div>
      </div>
      
      <div *ngIf="!cargando && fabricantes.length === 0 && !error" class="no-data-message">
        <p>No se encontraron fabricantes.</p>
      </div>
    </div>
  `, 
  styleUrl: './fabricantes.component.css'
})
export class FabricantesComponent implements OnInit {
  fabricantes: Fabricante[] = [];
  cargando: boolean = true;
  error: string | null = null;
  
  mostrarFormulario: boolean = false; 
  editMode: boolean = false; 
  formFabricante: any = {}; 

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarFabricantes();
  }

  cargarFabricantes(): void {
    this.cargando = true;
    this.error = null;

    this.productoService.obtenerTodosLosFabricantes().subscribe({ 
      next: (data: Fabricante[]) => { 
        this.fabricantes = data; 
        this.cargando = false; 
      },
      error: (err: any) => { 
        console.error('Error al obtener fabricantes:', err);
        this.error = 'Falló la conexión o la carga de datos.';
        this.cargando = false; 
      }
    });
  }
  
  eliminarFabricante(id: number): void {
    if (confirm('ADVERTENCIA: ¿Seguro que desea eliminar este fabricante y todas sus Escobas?')) {
      this.productoService.eliminarFabricante(id).subscribe({
        next: () => { alert('Eliminado!'); this.cargarFabricantes(); },
        error: (err) => { console.error('Error al eliminar fabricante:', err); alert('Error al eliminar: revisa la consola y el backend.'); }
      });
    }
  }

  abrirFormularioCreacion(): void {
    this.editMode = false;
    this.mostrarFormulario = true;
    this.formFabricante = { nombre: '', anoFundacion: null, sitioWeb: '' }; 
  }

  abrirFormularioEdicion(fabricante: Fabricante): void {
    this.editMode = true;
    this.mostrarFormulario = true;
    this.formFabricante = { ...fabricante }; 
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.editMode = false;
    this.formFabricante = {};
  }

  guardarFabricante(): void {
    if (!this.formFabricante.nombre) {
      alert('El nombre es obligatorio.');
      return;
    }

    if (this.editMode) {
      this.productoService.actualizarFabricante(this.formFabricante.id, this.formFabricante).subscribe({
        next: () => { alert('Actualizado con éxito!'); this.cerrarFormulario(); this.cargarFabricantes(); },
        error: (err) => { console.error(err); alert('Error al actualizar.'); }
      });
    } else {
      this.productoService.crearFabricante(this.formFabricante as Fabricante).subscribe({
        next: () => { alert('Creado con éxito!'); this.cerrarFormulario(); this.cargarFabricantes(); },
        error: (err) => { console.error(err); alert('Error al crear.'); }
      });
    }
  }
}