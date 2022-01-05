import { Model } from 'src/app/ttwr-framework/core/model';
import { Types } from 'src/app/ttwr-framework/core/types';
import { TtwrInputComponent } from 'src/app/ttwr-framework/ttwr-components/ttwr-inputs/ttwr-input/ttwr-input.component';
import { Validators } from '@angular/forms';

export class Channels extends Model {
  Name!: string;
  Date!: string;

  protected static initializeModelDef() {
    return {
      defs: {
        Name: {
          ID: 'Name',
          dataType: Types.STRING,
          defaultValue: '',
          isSortable: true,
          label: 'Access channel',
          placeholder: 'Name',
          ui: TtwrInputComponent,
          Validators: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This Field is required'
            }
          ]
        },
        Date: {
          ID: 'Date',
          defaultValue: null,
          label: 'Date',
          dataType: Types.DATETIME,
          placeholder: 'Date',
          ui: TtwrInputComponent
        }
      }
    }
  }
}
