import { createReducer, on } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';
import { CARGAR_USUARIOS, CARGAR_USUARIOS_SUCCESS, CARGAR_USUARIOS_ERRROR } from '../actions';


export interface UsuariosState {
   users: UsuarioModel[],
   loaded: boolean,
   loading: boolean,
   error: any
}

export const UsuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usuariosReducer = createReducer(UsuariosInitialState,

    on( CARGAR_USUARIOS, state => ({ ...state, loading: true})),
    on( CARGAR_USUARIOS_SUCCESS, ( state, { usuarios }) =>
     {
       console.log('CARGAR USUARIOS SUCCESS', [...usuarios]);
       var test = ({
        ...state,
        users: [...usuarios],
        loading: false,
        loaded: true,
       })
       console.log('objt SUCCESS', test);
       return test;
    }),
    // on( CARGAR_USUARIOS_SUCCESS, ( state, { usuarios }) => ({
    //    ...state,
    //    users: [...usuarios],
    //    loading: false,
    //    loaded: true,
    // })),

    on( CARGAR_USUARIOS_ERRROR, (state, { payload }) => ({
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

export function usuariosReducer(state: any, action: any) {
    return _usuariosReducer(state, action);
}
