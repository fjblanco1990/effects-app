import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
   usuarios: reducers.UsuariosState,
   usuarioReducer: reducers.UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuarioReducer: reducers.usuarioReducer
}
