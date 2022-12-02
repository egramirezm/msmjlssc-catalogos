import { Component, Input, OnInit, Output } from '@angular/core';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  @Input() callbackFunction: () => void;

  @Input() disableBtn: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRegistrar(){
    this.callbackFunction()
  }
}
