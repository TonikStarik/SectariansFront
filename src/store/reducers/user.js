import USER_ACTION from '@constants';

const initialValue = {
  value: '',
};

const userReducer = (state = initialValue, action) => {
  if (action.type === USER_ACTION) {
    return {
      ...state,
      value: '1',
    };
  }
  return state;
};

export default userReducer;
