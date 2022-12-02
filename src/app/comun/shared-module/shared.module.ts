import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, Validators, FormControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyBootstrapModule, FormlyFieldInput } from '@ngx-formly/bootstrap';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { ArchivoValueAccessor } from '../directives/archivo-value-accessor';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { FormlyFieldRadio } from '@ngx-formly/material/radio';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AlertModule, AlertService} from 'src/app/comun/alert';
import { GenericDialogModule } from '../modal/genericDialog.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginator } from '../util/CustomPaginatorConfiguration';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginatorDirective } from '../paginado/paginator/paginator.directiva';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyFieldSelect } from '@ngx-formly/bootstrap';
import { FormlyFieldCheckbox } from '@ngx-formly/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { WrapperFormFieldInline } from '../formly-wrapper/form-field-inline';
import { FormlyFieldButton } from '../formly-types/field-button.component';
import { dateField } from '../formly-types/date.field';
import { WrapperFormFieldRadio } from '../formly-wrapper/form-field-radio';
import { timeField } from '../formly-types/time.field';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';



@NgModule({
  declarations: [
    ArchivoValueAccessor,
    PaginatorDirective,
    WrapperFormFieldInline,
    FormlyFieldButton,
    dateField,
    WrapperFormFieldRadio,
    timeField
  ],
  imports: [
    NgxSpinnerModule,
    MatExpansionModule,
    GenericDialogModule,
    AlertModule,
    RouterModule,
    CdkStepperModule,
    CdkTableModule,
    ClipboardModule,
    CommonModule,
    FormsModule,
    GenericDialogModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatPaginatorModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyBootstrapModule,
    FormlyMatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatInputModule,
    FormlyModule.forRoot(
      {
        types: [
          { name: 'mat-radio', component: FormlyFieldRadio, wrappers: ['mat-radio-wrapper'] },
          { name: 'button', component: FormlyFieldButton, wrappers: ['form-field'],
            defaultOptions: {
              templateOptions: {
                btnType: 'primary',
                type: 'button',
              },
            },
          },
          { name: 'date', component: dateField, wrappers:['form-field'],},
          { name: 'time', component: timeField, wrappers:['form-field'],}

        ],
        wrappers: [
          {name: 'mat-radio-wrapper-inline',component:WrapperFormFieldInline},
          {name: 'mat-radio-wrapper',component:WrapperFormFieldRadio},
        ],
        validationMessages: [
          { name: 'required', message: `Campo requerido` },

        ],
      }
    ),
    NgxMatTimepickerModule

  ],

  exports: [
    CommonModule,
    NgxSpinnerModule,
    MatExpansionModule,
    GenericDialogModule,
    AlertModule,
    RouterModule,
    CdkStepperModule,
    CdkTableModule,
    ClipboardModule,
    CommonModule,
    FormsModule,
    GenericDialogModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
    OverlayModule,
    MatDatepickerModule,
    PortalModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyBootstrapModule,
    FormlyMatDatepickerModule,
    ArchivoValueAccessor,
    MatNativeDateModule,
    WrapperFormFieldInline,
    FormlyFieldButton,
    timeField,
    NgxMatTimepickerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {provide: MatPaginatorIntl, useValue: CustomPaginator()},
]
})
export class SharedModule { }
