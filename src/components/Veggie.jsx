import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4bca4908d81d40ceaef4225b97503a11&number=5&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };
    return (
        <div className='px-4 py-4'>
            <h3> Veggie Picks</h3>
            <Splide
                options={{
                    perPage: 4,
                    gap: 10,
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        400: {
                            perPage: 1,
                        },
                        640: {
                            perPage: 2,
                        },
                   
                    },
                }}
            >
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id} className='flex py-8 '>
                            <div className='card card-compact gap-5 space-x-5 w-96   bg-base-100 shadow-xl'>
                                <figure>
                                    <img src={recipe.image} alt='Shoes' className='w-full' />
                                </figure>
                                <div className='card-body'>
                                    <h2 className='card-title'>
                                        <p>{recipe.title}</p>
                                    </h2>
                                </div>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default Veggie;
