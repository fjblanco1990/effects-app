import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios/usuarios.module';
import { StoreModule } from '@ngrx/store';
import { usuariosReducer } from './store/reducers/usuarios.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';

import { EffectsArray } from './store/effects/index';
import { appReducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    // StoreModule.forRoot({ count: usuariosReducer }),StoreModule.forRoot(appReducers)
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
