import DarkMode from "../../DarkMode/DarkMode";
import moonIcon from "../../../assets/images/moon-icon.png";
const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <h3 className='font-poppins text-[25px] md:text-[30px] font-semibold text-[#313236] '>
        <span className='text-[#007AFF]'>Note</span>-Taking
      </h3>
      <div className='flex gap-[18px] items-center'>
        <div className='flex items-center gap-[10px]'>
          <img src={moonIcon} alt='' />
          <p className='font-inter text-[16px] text-[#636364] font-medium'>
            Light Mode
          </p>
        </div>
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
