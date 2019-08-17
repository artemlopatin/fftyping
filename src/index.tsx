import React from 'react';
import ReactDOM from 'react-dom';
import {Game} from './components/Game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// @ts-ignore
module.hot.accept();
