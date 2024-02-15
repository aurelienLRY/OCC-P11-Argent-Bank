

const initialState = { test: 'test' };

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST':
            return { ...state, test: action.payload };
        default:
            return state;
    }
}