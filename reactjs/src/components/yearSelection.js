import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const YearSelection = () => {
    const [data, setData] = useState("2024"); // Default value for the year
    const [searchParams, setSearchParams] = useSearchParams();

    // Set the year from the query parameter when the component mounts
    useEffect(() => {
        const yearFromQuery = searchParams.get("year");
        if (yearFromQuery) {
            setData(yearFromQuery);
        }
    }, [searchParams]);

    const onOptionChangeHandler = (event) => {
        const selectedYear = event.target.value;
        setData(selectedYear);
        console.log("User Selected Value - ", selectedYear);

        // Update the URL without reloading
        setSearchParams({ year: selectedYear });
    };

    return (
        <center>
            <select value={data} onChange={onOptionChangeHandler}>
                <option value="2024">2024-2025</option>
                <option value="2023">2023-2024</option>
                <option value="2022">2022-2023</option>
                <option value="2021">2021-2022</option>
            </select>
        </center>
    );
};

export default YearSelection;