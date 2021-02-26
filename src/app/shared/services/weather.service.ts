import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityWeather } from '../models/weather.model';
import { map } from 'rxjs/operators';
import { responseToCityWeather } from '../utils/response.utils';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityWeatherByQuery(query: string): Observable<CityWeather> {
    console.log('chamando api');
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'pt_br');
    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, { params });
  }
}
