import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = {
  open: false,
  component: null
};

const modalReducer = (state = defaultState, action) => {

  switch (action.type) {
    case OPEN_MODAL:
      return {open: true, component: action.component};
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default modalReducer;
