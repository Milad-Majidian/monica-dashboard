import { BsPinAngleFill } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

function HistoryDetail() {
  return (
    <>
      <div className="col-span-1 w-full h-[75px] bg-white border boder-solid border-borderPrimary rounded-[8px]">
        <div className="h-full grid grid-cols-4 justify-between items-center p-3">
          <div className="col-span-3">
            <div className="flex flex-col justify-between items-start gap-3">
              <h4 className="text-[13px]">Lorem ipsum dolor amet ...</h4>
              <span className="text-[12px] text-[#B9BAC0]">English</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col justify-between items-end gap-3">
              <div className="flex justify-between items-center gap-3 text-[#D7D7D7]">
                <BsPinAngleFill size={20} />
                <IoBookmarkOutline size={20} />
                <RiDeleteBin6Line size={20} />
              </div>
              <span className="text-[12px] text-[#B9BAC0]">50 Min ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryDetail;
