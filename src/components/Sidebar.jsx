import logo from "../assets/logo.svg";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

export function Sidebar() {
  return (
    <div className="flex flex-col w-[19rem] relative">
      <div className="ps-4 pt-4">
        <img src={logo} alt="twitter logo" width={55} height={55} />
      </div>
      <div className="flex flex-col w-full pt-8">
        <ul className="flex flex-col gap-8 w-[80%] ">
          <li className="flex gap-3 items-center justify-start w-full h-12 px-4 rounded-3xl hover:bg-sky-800/20 group cursor-pointer ">
            <AiOutlineHome className="text-3xl text-white group-hover:text-sky-400" />
            <span className="ml-4 text-xl text-white font-extrabold group-hover:text-sky-400">
              Home Page
            </span>
          </li>
          <li className="flex gap-4 items-center justify-start w-full h-12 px-4 rounded-3xl  hover:bg-sky-800/20 group cursor-pointer">
            <IoNotificationsOutline className="text-3xl text-white font-bold group-hover:text-sky-400" />
            <span className="ml-4 text-xl text-white font-extrabold group-hover:text-sky-400">
              Notifications
            </span>
          </li>
          <li className="flex gap-3 items-center justify-start w-full h-12 px-4 rounded-3xl  hover:bg-sky-800/20 group cursor-pointer">
            <AiOutlineMail className="text-3xl text-white font-bold group-hover:text-sky-400" />
            <span className="ml-4 text-xl text-white font-extrabold group-hover:text-sky-400">
              Messages
            </span>
          </li>
          <li className="flex gap-3 items-center justify-start w-full h-12 px-4 rounded-3xl hover:bg-sky-800/20 group cursor-pointer">
            <MdOutlineFavoriteBorder className="text-3xl text-white font-bold group-hover:text-sky-400" />
            <span className="ml-4 text-xl text-white font-extrabold group-hover:text-sky-400">
              Favorites
            </span>
          </li>
          <li className="flex gap-3 items-center justify-start w-full h-12 px-4 rounded-3xl hover:bg-sky-800/20 group cursor-pointer">
            <BsFillPersonFill className="text-3xl text-sky-400 font-bold " />
            <span className="ml-4 text-xl text-sky-400 font-extrabold ">
              Profile
            </span>
          </li>
        </ul>

        <button className="flex items-center justify-center bg-sky-500 mx-4 py-4 rounded-full mt-8 text-gray-200 font-bold text-lg">
          Tweet
        </button>
      </div>
      <div className="text-white absolute bottom-4 ps-4 w-full">
        <div className="flex relative w-full">
          <div className="rounded-full bg-zinc-500 h-12 w-12"></div>
          <div className="flex flex-col ps-2">
            <span className=" font-extrabold">Laranjas</span>
            <span className="text-sm text-zinc-400">@johndoeMan</span>
          </div>
          <div className="absolute right-4 top-2 cursor-pointer">
            <MdLogout className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
