import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Pages from './pages/Pages';

function App() {
    return (
        <div className='w-full mt-10'>
            <BrowserRouter>
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
