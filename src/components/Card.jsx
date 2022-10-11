const Card = ({ children }) => {
    return <div className='shadow bg-white rounded-md'>{children}</div>;
};

const Title = ({ children }) => {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl'>{children}</h1>
        </div>
    );
};
const Body = ({ children }) => {
    return <h1 className='leading-relaxed p-4'>{children}</h1>;
};

const Footer = ({ children }) => {
    return <div className=' flex p-4'>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;
