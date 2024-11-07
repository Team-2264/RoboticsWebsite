import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const YearSelection = ({ startingYear = 2021 }) => {
    const [data, setData] = useState(new Date().getFullYear().toString()); // Default to current year
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

        // Update the URL without reloading
        setSearchParams({ year: selectedYear });
    };

    // Generate the list of years dynamically from the starting year to the current year
    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = currentYear; year >= startingYear; year--) {
            years.push(
                <option key={year} value={year}>
                    {year}-{year + 1}
                </option>
            );
        }
        return years;
    };

    return (
        <center>
            <select value={data} onChange={onOptionChangeHandler}>
                {generateYearOptions()}
            </select>
        </center>
    );
};

export default YearSelection;