import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";

const Input = ({ error, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <input
        {...rest}
        className={`font-bold bg-transparent h-10 pl-2 w-full placeholder:font-normal focus:outline-none ${
          theme ? "text-light" : "text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const SecondaryInput = ({ label, id, error, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
          theme
            ? "border-light text-light"
            : "border-dark text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const DateInput = ({ label, id, error, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        className={`bg-white border-b-2 h-10 px-2 text-dark text-sm w-full tab:w-3/4 focus:outline-none ${
          theme ? "border-light" : "border-dark"
        }`}
      />
    </>
  );
};

export default Input;
