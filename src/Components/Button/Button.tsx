import * as React from 'react';
import './Button.css';

interface IButtonProps {
    children: string;
}

const handleClick = () => {
    localStorage.setItem("lang", "al");
}

const Button = (props: IButtonProps) => (
    <div className="button" onClick={handleClick}>{props.children}</div>
)

export default Button;