import React from 'react';
import {useSelector} from "react-redux";

function Number(props) {
    const counter = useSelector(state => state);

        return (
        <div className="Number">
            <div className="Logo-zero"> {counter}</div>
        </div>
    );
}

export default Number;