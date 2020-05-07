import React from 'react';
import ReactDOM from 'react-dom';

//Components
const App = () => {
    const buttonText = { text: 'Click me!'};
    const labelText = 'Enter name:';

    return (
    <div>
    <label className="label" for="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={{ backroundColor: 'blue', color: 'green'}}>{buttonText.text}</button>
</div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
