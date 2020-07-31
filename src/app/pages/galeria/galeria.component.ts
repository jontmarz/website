import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eal-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  public galeria = [
    '../../../assets/img/galeria/image1.png',
    '../../../assets/img/galeria/image2.png',
    '../../../assets/img/galeria/image3.png',
    '../../../assets/img/galeria/image4.png',
    '../../../assets/img/galeria/image5.png',
    '../../../assets/img/galeria/image6.png',
    '../../../assets/img/galeria/image7.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
