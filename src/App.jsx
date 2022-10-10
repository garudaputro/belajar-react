import { IconBrandGoogle, IconBrandTelegram } from '@tabler/icons';
import Button from './components/Button';

const App = () => {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button text='sign in' />
                <Button>
                    <IconBrandTelegram />
                    register
                </Button>
            </div>
        </div>
    );
};

export default App;
