import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    
    const output = useLoaderData()
    // const [output, setOutput] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/ashishsingh10")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setOutput(data)
    //     });
    // }, []);

    return (
        <div className="bg-gray-700 text-white text-2xl text-center p-5">
        GitHub Profile: {output.name}
        <div className="flex">
            <img src={output.avatar_url} width={300} className="m-4" />
            <h4>{output.bio}</h4>
        </div>
        
        
        </div>
    )
}

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/ashishsingh10");
    return response.json();
    
}