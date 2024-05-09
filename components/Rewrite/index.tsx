"use client";

import { FaPencilAlt } from "react-icons/fa";

function ReWrite() {
  return (
    <>
      <section>
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-bgSecondary border boder-solid border-borderPrimary p-6">
            <div className="flex gap-1 border-b border-solid border-">
              <FaPencilAlt size={20} />
              <h1>ReWrite</h1>
            </div>
            <div className="">
              <h3 className="">Target Text</h3>
              {/* <textarea minRows={3} placeholder="Minimum 3 rows" /> */}
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
    </>
  );
}

export default ReWrite;
