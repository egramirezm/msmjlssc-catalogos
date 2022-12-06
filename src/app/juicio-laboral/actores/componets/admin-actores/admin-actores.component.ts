import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-admin-actores',
  templateUrl: './admin-actores.component.html',
  styleUrls: ['./admin-actores.component.scss']
})
export class AdminActoresComponent extends GeneralComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
 
  constructor() {
    super();
  }

  //actor principal
  modelActor:any={};
  formActor = new FormGroup({});

  ngOnInit(): void {
  }

  fieldsActor: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'nombre',
          type: 'input',
          templateOptions: {
            label: 'Nombre(s)',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'apellidoPaterno',
          type: 'input',
          templateOptions: {
            label: 'Apellido paterno',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'apellidoMaterno',
          type: 'input',
          templateOptions: {
            label: 'Apellido materno',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-3',
          key: 'matricula',
          type: 'input',
          templateOptions: {
            label: 'Matrícula',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'afiliacion',
          type: 'input',
          templateOptions: {
            label: 'Afiliacion',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'curp',
          type: 'input',
          templateOptions: {
            label: 'CURP',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'rfc',
          type: 'input',
          templateOptions: {
            label: 'RFC',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-4',
          key: 'umf',
          type: 'input',
          templateOptions: {
            label: 'UMF dónde recibe atención',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'genero',
          type: 'select',
          templateOptions: {
            label: 'Género',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-3',

        },
        {
          className: 'col-md-2',
          key: 'btn-reg-act',
          type: 'button',
          templateOptions: {
            label: ' ',
            classBtn: 'btn-fill2 btn-full-width btn-sm',
            text: 'Agregar Actor',
            onClick: (to) => {
              console.log('agregar actor')
            },
          },
        },
      ],
    },
  ];

  

}
