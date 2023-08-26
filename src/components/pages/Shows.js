import React from 'react';
import { showData } from '../../assets/show-data';
import SingleShow from '../SingleShow';

export default function Shows() {
  return (
    <div>
      <h1>→ Shows are fun too</h1>

        {showData.map(({ date, location }) => (
          <SingleShow date={date} location={location} />
        ))}

    </div>
  );
}