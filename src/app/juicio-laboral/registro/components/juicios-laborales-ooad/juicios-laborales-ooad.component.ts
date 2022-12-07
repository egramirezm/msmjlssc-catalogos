import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-juicios-laborales-ooad',
  templateUrl: './juicios-laborales-ooad.component.html',
  styleUrls: ['./juicios-laborales-ooad.component.scss']
})
export class JuiciosLaboralesOoadComponent extends GeneralComponent implements OnInit {

  constructor(public router: Router,) {super(router); }

  inputEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  //actor principal
  modelActor:any={};
  formActor = new FormGroup({});
  //conflicto individuals
  modelConflicto:any={};
  formConflicto = new FormGroup({});
  //finado
  modelFinado:any={};
  formFinado = new FormGroup({});
  //representante
  modelRepresentante:any={};
  formRepresentante = new FormGroup({});
  //acciones reclamadas
  modelAcciones:any={};
  formAcciones = new FormGroup({});
  //datos del juicio
  modelJuicio:any={};
  formJuicio = new FormGroup({});
  //abogado responsable
  modelAbogado:any={};
  formAbogado = new FormGroup({});
  //campos

  fieldsActor: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'cveClaseActor',
          type: 'select',
          templateOptions: {
            label: 'Clase de actor',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'cveClaseActor',

        },
      ],
    },
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
          className: 'col-md-6',
          key: 'curp',
          type: 'input',
          templateOptions: {
            label: 'CURP',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'rfc',
          type: 'input',
          templateOptions: {
            label: 'RFC',
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
          key: 'salarioBase',
          type: 'input',
          templateOptions: {
            label: 'Salario base',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'umf',
          type: 'input',
          templateOptions: {
            label: 'UMF dónde recibe atención',
            required: true,
          },
        },
        {
          className: 'col-md-3',

        },
        {
          className: 'col-md-3',
          key: 'btn-reg-act',
          type: 'button',
          templateOptions: {
            label: ' ',
            classBtn: 'btn-fill btn-full-width btn-sm',
            text: 'Agregar Actor',
            onClick: (to) => {
              console.log('agregar actor')
            },
          },
        },
      ],
    },
  ];

  fieldsConflicto: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'ultimoPatron',
          type: 'input',
          templateOptions: {
            label: 'Último patrón',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'estado',
          type: 'select',
          templateOptions: {
            label: 'Estado',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'alcaldia',
          type: 'select',
          templateOptions: {
            label: 'Alcaldia/municipio',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'calle',
          type: 'input',
          templateOptions: {
            label: 'Calle',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'colonia',
          type: 'select',
          templateOptions: {
            label: 'Colonia',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
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
          key: 'numExterior',
          type: 'input',
          templateOptions: {
            label: 'Núm. exterior',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'numInterior',
          type: 'input',
          templateOptions: {
            label: 'Núm. interior',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'cp',
          type: 'input',
          templateOptions: {
            label: 'Código postal',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'fecNacimiento',
          type: 'date',
          templateOptions: {
            label: 'Fecha de nacimiento',
            placeholder: 'dd/mm/aaaa',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'documento',
          type: 'select',
          templateOptions: {
            label: 'Documento que adjunto como prueba',
            placeholder: 'Selecciona o captura',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'incompetencia',
          type: 'mat-radio',
          templateOptions: {
            type: 'mat-radio',
            label: '¿Ofrece pericial médica?',
            options: [
              { value: 1, label: 'Sí' },
              { value: 0, label: 'No' },
            ],
            required: true,
          },
        },
      ],
    },
  ];

  fieldsFinado: FormlyFieldConfig[] = [
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
          key: 'afilicacion',
          type: 'input',
          templateOptions: {
            label: 'Afiliación',
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
          className: 'col-md-6',
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
            required: true,
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
          },
        },
        {
          className: 'col-md-3',
          key: 'btn-agr-fin',
          type: 'button',
          templateOptions: {
            label: ' ',
            classBtn: 'btn-fill btn-full-width btn-sm',
            text: 'Agregar Finado',
            onClick: (to) => {
              console.log('agregar Finado')
            },
          },
        },
      ],
    },
  ];

  fieldsRepresentante: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
        className: 'col-md-6',
        key: 'nombre',
        type: 'select',
        templateOptions: {
          label: 'Nombre',
          required: true,
          placeholder: 'Seleccionar',
          options: [],
          valueProp: 'value',
          labelProp: 'label',
        },
      },
      {
        className: 'col-md-6',

      },
    ],
    },
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
          className: 'col-md-6',
          key: 'correo',
          type: 'input',
          templateOptions: {
            label: 'Correo electrónico',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'telefono',
          type: 'input',
          templateOptions: {
            label: 'Teléfono',
            required: true,
          },
        },

      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-12',
          key: 'despacho',
          type: 'input',
          templateOptions: {
            label: 'Despacho',
            required: true,
          },
        },

      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'estado',
          type: 'select',
          templateOptions: {
            label: 'Estado',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'alcaldia',
          type: 'select',
          templateOptions: {
            label: 'Alcaldia/municipio',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'calle',
          type: 'input',
          templateOptions: {
            label: 'Calle',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'colonia',
          type: 'select',
          templateOptions: {
            label: 'Colonia',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
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
          key: 'numExterior',
          type: 'input',
          templateOptions: {
            label: 'Núm. exterior',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'numInterior',
          type: 'input',
          templateOptions: {
            label: 'Núm. interior',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'cp',
          type: 'input',
          templateOptions: {
            label: 'Código postal',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'fecNacimiento',
          type: 'button',
          templateOptions: {
            label: ' ',
            classBtn: 'btn-fill btn-full-width btn-sm',
            text: 'Agregar representante',
            onClick: (to) => {
              console.log('agregar representante')
            },
          },
        },
      ],
    },
  ];

  fieldsAcciones: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-9',
          key: 'accion',
          type: 'input',
          templateOptions: {
            label: 'Acción reclamado',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'importe',
          type: 'input',
          templateOptions: {
            label: 'Importe estimado',
            required: true,
          },
        },
      ],
    },
  ];

  fieldsJuicio: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-3',
          key: 'fecPresentacion',
          type: 'date',
          templateOptions: {
            label: 'Fecha de presentacion',
            placeholder: 'dd/mm/aaaa',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'fecNotificacion',
          type: 'date',
          templateOptions: {
            label: 'Fecha de notificacion',
            placeholder: 'dd/mm/aaaa',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'codemandado',
          type: 'input',
          templateOptions: {
            label: 'Codemandado',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'trascendencia',
          type: 'select',
          templateOptions: {
            label: 'Tipo de trascendencia',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'fecAudienciaInicial',
          type: 'date',
          templateOptions: {
            label: 'Fecha de audiencia de inicial',
            placeholder: 'dd/mm/aaaa',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'hora',
          type: 'time',
          templateOptions: {
            label: 'Hora',
            required: true,
          },
        },
      ],
    },
  ];

  fieldsAbogado: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-9',
          key: 'abogado',
          type: 'select',
          templateOptions: {
            label: 'Abogado',
            placeholder: 'Seleccionar',
            options: [],
            valueProp: 'value',
            labelProp: 'label',
            required: true,
          },
        },
        {
          className: 'col-md-3',
          key: 'fecAsignacion',
          type: 'date',
          templateOptions: {
            label: 'Fecha de asignación',
            placeholder: 'dd/mm/aaaa',
            required: true,
          },
        },
      ],
    },
  ];

  ngOnInit(): void {
  }


  doRegistrar = async (): Promise<void> => {

    this.inputEvent.next('valida');
    console.log('manda señal que se valide para registrar')

  };


  receiveDemandaEvent($event){
    console.log('receive Event',$event)
  }
}
