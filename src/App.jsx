
import { IconBrandTwitter, IconBrandGithub, IconBrandFacebook } from '@tabler/icons';
import Button from './components/Button';


const App = () => {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('github')} className='bg-slate-800'>
                    <IconBrandGithub />
                    github
                </Button>

                <Button onClick={() => console.log('twitter')} className='bg-blue-500 shadow-lg' type="submit">
                    <IconBrandTwitter />
                    twitter
                </Button>
                <Button onClick={() => console.log('facebook')} className='bg-blue-800 shadow-lg ' type="submit">
                    <IconBrandFacebook />
                    facebook
                </Button>

            </div>
        </div>
    );
};

export default App;
