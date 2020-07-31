import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTrademark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'eal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'website';
  public menu = faBars;
  public copyright = faTrademark;

  menuMovil() {
    const x = document.getElementById('myNavbar');
    if (x.className === 'navbar') {
      // alert ('funcion accionada');
      x.className += ' responsive';
      } else {
        x.className = 'navbar';
      }
    }
}
