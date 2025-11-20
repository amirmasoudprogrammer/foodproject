import React from 'react';
import {BeatLoader} from "react-spinners";

function Loading(props) {
    return (
        <div className="p-4 text-center flex flex-col items-center justify-center">
            <BeatLoader color="#22c55e" />
            <span className="text-green-400">کمی صبر کنید..</span>
        </div>
    );
}

export default Loading;