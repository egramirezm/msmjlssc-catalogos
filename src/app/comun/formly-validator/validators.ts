import { FormControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

const currentYear = new Date().getFullYear();

 export function zeroFill( number, width )
 {
  return (number + '').padStart(width, '0').slice(-width)
 }

 export function NoExpediente(control: FormControl,field: FormlyFieldConfig): ValidationErrors {

  if(!control.value || control.value.length < field.templateOptions.minLength){
    return {'minlength':{message:`Debería tener al menos ${field.templateOptions.minLength} dígitos`}}
  }
  if(!control.value || !/(\d{4})/.test(control.value) || control.value == '0000'){
   return  {'nombre': {message:`"${field.formControl.value}" no es un valor válido`}}
  }

  return null;

}

 export function NoAnio(control: FormControl,field: FormlyFieldConfig): ValidationErrors {

  if(!control.value || control.value.length < field.templateOptions.minLength){
    return {'minlength':{message:`Debería tener al menos ${field.templateOptions.minLength} dígitos`}}
  }
  if(!control.value || !/(\d{4})/.test(control.value) ){
   return  {'nombre': {message:`"${field.formControl.value}" no es un año valido`}}
  }
  let val:number = Number(control.value);
  if(val > currentYear){
    return  {'anio': {message:`El año tiene que ser menor o igual al ciclo actual`}}
  }

  if(val < field.templateOptions.min){
    return  {'min': {message:`El año no debe ser menor a ${field.templateOptions.min}`}}
  }

  return null;

}
