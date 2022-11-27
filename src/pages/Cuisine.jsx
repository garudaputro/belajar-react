import React from 'react';
import { motion } from "framer-motion"
import {Link, useParams} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params= useParams();
    
    // mendapatkan data dari api
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4bca4908d81d40ceaef4225b97503a11&cuisine=${name}`);
        const recipes = await data.json();
        
        setCuisine(recipes.results)
    }

    useEffect(() => {
       getCuisine(params.type) 
    
    },[params.type])

    return <div>
        {cuisine.map((item) => {
            return (
                <div className='flex gap-5 justify-center mt-5'>
                    <div key={item.id} className='card card-compact gap-5 space-x-5 w-96   bg-base-100 shadow-xl'>
                    <figure>
                        <img src={item.image} alt='Shoes' className='w-full' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>
                            <p>{item.title}</p>
                        </h2>
                    </div>
                </div>
                </div>
            )
        })}
    </div>;
};

export default Cuisine;
