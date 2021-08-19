import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AppState } from '../../../store/app.reducers';
import { CARGAR_USUARIOS } from '../../../store/actions/usuarios.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  usuariosSubscription!: Subscription;
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}
  // private usuarioService: UsuarioService
  ngOnInit(): void {
    // this.usuarioService.getUsers().subscribe((infoUsers) => {
    //   console.log(infoUsers);
    //   this.usuarios =  infoUsers;
    // });

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {

      this.usuarios = users;
      this.loading = loading;
      this.error = error

    })
    this.store.dispatch( CARGAR_USUARIOS() );

  }
}
