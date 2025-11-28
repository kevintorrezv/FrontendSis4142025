import { Component } from '@angular/core';
// AÑADE ESTAS LÍNEAS
import { RouterOutlet } from '@angular/router'; 
import { MenuComponent } from './commons/menu/menu.component'; 
import { FooterComponent } from './commons/footer/footer.component'; 

@Component({
  selector: 'app-root',
  // DEBEMOS ASUMIR standalone: true (si no lo tienes, añádelo)
  standalone: true, 
  // AÑADE ESTA LÍNEA
  imports: [RouterOutlet, MenuComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  title = 'myPage';
}