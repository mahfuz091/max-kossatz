import { Link, useNavigate } from "react-router-dom";
import register from "../../assets/images/register.svg";
import axiosInstance from "../../lib/axios-instance";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const togglePass = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPass = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleLRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const user = { email, password };
    console.log(user);

    if (password !== confirmPassword) {
      setConfirmPassError(true);
    } else {
      try {
        const response = await axiosInstance.post("/users", user);
        const accessToken = response.data.data.token;
        const data = response.data.data;
        console.log(data);

        localStorage.setItem("accessToken", accessToken);

        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <div className='p-[24px] md:p-[40px] md:h-screen'>
      <div className='rounded-[30px]  h-full bg-[#FFFFFF] border-[1px] border-[#E2E9EF] grid grid-cols-1 md:grid-cols-2 gap-y-[50px]'>
        <div className='bg-[#007AFF]  rounded-t-[30px] md:rounded-tr-[0] md:rounded-s-[30px] flex justify-center items-center  '>
          <div className='max-[767px]:py-[87px] max-[767px]:px-[22px]'>
            <img className='max-[767px]:w-[299px] ' src={register} alt='' />
          </div>
        </div>
        <div className='flex justify-center items-center px-[15px] lg:px-[25px] '>
          <div className='max-w-[520px] w-full '>
            <h3 className='font-manrope text-[20px] text-center text-[#161819] md:text-[36px] font-extrabold'>
              Create an Account
            </h3>
            <p className='font-inter text-[16px] text-[#636364] text-center mb-[30px] mt-[5px]'>
              Register with your details for note-tracking
            </p>
            <form action='' onSubmit={handleLRegister}>
              <div className='form-control mb-[20px]'>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name='email'
                  id=''
                  placeholder='Enter Your Email'
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                />
              </div>
              <div className='form-control relative mb-[20px]'>
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
              </div>
              <div className='form-control relative mb-[70px]'>
                <label htmlFor=''>Confirm Password</label>
                <input
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  name='confirmPassword'
                  id=''
                  placeholder='..........'
                />
                {confirmPassError ? (
                  <>
                    <p className='mt-2 text-warning'>Password does not match</p>
                  </>
                ) : (
                  ""
                )}
                <div className='cursor-pointer' onClick={toggleConfirmPass}>
                  {isConfirmPasswordVisible ? (
                    <span className='absolute top-[52px] right-0 flex items-center px-4 text-[#8A8E8F]'>
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </span>
                  ) : (
                    <span className='absolute top-[52px] right-0 flex items-center px-4 text-[#8A8E8F]'>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  )}
                </div>
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
              Already have an account?{" "}
              <Link to='/login'>
                <span className=' font-medium text-[#007aff]'>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
