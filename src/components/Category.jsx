import React from 'react';
import { CiPizza, CiBowlNoodles } from 'react-icons/ci';
import { FaHamburger } from 'react-icons/fa';
import { GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
    return (
        <div className='flex justify-center gap-3'>
            <NavLink  to={'/cuisine/italian'} className='flex gap-2 align-center'>
                <CiPizza />
                <p>Italian</p>
            </NavLink>
            <NavLink  to={'/cuisine/American'} className='flex gap-2 align-center'>
                <FaHamburger />
                <p>American</p>
            </NavLink>
            <NavLink to={'/cuisine/japanese'} className='flex gap-2 align-center'>
                <GiChopsticks  />
                <p>japanese</p>
            </NavLink>
        </div>
    );
}

export default Category;
