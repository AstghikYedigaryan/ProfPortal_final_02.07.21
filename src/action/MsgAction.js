import { ADD_MSG, EDIT_MSG, REMOVE_MSG} from "./../constaat/constantsChat";

export const sendMsg = msg => {
    return {
        type: ADD_MSG,
        payload: msg,
    }
}

export const editMsg = (id) => {
    return {
        type: EDIT_MSG,
        payload: id,
    }
}

export const removeMsg = (id) => {
    return {
        type: REMOVE_MSG,
        payload: id,
    }

}

