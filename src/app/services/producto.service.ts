import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// La URL Base de tu Backend
const API_URL = 'https://semihumanized-stoopingly-emerald.ngrok-free.dev/api'; 

// --- Interfaces del Backend ---
export interface Escoba { 
  id: number;
  modelo?: string; 
  nombre?: string; 
  color: string;
  tipoDeMadera: string;
  longitudCm: number; // Propiedad faltante 1 (es un número, según el esquema)
  usoRecomendado: string; // Propiedad faltante 2
  fabricante: Fabricante; // Si quieres incluir el objeto Fabricante relacionado
}

export interface Fabricante { 
  id: number;
  nombre: string;
  anoFundacion: number; // Suponemos que es number por el '0' en el esquema
  sitioWeb: string;
  escobas: Escoba[]; // Un arreglo de Escobas (si ya definiste la interfaz Escoba)
}

@Injectable({
  providedIn: 'root' 
})
export class ProductoService {
  
  constructor(private http: HttpClient) { }

  // 1. Endpoint para Escobas: http://localhost:8080/api/escobas
  obtenerTodasLasEscobas(): Observable<Escoba[]> {
    return this.http.get<Escoba[]>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/escobas`); 
  }

  // 2. Endpoint para Fabricantes: http://localhost:8080/api/fabricantes
  obtenerTodosLosFabricantes(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/fabricantes`); 
  }

    // Endpoint para ELIMINAR una Escoba (DELETE /api/escobas/{id})
  eliminarEscoba(id: number): Observable<any> {
    // Nota: El backend de Java suele esperar un ID en la URL para DELETE
    return this.http.delete(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/escobas/${id}`); 
  }

  // Endpoint para ELIMINAR un Fabricante (DELETE /api/fabricantes/{id})
  eliminarFabricante(id: number): Observable<any> {
    return this.http.delete(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/fabricantes/${id}`);
  }
   crearFabricante(fabricante: Fabricante): Observable<Fabricante> {
    // Nota: enviamos el objeto Fabricante sin el campo 'escobas'
    // El Backend de Java debe recibir un objeto Fabricante
    return this.http.post<Fabricante>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/fabricantes`, fabricante);
  }
  crearEscoba(escoba: Escoba, fabricanteId: number): Observable<Escoba> {
    // URL: /api/escobas/fabricante/{fabricanteId}
    return this.http.post<Escoba>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/escobas/fabricante/${fabricanteId}`, escoba);
  }
  // NUEVO: Método para ACTUALIZAR una Escoba (PUT /api/escobas/{id})
  actualizarEscoba(id: number, escoba: Escoba): Observable<Escoba> {
    // Nota: enviamos el objeto Escoba completo, incluyendo el ID en la URL
    return this.http.put<Escoba>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/escobas/${id}`, escoba);
  }
  actualizarFabricante(id: number, fabricante: Fabricante): Observable<Fabricante> {
    // Nota: enviamos el objeto Fabricante completo, incluyendo el ID en la URL
    return this.http.put<Fabricante>(`https://semihumanized-stoopingly-emerald.ngrok-free.dev/api/fabricantes/${id}`, fabricante);
  }
}