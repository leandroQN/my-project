import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ModalidadesComponent } from './modalidades.component';
import {ModalidadesPageRoutingModule} from './modalidades-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
   ModalidadesPageRoutingModule
  ],
  declarations: [ ModalidadesComponent],
  exports: []
})
export class ModalidadesPageModule {}
