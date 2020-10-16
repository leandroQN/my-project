import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ContactosComponent } from './contactos.component';
import {ContactosPageRoutingModule} from './contactos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    ContactosPageRoutingModule
  ],
  declarations: [ ContactosComponent],
  exports: []
})
export class ContactosPageModule {}
