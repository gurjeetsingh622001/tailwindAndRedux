import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState } from "./state";

export const getPostState = createFeatureSelector<DataState>('users');

export const getLoadingState = createSelector(getPostState, (state: DataState) => {
    console.log(state)
    return state?.loading
})

export const getPosts = createSelector(getPostState, (state) => {
    return state?.users ? state.users : null
})