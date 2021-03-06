import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ClientComponent } from './client.component';
import {ClientPageRoutingModule} from './client-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    ClientPageRoutingModule
  ],
  declarations: [ ClientComponent],
  exports: []
})
export class ClientPageModule {}
