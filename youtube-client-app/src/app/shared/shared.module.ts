import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import {
  CustomButtonStyleDirective,
  DefaultColorCardDirective,
} from './directives';
import { FilterCardsPipe, SortDatePipe, SortViewPipe } from './pipes';

import {
  CardListComponent,
  CustomButtonComponent,
  NotFoundComponent,
} from './components';

@NgModule({
  declarations: [
    CustomButtonStyleDirective,
    CustomButtonComponent,
    NotFoundComponent,
    FilterCardsPipe,
    SortDatePipe,
    SortViewPipe,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    DefaultColorCardDirective,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
  ],
  exports: [
    CustomButtonStyleDirective,
    CardListComponent,
    DefaultColorCardDirective,
    NotFoundComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    FilterCardsPipe,
    SortDatePipe,
    SortViewPipe,
    CustomButtonComponent,
  ],
})
export class SharedModule {}
