import { Model } from 'src/app/ttwr-framework/core/model';
import { Types } from 'src/app/ttwr-framework/core/types';
import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TtwrBaseSelectComponent } from 'src/app/ttwr-framework/ttwr-components/ttwr-base-select.component';
import { AccessUserService } from '../services/access-user.service';
import { LanguageService } from 'src/app/ttwr-framework/general-services/language/language.service';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { RequestResult } from 'src/app/ttwr-framework/core/request-result';

export class AccessUser extends Model {
  UserNameAr!: string;
  UserNameEn!: string;
  UserId!: number;
  UserChannelId!: number;

  protected static initializeModelDef() {
    return {
      defs: {
        UserNameAr: {
          ID: 'UserNameAr',
          dataType: Types.STRING,
          label: 'User Name Ar',
          placeholder: 'User Name Ar',
          defaultValue: '',
          isSortable: true,
          validators: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This field is required !'
            },
            {
              name: 'required',
              validator: Validators.maxLength(15),
              message: 'Name can\'t be greatter than 15 charcaters'
            }
          ]
        }
      }
    }
  }
}


@Component({
  selector: "app-select-access-user-channels",
  templateUrl: `
    <app-ttwr-input-select
      [config]="config"
      [field]="field"
      [options]="options"
      [group]="group"
    >
    </app-ttwr-input-select>
  `
})

export class AccessUserSelectChannels extends TtwrBaseSelectComponent {
  constructor(
    private service: AccessUserService,
    private lang: LanguageService
  ) {
    super(service);

    this.selectName = 'Id';
    this.selectValue = this.lang.selectedLanguage == 'ar' ?
      'UserNameAr' : 'UserNameEn';
  }

  // getFunc(): Observable<RequestResult<Model>> {
  //   return this.service;
  // }
}
