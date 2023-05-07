import React from 'react'


export function CheckBox (props) {

    const handleChange = (label, id) => {
        props.onChangeChecked(label, id);
    }

    return (
            <>
                <input type='checkbox' checked={props.value} onChange={() => handleChange(props.label, props.id)}></input>
                <p>{props.label}</p>
            </>
    );
}