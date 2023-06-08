// 'name' : { type: String, default:''},
//     'email' : { type: String, default:''},
//     'password' : { type: String, default:''},
//     'user_type' : {type: Number, default:1}, //0=admin,1=customer,2=reseller
//     'is_blocked' : { type: Boolean, default:false},
//     'created_at' : { type: Date, default:Date.now()},

export interface User {
    '_id': string,
    'name': String,
    'email': String,
    'password': String,
    'user_type': number,
    'is_blocked': boolean,
    'created_at': Date,
    '--v': string
}



export interface DataState {
    loading: boolean,
    users: User[] | null,
    error: any,
    pageIndex: number
}

export const initialState: DataState = {
    loading: false,
    users: null,
    error: null,
    pageIndex: 0
}