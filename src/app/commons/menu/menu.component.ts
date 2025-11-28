import { Component } from '@angular/core';
// AÑADE ESTA LÍNEA
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  // DEBEMOS ASUMIR standalone: true (si no lo tienes, añádelo)
  standalone: true, 
  // AÑADE ESTA LÍNEA
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent { }