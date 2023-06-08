import { createAction, props } from '@ngrx/store';

export const fetchData = createAction('[Data] Fetch');

export const fetchDataSuccess = createAction('[Data] Fetch Success', props<{ resData: any }>());

export const fetchDataFailure = createAction('[Data] Fetch Failure', props<{ error: any }>());

export const fetchDataAccToPage = createAction('[Data] Fetch Acc to Page', props<{ limit: number, skip: number }>());

