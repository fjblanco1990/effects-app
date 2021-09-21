
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { CLEAR_STATE } from '../../../store/actions/usuario.actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  irUsuario(id: string): any {
      this.store.dispatch(CLEAR_STATE());
      if (!id) { return null; }
      this.router.navigate(['/usuario', id])
  }
}
