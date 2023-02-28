const initialState = {
    quote : 'Welcome to quote generator app',
    character: "Character",
    anime: "Anime",
    isLoading: false,
    error : null
}

export default quotes = (state = initialState, action)=>{
    switch (action.type) {

        case 'LOAD_QUOTE_START':
           return Object.assign({},state,
            {isLoading: true})

        case 'LOAD_QUOTE-SUCCESS':
            return Object.assign({},state, {quote:action.payload[0],
                anime:action.payload[1],
                character:action.payload[2],
                isLoading: false})

        case 'LOAD_QUOTE_FAILURE':
           return Object.assign({},state,
            {error :action.payload, isLoading:false})

        default:
            return state
    }
}