import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectoryComponent],
  exports: [
    DirectoryComponent
  ]
})
export class DirectoryModule { }
