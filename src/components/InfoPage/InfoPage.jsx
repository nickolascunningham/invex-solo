import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>This is the Info Page</p>
      <li>item 1</li>
      <li>item 2</li>
    </div>
  );
}

export default InfoPage;
