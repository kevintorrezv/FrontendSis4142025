// En src/app/pages/home/home.component.ts

import { Component, OnInit } from '@angular/core';
// !!! AÑADE ESTAS LÍNEAS !!!
import { RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  // ¡Asegúrate de que RouterLink y CommonModule estén aquí!
  imports: [CommonModule, RouterLink], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {
    // Si necesitas inicializar algo en el constructor
  }

  // !!! AÑADE ESTE MÉTODO !!!
  ngOnInit(): void {
    // Este método se ejecuta cuando el componente se inicia. 
    // Puedes dejarlo vacío si no necesitas hacer nada al inicio.
  }
}