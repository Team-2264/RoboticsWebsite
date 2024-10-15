import React, { useState } from "react";

const YearSelection = () => {

    const [data, setData] = useState(undefined);

    
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };
    return (
        <center>
            <select onChange={onOptionChangeHandler}>
             <option key={1}>  2024 </option>
             <option key={2}>  2025 </option>
            </select>
        </center>
    );
};

/*   {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })} */
export default YearSelection;

