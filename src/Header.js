import React, { useState, useEffect } from "react";
import axios from "axios"
import Body from "./Body.js"
import styled from "styled-components"

const Header = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=iYQxxWxjt2VdhqdIAsPBtpPDEpUnFRKPLdpZr9ig&date=2020-10-23')
            .then(response => {
                setData(response.data);
            })
            .catch(err => {  // err function in case promise is unfulfilled
                console.log('The data was not returned.', err)
            })

    }, []);

    console.log(data)

    const H1 = styled.h1`
        color: pink;
    `;
  
    return (

        <div>
            <H1>Nasa's Astronomy Picture of the Day</H1>
            <Body url={data.url} title={data.title} explanation={data.explanation} />
        </div>
    )
}

export default Header;