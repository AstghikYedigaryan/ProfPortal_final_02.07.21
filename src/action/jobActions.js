import {
    OPEN_JOB_OFFERS,
    CLOSE_JOB_OFFERS
} from "../constaat/constants";

export const setAnnouncementName = (name) => {
    return {
        type: OPEN_JOB_OFFERS,
        payload: name,
    }
}

export const resetAnnouncementName = (name) => {
    return {
        type: CLOSE_JOB_OFFERS,
        payload: "",
    }
}
