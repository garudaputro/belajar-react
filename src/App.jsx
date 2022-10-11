import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';
import { useState } from 'react';
const App = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount((prevCount) => prevCount + 1);
        console.log(count)
    }
   
    return (
        <PlaceContentCenter>
            <p className='text-2xl'>{count}</p>
            <div className='mt-5 flex gap-x-2'>
                <Button className='bg-green-500' onClick={handleClick}>
                    +
                </Button>
              
            </div>
        </PlaceContentCenter>
    );
};

export default App;
