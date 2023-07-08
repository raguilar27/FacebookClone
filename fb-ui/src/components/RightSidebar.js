import React from "react";
import Contacts from "./Contacts";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        src="https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="John Connor"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Michael Owen"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Joseph Nathaniel"
        status="Offline"
      />
      <Contacts
        src="https://images.pexels.com/photos/1777479/pexels-photo-1777479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Ong Bak III"
        status="Online"
      />
    </div>
  );
};

export default RightSidebar;
