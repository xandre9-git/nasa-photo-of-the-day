import React, { useState, useEffect } from "react"
import Header from "./Header.js"


function Body (props) {
    console.log(props)
    return (
        
        <div><p><img src = {props.url}/></p>{props.explanation}</div>
    )
}

export default Body