import { UsuarioComponent } from './usuarios/usuarios/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './usuarios/usuarios/lista/lista.component';

const routes: Routes = [
  { path: 'home', component: ListaComponent },
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
