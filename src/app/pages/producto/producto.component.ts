// En src/app/pages/producto/producto.component.ts
import { Component, OnInit } from '@angular/core';
// Importa ProductoService, Escoba (que es tu producto real) y Fabricante
import { ProductoService, Escoba, Fabricante } from '../../services/producto.service'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  // 1. CORRECCIÓN: Usar la interfaz 'Escoba' en lugar de 'Producto'
  productos: Escoba[] = []; 
  cargando: boolean = true;
  error: any = null;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarEscobas(); // Renombrar el método local a algo más claro
  }

  cargarEscobas(): void {
    // 2. CORRECCIÓN: Llamar al método correcto del servicio
    this.productoService.obtenerTodasLasEscobas().subscribe({ 
      // 3. CORRECCIÓN: Añadir tipos explícitos a 'next' y 'error'
      next: (data: Escoba[]) => {
        this.productos = data;
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al obtener productos (Escobas)', err);
        this.error = 'No se pudieron cargar las escobas.';
        this.cargando = false;
      }
    });
  }
}