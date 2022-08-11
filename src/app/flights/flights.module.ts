import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlightsPageComponent } from './pages/flights/flights-page/flights-page.component'
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '../portal/portal.module';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightsPageComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    PortalModule,
  ],
  exports:[
    FlightsListComponent
  ],
  providers:[]
})
export class FlightsModule { }
