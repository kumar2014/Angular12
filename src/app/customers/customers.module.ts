import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule],
  declarations: [ListComponent],
})
export class CustomersModule {}
