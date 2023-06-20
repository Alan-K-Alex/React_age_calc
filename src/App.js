import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import {differenceInYears ,differenceInMonths, differenceInDays} from 'date-fns'

function App() {
  
    const [age, setAge] = useState(null);

    const calculateAge = (birthDate) => {

      const today = new Date();

      const bdayobj =new Date(birthDate);

   
      const diff_year = differenceInYears(today,bdayobj);

      const diff_month = differenceInMonths(today,bdayobj)

      const diff_day = differenceInDays(today,bdayobj);


      setAge([diff_year,diff_month,diff_day]);
    }


  return (


<section className="bg-white ">
    <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16">
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Age Calculator</h1>
        <p className="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here you can view how far have you gone in life in terms of years ,months and days.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <AgeCalculatorForm calculateAge={calculateAge}/>
 
    </div>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
     
      {age && <AgeResult age={age}/>}
    </div>

    </div>
</section>



   
  )
  
}

export default App;
