export function minlengthValidationMessage(err, field) {
  return `Debería tener al menos ${field.templateOptions.minLength} caracteres`;
}

export function maxlengthValidationMessage(err, field) {
  return `Este valor debe ser menor que ${field.templateOptions.maxLength} caracteres`;
}

export function minValidationMessage(err, field) {
  return `Este valor debe ser mayor que ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `Este valor debe ser menor que ${field.templateOptions.max}`;
}
