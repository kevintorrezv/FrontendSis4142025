import { Routes } from '@angular/router';


import { MenuComponent } from './commons/menu/menu.component';

import { EscobasComponent } from './pages/escobas/escobas.component'; 
import { HomeComponent } from './pages/home/home.component'; 
import { ProductoComponent } from './pages/producto/producto.component'; 
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FabricantesComponent } from './pages/fabricantes/fabricantes.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent }, 
    
    
    { path: 'contactos', component: ContactosComponent }, 
    { path: 'producto', component: ProductoComponent },   
    { path: 'fabricantes', component: FabricantesComponent }, 
    
    
    { path: 'escobas', component: EscobasComponent },
    
    
    { path: '**', redirectTo: '' }
];