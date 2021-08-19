import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = createAction(
  '[Usuarios] Cargar Usuarios'
);

export const CARGAR_USUARIOS_SUCCESS = createAction(
   '[Usuarios] Cargar Usuarios Success',
   props<{ usuarios: UsuarioModel[]}>()
);

export const CARGAR_USUARIOS_ERRROR = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{ payload: any}>()
);
