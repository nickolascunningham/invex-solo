import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Technologies Used:</p>
        <li>Node</li>
        <li>CSS</li>
        <li>Redux-Saga</li>
        <li>Express</li>
        <li>React</li>
        <li>Postgresql</li>
        

      </div>
    </div>
  );
}

export default AboutPage;
