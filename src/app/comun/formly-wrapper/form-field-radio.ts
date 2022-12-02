import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field',
  template: `
    <div class="mb-3"  style="display: flex; flex-direction: column;" [class.has-error]="showError">
      <label *ngIf="to.label && to.hideLabel !== true" [attr.for]="id" class="form-label">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </label>
      <div style="margin-top: 5px;"><ng-template #fieldComponent></ng-template></div>
      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
    </div>
  `,
})
export class WrapperFormFieldRadio extends FieldWrapper {}
