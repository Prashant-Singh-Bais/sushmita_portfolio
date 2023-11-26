import React from 'react';
import './index.scss';

const Text1 = ({ inputText }) => (
    <div className="Text1">
        <h1>{inputText}</h1>
    </div>
);

const Text2 = ({ inputText }) => (
    <div className="Text2">
        <h2>{inputText}</h2>
    </div>
);

const Text3 = ({ inputText }) => (
    <div className="Text3">
        <h3>{inputText}</h3>
    </div>
);

const Text4 = ({ inputText }) => (
    <div className="Text4">
        <h4>{inputText}</h4>
    </div>
);

export { Text1, Text2, Text3, Text4 };
