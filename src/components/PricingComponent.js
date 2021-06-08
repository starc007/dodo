import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Pricing = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <div
        className="w-11/12 md:w-1/3 shadow-xl rounded div-margin-3"
        style={{ height: "110vh" }}
      >
        <div className=" pt-4 text-center">
          <p className="text-3xl">Regular</p>
          <p className="text-6xl font-semibold">$59</p>
        </div>
        <div className="flex justify-center">
          <hr className="w-4/5" />
        </div>
        <div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              LIFETIME UPDATE
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              PERMITTED FOR 1 DOMAIN
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              6 MONTHS TECHNICAL SUPPORT
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              ZENDESK SUPPORT (1 BUSINESS DAY)
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              FOR PERSONAL PROJECT
            </label>
          </div>
          <div className="flex justify-center items-center">
            <ImCross size={15} color="red" />
            <label className="text-gray-600 pt-2 text-base font-medium ml-2">
              FOR COMMERCIAL PRJOECT
            </label>
          </div>
          <div className="flex justify-center items-center">
            <ImCross size={15} color="red" />
            <label className="text-gray-600 pt-2 text-base font-medium ml-2">
              1 HR LIVE SUPPORT (ANYDESK)
            </label>
          </div>
          <div className="flex justify-center items-center">
            <ImCross size={15} color="red" />
            <label className="text-gray-600 pt-2 text-base font-medium ml-2">
              FREE INSTALLATION (CPANEL)
            </label>
          </div>
          <div className="flex justify-center">
            <hr className="w-4/5" />
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="w-4/5 h-12 text-center border-2 border-blue-600 rounded-3xl text-blue-600 p-2 text-lg hover:bg-blue-600 hover:text-white"
              style={{ textDecoration: "none" }}
            >
              Buy Regular License
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-11/12 md:w-1/3  shadow-xl div-margin-3  rounded"
        style={{ height: "110vh" }}
      >
        <div className=" pt-4 text-center">
          <p className="text-3xl">Extended</p>
          <p className="text-6xl font-semibold">$525</p>
        </div>
        <div className="flex justify-center">
          <hr className="w-4/5" />
        </div>
        <div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              LIFETIME UPDATE
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              PERMITTED FOR 1 DOMAIN
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              6 MONTHS TECHNICAL SUPPORT
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              ZENDESK SUPPORT (1 BUSINESS DAY)
            </label>
          </div>
          <div className="flex justify-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base font-medium ml-2">
              FOR PERSONAL PROJECT
            </label>
          </div>
          <div className="flex justify-center items-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base pt-2 font-medium ml-2">
              FOR COMMERCIAL PRJOECT
            </label>
          </div>
          <div className="flex justify-center items-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base pt-2 font-medium ml-2">
              1 HR LIVE SUPPORT (ANYDESK)
            </label>
          </div>
          <div className="flex justify-center items-center">
            <AiOutlineCheck size={22} color="green" />
            <label className="text-gray-600 text-base pt-2 font-medium ml-2">
              FREE INSTALLATION (CPANEL)
            </label>
          </div>
          <div className="flex justify-center">
            <hr className="w-4/5" />
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="w-4/5 h-12 text-center rounded-3xl text-blue-600 p-2 text-lg bg-blue-600 text-white"
              style={{ textDecoration: "none" }}
            >
              Buy Extended License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
