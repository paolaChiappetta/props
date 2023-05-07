import React from 'react';
import { useEffect, useState } from 'react';
import {CheckBox} from './CheckBox';

export default function CheckBoxAndButton () {
    const [array2, setArray2] = useState([]);

    const mock1 = {
        id: 0,
        value: false,
        label: 'Prueba0'
      }
      
      const mock2 = {
        id: 1,
        value: false,
        label: 'Prueba1'
      }
      
      const mock3 = {
        id: 2,
        value: false,
        label: 'Prueba2'
      }
      
    const array = [mock1, mock2, mock3];


   const onChangeFunction = (label, id) => {
    console.log("array", array);
        array[id].label = label + 'cambaida';
        array[id].value = !array2[id].value;
        setArray2(array);
        console.log("array", array);
   }

   const onClickButton = () => {
    console.log("array", array2);
   }

   useEffect(() => {
    setArray2(array);
  }, [])

  useEffect(() => {
    
  }, [array2])


    return (
            <>
                {array2.length > 0 && array2.map((item) => {
                    return (
                        <CheckBox
                        onChangeChecked={onChangeFunction}
                        {...item}
                        />
                    )
                })}
                
                <button onClick={onClickButton}>Apply</button>
            </>
    );
}