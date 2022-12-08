import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { NoExpediente } from 'src/app/comun/formly-validator/validators';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.scss']
})
export class DemandaComponent extends GeneralComponent implements OnInit {

  @Input() inputEvent: BehaviorSubject<any>;

  @Output() demandaEvent = new EventEmitter<any>();
  constructor() {
    super();
  }


  ngOnInit(): void {
    this.inputEvent.subscribe( evnt => {
      if(evnt){
        console.log(evnt);
        this.doEventEmitter();
      }

    } )

  }
    //demanda
    modelDemanda:any={};
    formDemanda = new FormGroup({});


  fieldsDemanda: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-12',
          key: 'cveJunta',
          type: 'select',
          templateOptions: {
            label: 'Junta',
            placeholder: 'Seleccionar',
            options: this._catalogoService.getJunta(),
            valueProp: 'value',
            labelProp: 'label',
            required: true,
            change :(field,$event)=>{
              this.onValidaExpediente();
            }
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-3',
          key: 'numExpediente',
          type: 'input-zero-fill',
          templateOptions: {
            label: 'Número de expediente',
            change :(field,$event)=>{
              this.onValidaExpediente();
            }
          },
          validators: {
            validation: [NoExpediente],
          },
        },
        {
          className: 'col-md-3',
          key: 'anioExpediente',
          type: 'input-anio',
          templateOptions: {
            label: 'Año del expediente',
            change :(field,$event)=>{
              this.onValidaExpediente();
            }
          }
        },
        {
          className: 'col-md-6',
          key: 'incompetencia',
          type: 'mat-radio',
          defaultValue : 0,
          wrappers: ['mat-radio-wrapper-inline',],
          templateOptions: {
            type: 'mat-radio',
            label: '¿Procede de una incompetencia?',
            options: [
              { value: 0, label: 'No' },
              { value: 1, label: 'Sí' },
            ],
            change: (field, $event)=>{
              if(field.formControl.value==0){
                console.log('se limpia formulario')
                field.form.controls.numExpedienteIncompetencia.setValue(null);
                field.form.controls.anioExpedienteIncompetencia.setValue(null);
                field.form.controls.cveJuntaIncompetencia.setValue(null);
              }
          },
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-3',
          key: 'numExpedienteIncompetencia',
          type: 'input-zero-fill',
          templateOptions: {
            label: 'Número de expediente',
            change :(field,$event)=>{
              this.onValidaExpedienteIncompetencia();
            }
          },
          validators: {
            validation: [NoExpediente],
          },

          expressionProperties:{
            'templateOptions.disabled': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return false;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return true;
              }
            },
            'templateOptions.required': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return true;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return false;
              }
            },
          }

        },
        {
          className: 'col-md-3',
          key: 'anioExpedienteIncompetencia',
          type: 'input-anio',
          templateOptions: {
            label: 'Año del expediente',
            change :(field,$event)=>{
              this.onValidaExpedienteIncompetencia();
            }
          },
          expressionProperties:{
            'templateOptions.disabled': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return false;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return true;
              }
            },
            'templateOptions.required': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return true;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return false;
              }
            },
          }
        },
        {
          className: 'col-md-6',
          key: 'cveJuntaIncompetencia',
          type: 'select',
          templateOptions: {
            label: 'Junta',
            placeholder: 'Seleccionar',
            options: this._catalogoService.getJunta(),
            valueProp: 'value',
            labelProp: 'label',
            change :(field,$event)=>{
              this.onValidaExpedienteIncompetencia();
            }

          },
          expressionProperties:{
            'templateOptions.disabled': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return false;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return true;
              }
            },
            'templateOptions.required': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return true;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return false;
              }
            },
          }
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'reponeProcedimiento',
          type: 'mat-radio',
          wrappers: ['mat-radio-wrapper-inline',],
          templateOptions: {
            type: 'mat-radio',
            label: '¿Se repone procedimiento?',
            options: [
              { value: 0, label: 'No' },
              { value: 1, label: 'Sí' },
            ],
            change: (field, $event)=>{
                this.onReponeProcedimiento(field.formControl.value);

          },

          },
          hideExpression: () => {
            if(this.modelDemanda.incompetencia == 1){
              return false;
            }
            if(this.modelDemanda.incompetencia == 0){
                return true;
            }
         },
          expressionProperties:{
            'templateOptions.disabled': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return false;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return true;
              }
            },
            'templateOptions.required': (model: any) => {
              if(this.modelDemanda.incompetencia == 1){
                return true;
              }
              if(this.modelDemanda.incompetencia == 0){
                  return false;
              }
            },
          }
        },
      ],
    },
  ];

  doEventEmitter(){

    if(this.formDemanda.invalid){
      const formValidar = [
        this.formDemanda
      ];
      this.validaCamposFormulario(formValidar);
      return;
    }
    console.log(this.modelDemanda)
    let data = {
      formValido : this.formDemanda.valid,
      modelo:this.modelDemanda
    }
    this.demandaEvent.emit(data)
  };


  onValidaExpediente(){
    // valida los campos de numero de juicio año de expediente y junta para realizar una busqueda del expediente
    setTimeout(() => {
      if(this.formDemanda.controls.cveJunta.valid &&
        this.formDemanda.controls.numExpediente.valid &&
        this.formDemanda.controls.anioExpediente.valid){
        this._alertsServices.error('Valida vxpediente si ya se encuentra registrado')
      }
     }, 200);
  }

  onValidaExpedienteIncompetencia(){
    // valida los campos de numero de juicio año de expediente y junta para realizar una busqueda del expediente de inccompetencia
    setTimeout(() => {
      if( this.formDemanda.controls.cveJuntaIncompetencia.valid &&
        this.formDemanda.controls.numExpedienteIncompetencia.valid &&
        this.formDemanda.controls.anioExpedienteIncompetencia.valid ){
        this._alertsServices.error('Valida expediente ya se encuentra registrado y concluido el incidente de Incompetencia')
      }
     }, 200);

     setTimeout(() => {

        this._alertsServices.error('Otra jefatura tiene asignado el expediente')

     }, 400);
  }

  onReponeProcedimiento(value){
    // validar si existe procedimiento
    // si
    if(value == 1){
      setTimeout(() => {
        this._alertsServices.error('el sistema debe replicar la toda información del expediente terminado por Incompetencia al nuevo expediente que se está capturando y se resplicará la información de la fases procesales del expediente terminado por incompetencia, incluyendo el nombre del usuario y fecha de las actualizaciones (historial). La única información que capturará el abgoado es abogado responsable, la fecha de asignación del abogado, representante')
     }, 200);
    }


    //no
    if(value == 0){
      setTimeout(() => {
        this._alertsServices.error(' El sistema debe replicar la información de Actor(es), Acción(es) Reclamada(s), finados, trascendencia, CISS, fecha de presentación y fecha de notificación. El susuario debe de acpturar abogado responsable, fecha de asignación de abogado, representante, fecha y hora de audiencia inicial y cargar el documento de la incompetencia.')
     }, 200);
    }



  }
}
