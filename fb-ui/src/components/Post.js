import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">Rogelio Aguilar</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4">Post content</p>
      </div>
      {/* If any image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=750&w=1260"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div
          className="flex items-center space-x-1
         hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer"
        >
          <FiThumbsUp className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div
          className="flex items-center space-x-1
         hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer"
        >
          <FaRegCommentAlt className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div
          className="flex items-center space-x-1
         hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer"
        >
          <RiShareForwardLine className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
