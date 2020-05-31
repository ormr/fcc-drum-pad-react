import React from 'react';
import { connect } from 'react-redux';
import { onSwitchPower, onSwitchSounds, onChangeVolume } from '../../actions';
import './control-panel.css';

const ControlPanelComponent = ({ onSwitchPower, onSwitchSounds, onChangeVolume, display }) => {
  return (
    <div className="control-panel">
      <div className="control">
        <div>Power</div>
        <label className="switch">
          <input onChange={onSwitchPower} type="checkbox"/>
          <span className="slider"></span>
        </label>
      </div>
      <p id="display">{display}</p>
      <div className="volume-slider"></div>
      <div className="volume-slider">
        <input onChange={e => onChangeVolume(e.target.value)} type="range" step="0.01" min="0" max="1" />
      </div>
      <div className="control">
        <div>Bank</div>
        <label className="switch">
          <input onChange={(e) => onSwitchSounds(e.target.checked)} type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchPower: () => dispatch(onSwitchPower()),
    onSwitchSounds: (payload) => dispatch(onSwitchSounds(payload)),
    onChangeVolume: (payload) => dispatch(onChangeVolume(payload))
  };
};

const ControlPanel = connect(mapStateToProps, mapDispatchToProps)(ControlPanelComponent);

export {
  ControlPanel
};