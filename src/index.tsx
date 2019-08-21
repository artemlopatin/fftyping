import React from 'react';
import ReactDOM from 'react-dom';
import {GameApp} from './components/GameApp';

ReactDOM.render(
    <GameApp />,
    document.getElementById('root')
);

// @ts-ignore
module.hot.accept();
