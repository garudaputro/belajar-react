import React from 'react';
import { motion } from "framer-motion"
import {Link, useParams} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params= useParams();
    
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4bca4908d81d40ceaef4225b97503a11&cuisine=${name}`);
        const recipes = await data.json();
        
        setCuisine(recipes.result)
    }

    useEffect(() => {
       getCuisine(params.type) 
    
    },[params.type])

    return <div>
       
    </div>;
};

export default Cuisine;
