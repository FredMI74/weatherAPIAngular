import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomePage],
  imports: [ 
    MatProgressSpinnerModule,
    ComponentsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
