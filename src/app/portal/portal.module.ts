import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideComponent } from './left-side/left-side.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LeftSideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[LeftSideComponent]
})
export class PortalModule { }
