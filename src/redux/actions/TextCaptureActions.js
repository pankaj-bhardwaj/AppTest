import Constants from '../actionTypes/TextCaptureTypes';

export const textCapture = data => {
  return async dispatch => {
    await dispatch({
      type: Constants.UPDATE_INPUT_TEXT,
      payload: data,
    });
    try {
    } catch (error) {
      console.log('error', error);
    }
  };
};
