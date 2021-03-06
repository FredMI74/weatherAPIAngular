import { createReducer, Action, on } from '@ngrx/store'
import * as formHomeActions from './home.actions'

export interface HomeState {
  entity: any;
  loading: boolean;
  error: boolean;
}

export const homeInitialState: HomeState = {
  entity: undefined,
  loading: false,
  error: false
}

const reducer = createReducer(
  homeInitialState,
  on(formHomeActions.loadCurrentWeather, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(formHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(formHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    errors: true
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}