const init = [21, 52, 13];

export const toDoReducers = (state = init, action) => {

    switch (action.type) {
        case "ADD": {
            return [...state, action.payload]
        }
        case "SORT": {
            const newArr = [...state];
            newArr.sort((a, b) => a - b)
            return newArr;
        }
        default:
            return state;

    }
}