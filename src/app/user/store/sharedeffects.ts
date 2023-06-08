import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './authservice';
import { fetchData, fetchDataAccToPage, fetchDataFailure, fetchDataSuccess } from './action';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, EMPTY, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class SharedEffects {

    constructor(private actions$: Actions, private authService: AuthService) { }

    getUsers$ = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(fetchData),
            mergeMap((data: any) => {
                console.log(data);
                return this.authService.getUsers().pipe(
                    mergeMap((responseData: any) => {
                        console.log(responseData)
                        this.authService.getTotalUser$.next(responseData.totalUsers)
                        return of(fetchDataSuccess({ resData: responseData }));
                    }),
                    catchError((error) => {
                        return of(fetchDataFailure({ error }));
                    })
                );
            }),
            catchError((error) => {
                console.error('Error in getUsers$ effect:', error);
                return EMPTY;
            })
        );
    });


    getUsersAcctoPage$ = createEffect(
        (): Observable<Action> => {
            return this.actions$.pipe(
                ofType(fetchDataAccToPage),
                mergeMap((data: any) => {
                    console.log(data)
                    return this.authService.getUsersAccPage(data).pipe(
                        mergeMap((responseData: any) => {
                            console.log(responseData)

                            return of(fetchDataSuccess({ resData: responseData }));
                        }),
                        catchError((error) => {
                            return of(fetchDataFailure({ error }));
                        })
                    )

                }),
                catchError((err) => {
                    console.error('Error in getUsers$ effect:', NO_ERRORS_SCHEMA);
                    return EMPTY;
                })
            )
        }
    )
}
