import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import ThreadCardFooter from "./ThreadCardFooter";

function ThreadCard() {
  return (
    <div className="grid grid-cols-3 px-3 py-8 text-super-silver gap-y-5 border-b border-b-vampire-bite">
      <div
        className="col-span-1 flex flex-col items-center bg-red-0 px-3 relative order-2
        border-t pt-1 after:content[''] after:w-2 after:h-2 after:absolute after:bg-navy-blazer
        after:-top-[1px] after:-left-[1px] after:rounded-tl-md after:border-l after:border-t
        before:content[''] before:absolute before:w-[5px] before:h-[5px] before:-top-[1px]
        before:-left-[1px] before:border-space-explorer before:border-l-2 before:border-t-2"
      >
        <div>
          <Avatar />

          <p className="text-xs text-center font-light break-all mt-1">
            Zylcom
          </p>
        </div>

        <p className="text-[length:10px] font-light">1 hours ago</p>
      </div>

      <div className="col-span-2 bg-space-explorer/80 p-2 rounded-b-md rounded-tl-md border-r order-1">
        <Link to={`/threads/${"12"}`}>
          <h3 className="font-bold text-lg truncate hover:text-clear-chill">
            Title asdhgasdasdasdasdajsdha asjdhgasdjh ajshdgajshg
          </h3>
        </Link>

        <p className="text-sm mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          accusantium.
        </p>
      </div>

      <div className="flex gap-1 flex-wrap col-span-3 order-3">
        <span className="bg-deepest-water/50 rounded p-1 text-xs">#html</span>
      </div>

      <div className="col-span-3 flex w-full order-4 border rounded [&>button:nth-child(2)]:border-x">
        <ThreadCardFooter />
      </div>
    </div>
  );
}

export default ThreadCard;
