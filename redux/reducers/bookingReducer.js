const initialData = {
    booking : [],
};
export const BookingReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'GET_ALL_BOOKING' : {
            return{
                ...state,
                booking : action.payload
            }
        }
        default: return state
    }
}