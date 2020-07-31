import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'eal-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public title: string;
  public contact: Contact;

  constructor() {
    this.title = 'HABLEMOS...';
    this.contact = new Contact('', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    alert('Mensaje de prueba');
    form.reset();
  }
}
