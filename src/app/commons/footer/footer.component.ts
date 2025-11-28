import { Component, OnInit } from '@angular/core';
// Importa el módulo de router, si lo usas en el footer
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  // Limpia los imports si no los usas: solo deja lo necesario (ej: RouterLink)
  imports: [RouterLink], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  // !!! AÑADE ESTA LÍNEA !!!
  currentYear: number;

  constructor() {
    // Inicializa la variable con el año actual
    this.currentYear = new Date().getFullYear(); 
  }
  
  ngOnInit(): void {
    // Este método es opcional, pero lo dejamos si quieres inicializar algo más
  }
}