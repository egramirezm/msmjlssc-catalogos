import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date',
  template: `
    <ngx-mat-timepicker-field
      [format]="24"
      [formControl]="formControl"
      class="form-control IconTime"
      [formlyAttributes]="field"
      [class.is-invalid]="showError"
      [toggleIcon]="othericon"
      [enableKeyboardInput]="true"
      [cancelBtnTmpl]="buttonTemplate"
    ></ngx-mat-timepicker-field>

    <ng-template #othericon>
      <mat-icon>schedule</mat-icon>
    </ng-template>

    <ng-template #buttonTemplate>
      <div>
        <button
          (click)="onClear()"
          mat-button=""
          class="mat-focus-indicator mat-button mat-button-base mat-primary ng-star-inserted"
          ng-reflect-color="primary"
          style=""
        >
          <span class="mat-button-wrapper">CANCELAR </span
          ><span
            matripple=""
            class="mat-ripple mat-button-ripple"
            ng-reflect-disabled="false"
            ng-reflect-centered="false"
            ng-reflect-trigger="[object HTMLButtonElement]"
          ></span
          ><span class="mat-button-focus-overlay"></span></button
        >
      </div>

    </ng-template>
  `,
})
export class timeField extends FieldType {
  selectedTime: any;

  @Input() buttonTemplate: TemplateRef<any>;

  onClear($event: Event) {
    this.formControl.setValue(null);
  }
}
