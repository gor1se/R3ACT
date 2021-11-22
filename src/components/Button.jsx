import React from 'react';

function Button(){
    function start(){
        alert("LOS!");
        return <p>Auf gehts</p>;
    }
    return <div className="Btn_1" onClick={start}><button>Start</button></div>;
}

export default Button;