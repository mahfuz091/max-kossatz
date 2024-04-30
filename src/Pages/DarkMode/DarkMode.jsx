// import Sun from "./Sun.svg";
// import Moon from "./Moon.svg";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }),
    [theme];
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={theme === "dark"}
        onClick={handleThemeSwitch}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='sun'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6 0.75C6.17405 0.75 6.34097 0.81914 6.46404 0.942211C6.58711 1.06528 6.65625 1.2322 6.65625 1.40625V2.0625C6.65625 2.23655 6.58711 2.40347 6.46404 2.52654C6.34097 2.64961 6.17405 2.71875 6 2.71875C5.82595 2.71875 5.65903 2.64961 5.53596 2.52654C5.41289 2.40347 5.34375 2.23655 5.34375 2.0625V1.40625C5.34375 1.2322 5.41289 1.06528 5.53596 0.942211C5.65903 0.81914 5.82595 0.75 6 0.75ZM8.625 6C8.625 6.69619 8.34844 7.36387 7.85616 7.85616C7.36387 8.34844 6.69619 8.625 6 8.625C5.30381 8.625 4.63613 8.34844 4.14384 7.85616C3.65156 7.36387 3.375 6.69619 3.375 6C3.375 5.30381 3.65156 4.63613 4.14384 4.14384C4.63613 3.65156 5.30381 3.375 6 3.375C6.69619 3.375 7.36387 3.65156 7.85616 4.14384C8.34844 4.63613 8.625 5.30381 8.625 6ZM8.3205 9.24844L8.78447 9.71241C8.90824 9.83195 9.07401 9.89809 9.24608 9.8966C9.41814 9.8951 9.58274 9.82609 9.70441 9.70441C9.82609 9.58274 9.8951 9.41814 9.8966 9.24608C9.89809 9.07401 9.83195 8.90824 9.71241 8.78447L9.24844 8.3205C9.12467 8.20096 8.9589 8.13481 8.78683 8.13631C8.61476 8.1378 8.45017 8.20682 8.32849 8.32849C8.20682 8.45017 8.1378 8.61476 8.13631 8.78683C8.13481 8.9589 8.20096 9.12467 8.3205 9.24844ZM9.71175 2.28759C9.83478 2.41066 9.90389 2.57755 9.90389 2.75156C9.90389 2.92558 9.83478 3.09247 9.71175 3.21553L9.24844 3.6795C9.1879 3.74218 9.11549 3.79217 9.03542 3.82657C8.95536 3.86096 8.86924 3.87906 8.78211 3.87982C8.69497 3.88058 8.60856 3.86397 8.5279 3.83098C8.44725 3.79798 8.37398 3.74925 8.31237 3.68763C8.25075 3.62602 8.20202 3.55275 8.16902 3.47209C8.13603 3.39144 8.11942 3.30503 8.12018 3.21789C8.12094 3.13076 8.13904 3.04464 8.17343 2.96458C8.20783 2.88451 8.25782 2.8121 8.3205 2.75156L8.78447 2.28759C8.90753 2.16457 9.07442 2.09545 9.24844 2.09545C9.42245 2.09545 9.58934 2.16457 9.71241 2.28759H9.71175ZM10.5938 6.65625C10.7678 6.65625 10.9347 6.58711 11.0578 6.46404C11.1809 6.34097 11.25 6.17405 11.25 6C11.25 5.82595 11.1809 5.65903 11.0578 5.53596C10.9347 5.41289 10.7678 5.34375 10.5938 5.34375H9.9375C9.76345 5.34375 9.59653 5.41289 9.47346 5.53596C9.35039 5.65903 9.28125 5.82595 9.28125 6C9.28125 6.17405 9.35039 6.34097 9.47346 6.46404C9.59653 6.58711 9.76345 6.65625 9.9375 6.65625H10.5938ZM6 9.28125C6.17405 9.28125 6.34097 9.35039 6.46404 9.47346C6.58711 9.59653 6.65625 9.76345 6.65625 9.9375V10.5938C6.65625 10.7678 6.58711 10.9347 6.46404 11.0578C6.34097 11.1809 6.17405 11.25 6 11.25C5.82595 11.25 5.65903 11.1809 5.53596 11.0578C5.41289 10.9347 5.34375 10.7678 5.34375 10.5938V9.9375C5.34375 9.76345 5.41289 9.59653 5.53596 9.47346C5.65903 9.35039 5.82595 9.28125 6 9.28125ZM2.75156 3.6795C2.81249 3.74047 2.88483 3.78885 2.96446 3.82186C3.04408 3.85488 3.12943 3.87188 3.21563 3.87191C3.30182 3.87194 3.38718 3.855 3.46683 3.82204C3.54648 3.78908 3.61886 3.74076 3.67983 3.67983C3.7408 3.6189 3.78917 3.54656 3.82219 3.46693C3.8552 3.38731 3.87221 3.30196 3.87224 3.21576C3.87227 3.12957 3.85533 3.04421 3.82237 2.96456C3.78941 2.88491 3.74109 2.81254 3.68016 2.75156L3.21553 2.28759C3.09176 2.16805 2.92599 2.10191 2.75392 2.1034C2.58186 2.1049 2.41726 2.17391 2.29559 2.29559C2.17391 2.41726 2.1049 2.58186 2.1034 2.75392C2.10191 2.92599 2.16805 3.09176 2.28759 3.21553L2.75156 3.6795ZM3.6795 9.24844L3.21553 9.71241C3.09176 9.83195 2.92599 9.89809 2.75392 9.8966C2.58186 9.8951 2.41726 9.82609 2.29559 9.70441C2.17391 9.58274 2.1049 9.41814 2.1034 9.24608C2.10191 9.07401 2.16805 8.90824 2.28759 8.78447L2.75156 8.3205C2.87533 8.20096 3.0411 8.13481 3.21317 8.13631C3.38524 8.1378 3.54983 8.20682 3.67151 8.32849C3.79318 8.45017 3.8622 8.61476 3.86369 8.78683C3.86519 8.9589 3.79904 9.12467 3.6795 9.24844ZM2.0625 6.65625C2.23655 6.65625 2.40347 6.58711 2.52654 6.46404C2.64961 6.34097 2.71875 6.17405 2.71875 6C2.71875 5.82595 2.64961 5.65903 2.52654 5.53596C2.40347 5.41289 2.23655 5.34375 2.0625 5.34375H1.40625C1.2322 5.34375 1.06528 5.41289 0.942211 5.53596C0.81914 5.65903 0.75 5.82595 0.75 6C0.75 6.17405 0.81914 6.34097 0.942211 6.46404C1.06528 6.58711 1.2322 6.65625 1.40625 6.65625H2.0625Z'
            fill='#313236'
          />
        </svg>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='moon'
        >
          <path
            d='M10.8732 7.95662C9.91837 8.34057 8.87179 8.43545 7.86353 8.22946C6.85526 8.02347 5.92976 7.5257 5.20209 6.79802C4.47441 6.07034 3.97663 5.14485 3.77065 4.13658C3.56466 3.12831 3.65953 2.08174 4.04349 1.12695C2.91282 1.58238 1.97578 2.41693 1.39301 3.48754C0.810238 4.55815 0.61803 5.79814 0.849335 6.99493C1.08064 8.19173 1.72105 9.2708 2.66078 10.0472C3.60052 10.8235 4.78104 11.2488 5.99999 11.2501C7.04819 11.2502 8.07242 10.9365 8.94088 10.3496C9.80935 9.76263 10.4823 8.92923 10.8732 7.95662Z'
            stroke='#313236'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;
