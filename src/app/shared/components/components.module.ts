import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import {MatCardModule} from '@angular/material/card';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatGridListModule,
        MatChipsModule,
        MatCardModule,
        CommonModule
    ],
    declarations: [
        CurrentWeatherComponent,
        DetailedWeatherComponent,
    ],
    exports: [
        CurrentWeatherComponent
    ]
  })
  export class ComponentsModule {
  }
  