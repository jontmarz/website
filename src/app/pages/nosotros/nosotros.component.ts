import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eal-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'ESTUDIO';
  }

  ngOnInit(): void {
  }

}
