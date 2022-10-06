import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons";

const App = () => {
    return (
        <div className='bg-slate-600 grid place-content-center min-h-screen '>
            <div className="flex gap-x-2">

            <Button>
                <IconBrandFacebook/>
                    register
                
            </Button>
            <Button>
                    <IconBrandGoogle/>
                    login with google
            </Button> 
                       
            </div>
          
        </div>
    );
};



const Button = (props) => {
    return (
        <button className={"[&>svg]:w-5 [&>svg]h-5 [&>svg]stroke-5 bg-blue-600 items-center gap-x-2 flex hover:bg-blue-500 transition text-white px-4 py-2 rounded"}>
                {props.text || props.children}
           </button>
    )
}




export default App;
