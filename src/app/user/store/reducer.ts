import { createReducer, on } from "@ngrx/store"
import { fetchData, fetchDataAccToPage, fetchDataFailure, fetchDataSuccess } from "./action"
import { initialState } from "./state"



const _userReducer = createReducer(initialState,
    on(fetchData, (state) => {

        return {
            ...state, loading: true
        }

    }
    ),

    on(fetchDataSuccess, (state, { resData }) => {

        console.log(state)
        return {
            // ...state,

            users: [
                ...resData.data
                // ...state.users ?? [], ...resData.data
            ],

            loading: false,

            error: null,

            pageIndex: 0
        }
    }
    ),
    on(fetchDataAccToPage, (state, paginaionData) => {
        // console.log(paginaionData)

        return {
            ...state,
            loading: true,
            error: null
        }
    }),
    on(fetchDataFailure, (state, { error }) => ({ ...state, data: null, loading: false, error }))
)

export function userReducer(state: any, action: any) {
    return _userReducer(state, action)
}
