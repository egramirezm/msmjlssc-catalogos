import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-button',
  template: `
    <div>
      <ng-container *ngIf="!to.disabled && !form.disabled">
      <button [disabled]="to.disabled" [type]="to.type" [ngClass]="'btn btn-' + to.btnType + ' ' + to.classBtn" [id]="to.idBtn"  (click)="onClick(field.model,$event)">
        {{ to.text }}
      </button>
      </ng-container>
      <ng-container *ngIf="to.disabled || form.disabled">
      <button [disabled]="to.disabled  || form.disabled" [type]="to.type" [ngClass]="'btn btn-' + to.btnType + ' ' +to.classBtn"  [id]="to.idBtn" >
        {{ to.text }}
      </button>
      </ng-container>
    </div>
  `,
})
export class FormlyFieldButton extends FieldType implements OnInit{

  ngOnInit(): void {
    this.formControl
    this.field
    this.form

  }



  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event,this.form);
    }
  }
}
