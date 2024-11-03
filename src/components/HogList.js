import React from 'react';
import HogTile from './HogTile';

function HogList({ hogs, onHideHog }) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <HogTile key={hog.name} hog={hog} onHideHog={onHideHog} />
      ))}
    </div>
  );
}

export default HogList;

