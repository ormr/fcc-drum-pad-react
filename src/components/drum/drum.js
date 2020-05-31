import React, { useEffect } from 'react';
import { onSwitchDisplay } from '../../actions';
import { connect } from 'react-redux';
import './drum.css';

const DrumComponent = ({power, sounds, onSwitchDisplay, volume}) => {

  const onDrumClick = (e) => {

    if (!power) return;

    const event = e.target;

    if (event.classList.contains('drum-pad')) {
      onSwitchDisplay(event.id);
      const audio = event.firstElementChild;
      audio.currentTime = 0;
      audio.volume = volume;
      event.classList.add('clicked');
      audio.play();
      setTimeout(() => event.classList.remove('clicked'), audio.duration * 1000);
    }
  }

  const onKeyPressed = (e) => {
    if (!power) return;
    const code = e.code.match(/[A-Z]$/g);
    const audio = document.querySelector(`audio[id="${code}"]`);
    const audioParent = audio.parentElement;
    onSwitchDisplay(audioParent.id);
    if (!audio) return;
    audio.currentTime = 0;
    audioParent.classList.add('clicked');
    audio.play();
    setTimeout(() => audioParent.classList.remove('clicked'), audio.duration * 1000);
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyPressed);

    return () => {
      document.removeEventListener('keydown', onKeyPressed);
    }
  });

  return (
    <div className="pad-bank" onClick={onDrumClick}>
      {
        sounds.map(({id, audioId, url}, idx) => {
          return (
            <div key={idx} id={id} className="drum-pad">
              <audio id={audioId} className="clip" src={url}></audio>
              {audioId}
            </div>
          );
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  onSwitchDisplay: (id) => onSwitchDisplay(id)
};

const Drum = connect(mapStateToProps, mapDispatchToProps)(DrumComponent)

export {
  Drum
};