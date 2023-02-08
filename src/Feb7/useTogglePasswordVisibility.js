import { useState } from "react";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('vector');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'vector') {
          setPasswordVisibility(!passwordVisibility);
        } 
      };
      return {
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility
      };

  };