import { Component} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date',
  template: `
      <input
        type="date"
        [formControl]="formControl"
        class="form-control"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
        [max]="to.maxDate"
        [min]="to.minDate"
        placeholder="dd/mm/aaaa"
      />

     `,


})
export class dateField extends FieldType {

}

