import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field',
  template: `
    <div   [class.has-error]="showError">
      <div style="display: flex; flex-direction: row;column-gap:10px; margin-top: 25px;">
        <label *ngIf="to.label && to.hideLabel !== true" [attr.for]="id" class="form-label">
          {{ to.label }}
          <span *ngIf="to.required && to.hideRequiredMarker !== true" aria-hidden="true">*</span>
        </label>
        <ng-template #fieldComponent></ng-template>
      </div>
      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
    </div>
  `,
})
export class WrapperFormFieldInline extends FieldWrapper {}
