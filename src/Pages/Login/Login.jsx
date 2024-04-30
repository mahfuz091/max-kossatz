import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.svg";
import login_logo from "../../assets/images/login-logo.svg";
import axiosInstance from "../../lib/axios-instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePass = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;
    const user = { username, password };
    console.log(user);

    try {
      const response = await axiosInstance.post("/token", user);
      const accessToken = response.data.data.token;
      const data = response.data.data;
      console.log(data);

      localStorage.setItem("accessToken", accessToken);

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className='p-[24px] md:p-[40px] md:h-screen'>
      <div className='rounded-[30px]  h-full bg-[#FFFFFF] border-[1px] border-[#E2E9EF] grid grid-cols-1 md:grid-cols-2 gap-y-[50px]'>
        <div className='bg-[#007AFF]  rounded-t-[30px] md:rounded-tr-[0] md:rounded-s-[30px] flex justify-center items-center  '>
          <div className='max-[767px]:py-[87px] max-[767px]:px-[22px]'>
            <img className='max-[767px]:w-[299px] ' src={login} alt='' />
          </div>
        </div>
        <div className='flex justify-center items-center px-[15px] lg:px-[25px]'>
          <div className='max-w-[520px] w-full '>
            <img className='mx-auto mb-[20px]' src={login_logo} alt='' />
            <h3 className='font-manrope text-[20px] text-center text-[#161819] md:text-[36px] font-extrabold'>
              Welcome Back
            </h3>
            <p className='font-inter text-[16px] text-[#636364] text-center mb-[30px] mt-[5px]'>
              Welcome Back! Please Enter Your Details.
            </p>
            <form action='' onSubmit={handleLogin}>
              <div className='form-control mb-[30px]'>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name='email'
                  id=''
                  placeholder='Enter Your Email'
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                />
              </div>
              <div className='form-control relative mb-[30px]'>
                <label htmlFor=''>Password</label>
                <input
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                  type={isPasswordVisible ? "text" : "password"}
                  name='password'
                  id=''
                  placeholder='.......'
                />
                <div className='cursor-pointer' onClick={togglePass}>
                  {isPasswordVisible ? (
                    <span className='absolute top-[52px] right-0 flex items-center px-4 text-[#8A8E8F]'>
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </span>
                  ) : (
                    <span className='absolute top-[52px] right-0 flex items-center px-4 text-[#8A8E8F]'>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  )}
                </div>

                <p className='font-inter text-[16px] text-[#636364] text-right mt-[30px]'>
                  Forgot Password
                </p>
              </div>

              <div className='form-control'>
                <input
                  className='p-[17px] w-full text-white font-inter text-[18px] font-medium bg-[#007AFF] rounded-[10px]'
                  type='submit'
                  value='Register'
                />
              </div>
            </form>
            <p className='font-inter text-[18px] font-normal text-[#8A8E8F] mt-[40px] text-center mb-[24px]'>
              Don’t have an account?{" "}
              <Link to='/register'>
                <span className=' font-medium text-[#007aff]'>Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
