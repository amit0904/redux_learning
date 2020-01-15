import {ADD_ARTICLE} from '../constants/action-types'

const initialState = {
    article : []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE){
        // state.article.push(action.payload)
        return (Object.assign({},state, {article: state.article.concat(action.payload)}))
    }    
    return state
}

export default rootReducer
