import React from 'react';
import ReactDom from 'react-dom';

const App = function() {
    return (
        <div>Hi!</div>
        )
}

ReactDOM.render(<App />, document.querySelector('.container'));