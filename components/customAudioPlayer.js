import React from 'react';

const CustomAudioPlayer = ({ audioFile }) => {
  const audioUrl = URL.createObjectURL(audioFile);

  return (
    <audio controls src={audioUrl}>
      Your browser does not support the audio element.
    </audio>
  );
};

export default CustomAudioPlayer;
