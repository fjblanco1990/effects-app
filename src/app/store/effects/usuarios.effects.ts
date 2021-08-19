import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap, tap, catchError } from 'rxjs/operators';
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import * as actionsUsuarios from '../actions/usuarios.actions';
import { of } from "rxjs";

@Injectable()
export class UsuariosEffects {

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  constructor(private actions$: Actions, private usuarioService: UsuarioService) { }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
        // cual es el observbable que quiero escuchar
        ofType( usuariosActions.CARGAR_USUARIOS ),
        //diparar un nuevo observable y que se unan , mezclarlo
        switchMap(
          //call bak
          () => {
              return this.usuarioService.getUsers()
              .pipe(
                  tap( data => console.log('getUsers effect', data)),
                  map( data => actionsUsuarios.CARGAR_USUARIOS_SUCCESS({ usuarios: data })),
                  catchError( error => of( actionsUsuarios.CARGAR_USUARIOS_ERRROR({ payload: error })))
                )
             })
        )
      )
}
