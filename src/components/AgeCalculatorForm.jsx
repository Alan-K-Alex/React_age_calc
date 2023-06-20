
import React, { useState } from "react";

function AgeCalculatorForm({calculateAge})
{
        const [birthDate,setBirthDate] = useState('');

        const handleChangeDate = (e) =>
        {
            setBirthDate(e.target.value);

        };

        const handleSubmit = (e) => {

            e.preventDefault();
            calculateAge(birthDate);

        }


    return(
<form onSubmit={handleSubmit}>
<input className=" rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-sm border-gray-300 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" value={birthDate} onChange={handleChangeDate}/>&nbsp;
&nbsp;
<button className ="mt-5 disabled:bg-slate-400 disabled:cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit" disabled={!birthDate}>calculate Age</button>
</form>

    )
}

export default AgeCalculatorForm;