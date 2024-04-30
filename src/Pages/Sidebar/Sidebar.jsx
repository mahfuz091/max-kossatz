import note from "../../assets/images/note.png";
import ai from "../../assets/images/ai.png";
import setting from "../../assets/images/004-setting-1 1.svg";
import help from "../../assets/images/005-help 1.svg";

const Sidebar = () => {
  return (
    <aside
      id='sidebar'
      className='bg-[#fff] pb-[70px] flex flex-col justify-between dark:bg-[#292c35] '
    >
      <div className=''>
        <div className=' pt-[40px] pb-[30px]'>
          <img className='mx-auto' src={note} alt='' />
        </div>
        <hr />
        <div className='pt-[40px]'>
          <img className='mx-auto' src={ai} alt='' />
        </div>
      </div>
      <div>
        <div className='flex flex-col gap-[34px] '>
          <img className='mx-auto' src={help} alt='' />
          <img className='mx-auto' src={setting} alt='' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
