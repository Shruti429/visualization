/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';
import serverDatabase from './server-database';
import  reportModel  from './server-models/index';


//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';


function App() {
    //state to save data received from the server
    const [mainData, setMainData] = useState([]);    
    const mongoose = require('mongoose');
     const reportModel = mongoose.model('report');
    //asynchronous function to fetch data from server and updating the state
    const getDataFromDB = async() => {
        try{
            const response = await axios.get("https://dashboard-6bfs.onrender.com/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    // const getDataFromDB = async () => {
    //   try {
    //     const dataFromDB = await reportModel.find();
    //     const responseData = dataFromDB.map(item => item.data);
    //     setMainData(responseData);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    //calling the above function on first render
    useEffect(()=>{
        getDataFromDB();
    },[])
    //where a state is updated, we will print the length of data received just for the test purposes
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return (
    <div>
      <Header/>
      <Tabsrow data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;







