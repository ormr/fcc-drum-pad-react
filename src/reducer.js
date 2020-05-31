import { firstBank, secondBank } from './services';

const getSounds = (toggle) => {
  return toggle ? firstBank : secondBank;
}

const initialState = {
  display: '',
  power: false,
  volume: 1,
  sounds: getSounds(false)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DRUMPAD_TOGGLE_POWER':
      return {
        ...state,
        power: !state.power
      };
    case 'DRUMPAD_CHANGED_VOLUME':
      return {
        ...state,
        volume: action.payload,
        display: `${(action.payload*100).toFixed(0)}%`
      };
    case 'DRUMPAD_SHOW_NEW_PROPERTY':
      return {
        ...state,
        display: action.payload
      };
    case 'DRUMPAD_CHANGED_SOUNDS':
      return {
        ...state,
        sounds: getSounds(action.payload)
      };
    default:
      return state;
  };
};

export {
  reducer
};