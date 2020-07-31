import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eal-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  public title: string;
  public items = [
    'Branding y Diseño Gráfico',
    'Social Media y Marketing',
    'Diseño y Desarrollo Web',
    'E-Commerce y Analytics',
    'Video, Motions Graphics y Fotografía'
  ];

  constructor() {
    this.title = 'Servicios';
  }

  ngOnInit(): void {
  }

}
