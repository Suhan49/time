import React, { useState,useEffect } from 'react';
import { apiUrl,filterData } from "./data";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from "./components/Cards";
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {

   const [courses,setCourses] = useState(null);
   const [loading,setLoading] = useState(true);
  
    async function fetchData()  {
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        //save data into a variable
        console.log("courses value updated");
        console.log(courses);
        
        
        setCourses(output.data);
      }
      catch(error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect( () => {
    fetchData();
  },[]);
  return (
    <div>
    <div> 
        <Navbar/>
      </div>
      <div>
        <Filter
         filterData = {filterData}/>
      </div>
      <div>
        {
       loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
