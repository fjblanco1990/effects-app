
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap, catchError, mergeMap } from 'rxjs/operators';
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';

import { of } from "rxjs";

@Injectable()
export class UsuarioEffects {

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  constructor(private actions$: Actions, private usuarioService: UsuarioService) { }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
        // cual es el observbable que quiero escuchar
        ofType( usuariosActions.CARGAR_USUARIO ),
        //diparar un nuevo observable y que se unan , mezclarlo
        mergeMap(
          //call bak
          ( action ) => {
              return this.usuarioService.getUsersById( action.id )
              .pipe(
                  tap( pepito => console.log('getUsersById effect', pepito)),
                  map( data => usuariosActions.CARGAR_USUARIO_SUCCESS({ usuario: data })),
                  catchError( error => of( usuariosActions.CARGAR_USUARIO_ERRROR({ payload: error })))
                )
             })
        )
      )
}
