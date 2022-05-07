import { ADD_ITEM, COMPLETE_ITEM, REMOVE_ITEM} from "../constaat/toDoconst";

export const addTodo = todo => {
    return {
        type: ADD_ITEM,
        payload: todo,
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_ITEM,
        payload: id,
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    }

}

