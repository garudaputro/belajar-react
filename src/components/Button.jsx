import clsx from 'clsx';

const Button = (props) => {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-2  flex items-center gap-x-2 text-white px-4 py-2 rounded-md'
            )}
        >
            {text || children}
        </button>
    );
};

export default Button;
