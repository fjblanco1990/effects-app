import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string | null}>()
);

export const CARGAR_USUARIO_SUCCESS = createAction(
   '[Usuario] Cargar Usuario Success',
   props<{ usuario: UsuarioModel}>()
);

export const CARGAR_USUARIO_ERRROR = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{ payload: any}>()
);

export const CLEAR_STATE = createAction(
  '[Usuario] Borrar estado'
);
