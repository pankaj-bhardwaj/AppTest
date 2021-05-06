import Constants from '../actionTypes/TextCaptureTypes';

const initialState = {
  inputText: '',
};

const ACTION_HANDLERS = {
  [Constants.UPDATE_INPUT_TEXT]: (state, action) => {
    return {
      ...state,
      inputText: action.payload,
    };
  },
};

export default (state = initialState, action) =>
  ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
