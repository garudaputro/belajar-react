const PlaceContentCenter = ({ children }) => {
    return (
        <div className='bg-black'>
            <div className='bg-violet-900/20 min-h-screen text-violet-50 flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg  w-full'>{children}</div>
            </div>
        </div>
    );
};

export default PlaceContentCenter;
