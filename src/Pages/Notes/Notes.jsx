import filter from "../../assets/images/filter.svg";
import prev from "../../assets/images/prev.svg";
import next from "../../assets/images/next.svg";
import writing from "../../assets/images/writing.svg";
import delete_icon from "../../assets/images/delete.svg";
import dayjs from "dayjs";
import { useState } from "react";
import Editor from "../Editor/Editor";

const Notes = () => {
  const [date, setDate] = useState(dayjs);
  const [isActive, setIsActive] = useState(true);
  const [isActiveYesterday, setIsActiveYesterday] = useState(false);
  const getNextDay = () => {
    setDate((prevDate) => prevDate.add(1, "day"));
  };

  const getPrevDay = () => {
    setDate((prevDate) => prevDate.subtract(1, "day"));
  };
  console.log(date);
  return (
    <div className='mt-[27px]  '>
      <div className='pb-[16px] border-b-[#E2E9EF] border-b-[1px] flex justify-between items-center mb-[30px]'>
        <h3 className='font-poppins text-[20px] md:text-[24px] font-semibold text-[#313236] dark:text-white'>
          My Notes
        </h3>
        <div className='flex items-center gap-[12px]'>
          <div className='date flex items-center gap-[30px] py-[12px] pl-[14px] pr-[10px] border-[#E2E9EF] border-[1px] rounded-[6px]'>
            <p
              className={`font-inter font-medium text-[14px] text-[#636364] cursor-pointer ${
                isActive ? "active" : ""
              }`}
              onClick={() => {
                setIsActive(true);
                setIsActiveYesterday(false);
              }}
            >
              Today
            </p>
            <p
              className={`font-inter font-medium text-[14px] text-[#636364] cursor-pointer ${
                isActiveYesterday ? "active" : ""
              }`}
              onClick={() => {
                setIsActive(false);
                setIsActiveYesterday(true);
              }}
            >
              Yesterday
            </p>
            <div className='flex items-center'>
              <button onClick={getPrevDay}>
                <img src={prev} alt='' />
              </button>
              <p className='font-inter font-semibold text-[14px] text-[#313236]'>
                {date.format("DD MMM, YYYY")}
              </p>
              <button onClick={getNextDay}>
                <img src={next} alt='' />
              </button>
            </div>
          </div>
          <button className='bg-[#007AFF] rounded-[6px] p-[13px]'>
            <img src={filter} alt='' />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-9 h-full'>
          <div className='pr-[20px] flex  flex-col'>
            <div>
              <div className='mb-[30px]'>
                <p className='flex items-center gap-[4px] mb-[11px]'>
                  <img src={writing} alt='' />{" "}
                  <span className='font-inter text-[10px] font-normal text-[#727684]'>
                    9.25 AM
                  </span>
                </p>
                <div className='flex items-center gap-[10px]'>
                  <p className='py-[10px] px-[12px] text-[#636364] bg-[#F6F6F7] inline-block rounded-tl-0 rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] mb-[10px]'>
                    Hi, I need to log some notes for my recent deal activities.
                  </p>
                  <button>
                    <img src={delete_icon} alt='' />
                  </button>
                </div>
                <p>
                  <span className='text-[#007AFF] font-inter text-[12px] font-normal'>
                    1 Notes
                  </span>{" "}
                  <span className='txt-[#727684] font-inter text-[10px]'>
                    10 m
                  </span>
                </p>
              </div>
              <div className='mb-[30px]'>
                <p className='flex items-center gap-[4px] mb-[11px]'>
                  <img src={writing} alt='' />{" "}
                  <span className='font-inter text-[10px] font-normal text-[#727684]'>
                    9.25 AM
                  </span>
                </p>
                <div className='flex items-center gap-[10px]'>
                  <p className='py-[10px] px-[12px] text-[#636364] bg-[#F6F6F7] inline-block rounded-tl-0 rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] mb-[10px]'>
                    Sure, I met with a potential client today named John Smith.
                    We discussed our new product features and scheduled a
                    follow-up meeting next week.
                  </p>
                  <button>
                    <img src={delete_icon} alt='' />
                  </button>
                </div>
                <p>
                  <span className='text-[#007AFF] font-inter text-[12px] font-normal'>
                    1 Notes
                  </span>{" "}
                  <span className='txt-[#727684] font-inter text-[10px]'>
                    10 m
                  </span>
                </p>
              </div>
              <div className='mb-[30px]'>
                <p className='flex items-center gap-[4px] mb-[11px]'>
                  <img src={writing} alt='' />{" "}
                  <span className='font-inter text-[10px] font-normal text-[#727684]'>
                    9.25 AM
                  </span>
                </p>
                <div className='flex items-center gap-[10px]'>
                  <p className='py-[10px] px-[12px] text-[#636364] bg-[#F6F6F7] inline-block rounded-tl-0 rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] mb-[10px]'>
                    Sure, I met with a potential client today named John Smith.
                    We discussed our new product features and scheduled a
                    follow-up meeting next week.
                  </p>
                  <button>
                    <img src={delete_icon} alt='' />
                  </button>
                </div>
                <p>
                  <span className='text-[#007AFF] font-inter text-[12px] font-normal'>
                    1 Notes
                  </span>{" "}
                  <span className='txt-[#727684] font-inter text-[10px]'>
                    10 m
                  </span>
                </p>
              </div>
            </div>
            <div className='mt-[80px] '>
              <Editor />
            </div>
          </div>
        </div>
        <div className='col-span-3 rounded-[20px] h-full border-[1px] border-[#E2E9EF]'>
          <h3 className='px-[24px] py-[16px] font-poppins text-[20px] font-semibold text-[#313236] border-b-[1px]'>
            Thread
          </h3>
          <div className='pl-[31px] pr-[17px] mt-[30px]'>
            <div className='mb-[30px]'>
              <p className='flex items-center gap-[4px] mb-[11px]'>
                <img src={writing} alt='' />{" "}
                <span className='font-inter text-[10px] font-normal text-[#727684]'>
                  9.25 AM
                </span>
              </p>
              <div className='flex items-center gap-[10px]'>
                <p className='py-[10px] px-[12px] text-[#636364] bg-[#F6F6F7] inline-block rounded-tl-0 rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] mb-[10px]'>
                  Additional features requested. Will update project scope
                  accordingly.
                </p>
                <button>
                  <img src={delete_icon} alt='' />
                </button>
              </div>
              <p className='font-inter text-[10px] font-normal flex items-center gap-[5px]'>
                1 Reply <span className='line'></span>
              </p>
            </div>
            <div className='mt-auto'>
              <Editor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
