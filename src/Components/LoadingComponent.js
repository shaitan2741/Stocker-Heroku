import React from 'react';
import '../App.css';
import Loader from 'react-loader-spinner'

function Loading() {
    return (
        <div className="container">
        <div
        >
        <br />
        <br />
        <br />
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;

            <Loader
        type="ThreeDots"
        color="#ffffff"
        height={100}
        width={100}
        align="center"

    />
    </div>
        </div>
        
    )
}

export default Loading;
