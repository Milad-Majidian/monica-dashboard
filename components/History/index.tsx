import "./history.css";
import { useEffect, useState } from "react";
import HistoryDetail from "./HistoryDetail";
import { RiCloseLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

// const historyDetail = Array.from({ length: 8 }, (_, index) => (

// ));

const historyDetail = [1, 2, 3, 4, 5, 6, 7, 8];

function History({ openHistory }: { openHistory: boolean }) {
  // const [history, setHistory] = useState([]);

  useEffect(() => {}, []);
  // fixed top-0 right-0 h-full w-full bg-white z-50
  return (
    <>
      <div
        className={`
         ${
           openHistory ? "opacity-100" : "opacity-0"
         } transition-all duration-300 ease-in-out 
      history-box p-7`}
      >
        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-8">
            <div className="col-span-7">
              <div className="bg-white flex justify-start items-center gap-1 h-[44px] w-full py-[6px] px-[16px] rounded-[8px] text-[#B9BAC0]">
                <IoSearchOutline size={22} />
                <span className="text-[14px] ">Search</span>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center text-[#575757]">
              <RiCloseLine size={25} />
            </div>
          </div>
          <div className="w-full border-b border-solid border-[#EFEFEF] mt-3 mb-4"></div>
          <div className="grid grid-cols-1 justify-center gap-3">
            {historyDetail.map((item, index) => (
              <HistoryDetail key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
