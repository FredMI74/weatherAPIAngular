import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as formHomeActions from './state/home.actions';
import * as formHomeSelectors from './state/home.selectors';

@Component({
  selector: 'owa-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  
  cityWeather$: Observable<CityWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchForm: FormGroup;

  constructor(private store: Store) { }

  ngOnInit(): void {

   this.searchForm = new FormGroup({
    cityname: new FormControl('')
    });
   
    this.cityWeather$ = this.store.pipe(select(formHomeSelectors.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(formHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(formHomeSelectors.selectCurrentWeatherError));

  }

  submitForm() {
    const query = this.searchForm.controls.cityname.value;
    this.store.dispatch(formHomeActions.loadCurrentWeather({ query }));
  }


}
