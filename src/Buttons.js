import React from 'react';
import {useDispatch} from "react-redux";

function Buttons(props) {

    {/*
        function plus() {
            props.setCounter(props.counter + 3);
        }

        function minus() {
            if (props.counter > 0) {
                props.setCounter(props.counter - 2);
            }
        }

        function reset() {
            props.setCounter(0);
        }
   */ }

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