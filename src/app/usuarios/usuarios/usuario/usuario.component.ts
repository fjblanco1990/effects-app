import { CARGAR_USUARIO } from './../../../store/actions/usuario.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario: UsuarioModel;
  loading: boolean = false;
  error: any;
  suscriptionUsuario: Subscription;
  suscriptionRouter: Subscription;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.suscriptionUsuario = this.store.select('usuarioReducer').subscribe( ({  user, loading, error }) => {
      this.usuario = user;
      this.error =  error;
      this.loading = loading;
    })

    this.suscriptionRouter = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(CARGAR_USUARIO({id}))
    })
  }

  ngOnDestroy() {
      this.suscriptionRouter.unsubscribe();
      this.suscriptionUsuario.unsubscribe();
  }


}
