import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import ZipResponse from '../components/ZipResponse';
import City from '../components/City';
import Database from '../Database';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');
    const handleCityChange = async (cityValue) => {

        if (!(localStorage.getItem("city") === null)){
            cityValue = localStorage.getItem("city")
            localStorage.removeItem("city")
        }

        //console.log(`--------- fetchData called zip:${cityValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityValue},NZ`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }
    
    
    Database()
    if(typeof code_happened === 'undefined'){
        window.code_happened = true;
        handleCityChange()
    }


    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <City onCityChange={handleCityChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
