const onSwitchPower = () => {
  return {
    'type': 'DRUMPAD_TOGGLE_POWER'
  };
};

const onSwitchSounds = (payload) => {
  return {
    'type': 'DRUMPAD_CHANGED_SOUNDS',
    payload
  };
}

const onSwitchDisplay = (payload) => {
  return {
    'type': 'DRUMPAD_SHOW_NEW_PROPERTY',
    payload
  }
}

const onChangeVolume = (payload) => {
  return {
    'type': 'DRUMPAD_CHANGED_VOLUME',
    payload
  }
}

export {
  onSwitchPower,
  onSwitchSounds,
  onSwitchDisplay,
  onChangeVolume
};