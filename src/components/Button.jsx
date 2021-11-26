import React from 'react';

function Button(props){
    function start(){
        alert("LOS!");
        return <p>Auf gehts</p>;
    }
    return <div className="Btn_1" onClick={props.appStart}><button>Start</button></div>;
}

export default Button;