const initialState = {
    usersData : "df"
}
const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD-DATA": 
            return {
                ...state,
                usersData : action.payload
            }
        default: 
            return state;
    }
}
export default dataReducer