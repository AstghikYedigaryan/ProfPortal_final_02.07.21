import { ADD_ITEM, COMPLETE_ITEM, REMOVE_ITEM } from "./../constaat/toDoconst";

const  initialState = 
     [
        {id: Math.random(),
        todo:"Learn JavaScript",
        checked: false,
    },{ 
        id:  Math.random(),
        todo: "Learn HTML",
        checked: false,
    }, {
        id:  Math.random(),
        todo: "Learn CSS",
        checked: false,
    } , {
        id:  Math.random(),
        todo: "Learn ReactJS",
        checked: false,
    }];

 
export const reducer = (state  = initialState, action) =>  {
    switch( action.type ){
        case ADD_ITEM:
            return [
                 {
                    id:  Math.random(),
                    todo: action.payload,
                    checked: false,
                  } ,
                ...state,                  
            ];
        case COMPLETE_ITEM:
            return state.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item );
            
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload );
         
        default:
            return state;
    }
}