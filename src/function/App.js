import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let plan;
    if(fiftyFifty) {
      plan = "Tonight I'm going out WOOO"
    }
    else {
      plan = "Tonight I'm going to bed WOOO"
    }
    return <h1>{plan}</h1>;
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);
