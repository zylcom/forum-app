import React from "react";
import ThreadCardFooter from "./ThreadCardFooter";
import UserAvatar from "./UserAvatar";

function ThreadCard() {
  return (
    <div className="grid grid-cols-3 px-3 py-8 text-super-silver gap-y-5 border-b border-b-vampire-bite">
      <div
        className="col-span-1 flex flex-col items-center bg-red-0 px-3 relative order-2
        border-t pt-1 after:content[''] after:w-2 after:h-2 after:absolute after:bg-black
        after:-top-[1px] after:-left-[1px] after:rounded-tl-md after:border-l after:border-t
        before:content[''] before:absolute before:w-[5px] before:h-[5px] before:-top-[1px]
        before:-left-[1px] before:border-biltong before:border-l-2 before:border-t-2"
      >
        <UserAvatar />

        <p className="text-[length:10px]">1 hours ago</p>
      </div>

      <div className="col-span-2 bg-biltong/80 p-2 rounded-b-md rounded-tl-md border-r order-1">
        <h3 className="font-bold text-lg truncate">
          Title asdhgasdasdasdasdajsdha asjdhgasdjh ajshdgajshg
        </h3>

        <p className="text-sm mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          accusantium.
        </p>
      </div>

      <div className="flex gap-1 flex-wrap col-span-3 order-3">
        <span className="bg-deepest-water/50 rounded p-1 text-xs">#html</span>
      </div>

      <div className="col-span-3 flex w-full order-4">
        <ThreadCardFooter />
      </div>
    </div>
  );
}

export default ThreadCard;