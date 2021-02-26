import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatCardModule,
        CommonModule
    ],
    declarations: [
        CurrentWeatherComponent,
    ],
    exports: [
        CurrentWeatherComponent
    ]
  })
  export class ComponentsModule {
  }
  