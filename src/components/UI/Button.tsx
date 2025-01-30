

import React from 'react';
import '../../styles/button.scss'

type ButtonProps = {
  text: string;
  onClick?: () => void ; 
  className?: string;
  icon: any | undefined;
};

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {icon ? icon : null}{text}
    </button>
  );
};

export default Button;
