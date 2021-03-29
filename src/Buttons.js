import React from 'react';
import {useDispatch} from "react-redux";

function Buttons() {

   const dispatchP = useDispatch();
   const handlePlus = () => {
        dispatchP (
            {type: 'плюс'}
        )
   };

    const dispatchM = useDispatch();
    const handleMinus = () => {
        dispatchM (
            {type: 'минус'}
        )
    };

    const dispatchR = useDispatch();
    const handleReset = () => {
        dispatchR (
            {type: 'сброс'}
        )
    };


    return (
        <div className="Buttons">
            <div className="Enlarge" onClick={handlePlus}> Увеличить</div>
            <div className="Reduce" onClick={handleMinus}> Уменьшить</div>
            <div className="Update" onClick={handleReset}> Сбросить</div>
        </div>)
}


export default Buttons;