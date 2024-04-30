import { Link } from "react-router-dom";
import login from "../../assets/images/login.svg";
import login_logo from "../../assets/images/login-logo.svg";

const Login = () => {
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
            <form action=''>
              <div className='form-control mb-[30px]'>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Enter Your Email'
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                />
              </div>
              <div className='form-control mb-[30px]'>
                <label htmlFor=''>Password</label>
                <input
                  className='w-full p-[17px] bg-[#F6F6F7] rounded-[10px] mt-[8px]'
                  type='password'
                  name=''
                  id=''
                  placeholder='.......'
                />
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
