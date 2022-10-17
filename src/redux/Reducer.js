export const initialState = {
  userDetails: {},
  loading: true,
};

export default function Reducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'USER_DETAILS':
      return {
        ...state,
        userDetails: payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
