import { CHANGE_SCREEN } from "../types"

const handlers = {
    [CHANGE_SCREEN]: (state, payload) => payload,
    DEFAULT: state => state
}

export const ScreenReducer = (state, {type, payload}) => {
    const handler = handlers[type] || handlers.DEFAULT

    return handler(state, payload)
}