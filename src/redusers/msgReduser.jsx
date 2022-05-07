import { ADD_MSG, EDIT_MSG, REMOVE_MSG} from "../constaat/constantsChat";

const  initialState = [{id: 0, msg: "Hi"}]

 
export const msgReducer = (state  = initialState, action) =>  {
    switch( action.type ){
        case ADD_MSG:
            return [
                 {
                    id:  Math.random(),
                    msg: action.payload,
                    seen: false,
                  } ,
                ...state,                  
            ];
            
        case REMOVE_MSG:
            return state.filter(messege => messege.id !== action.payload );
         
        default:
            return state;
    }
}