
import { createReducer, on } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';
import { CARGAR_USUARIO, CARGAR_USUARIO_SUCCESS, CARGAR_USUARIO_ERRROR } from '../actions';


export interface UsuarioState {
   id     : string,
   user   : UsuarioModel,
   loaded : boolean,
   loading: boolean,
   error  : any
}

export const usuarioInitialState: UsuarioState = {
  id     : '',
  user   : null,
  loaded : false,
  loading: false,
  error  : null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on( CARGAR_USUARIO, (state, { id }) => ({
       ...state,
       loading: true,
       id: id
      })),

    on( CARGAR_USUARIO_SUCCESS, ( state, { usuario }) => ({
       ...state,
       user: {...usuario},
       loading: false,
       loaded: true,
    })),

    on( CARGAR_USUARIO_ERRROR, (state, { payload }) => ({
       ...state,
       loading: false,
       loaded: false,
       // error: payload
       error: {
          url: payload.url,
          name: payload.name,
          message: payload.message
      }
    })),
);

export function usuarioReducer(state: any, action: any) {
    return _usuarioReducer(state, action);
}
