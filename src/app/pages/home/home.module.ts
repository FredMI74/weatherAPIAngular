import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';

@NgModule({
  declarations: [HomePage],
  imports: [ 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('home', homeReducer)
  ]
})
export class HomeModule { }
