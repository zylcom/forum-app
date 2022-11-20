import React from "react";
import Avatar from "./Avatar";
import VoteDownButton from "./VoteDownButton";
import VoteUpButton from "./VoteUpButton";

function CommentItem() {
  return (
    <div>
      <div className="flex gap-x-2 mb-2">
        <Avatar />

        <div className="w-full overflow-hidden">
          <p className="text-sm truncate">
            Zylcom asjdbaksdbashdjajksdkasjd adshkjashdsakdha da jksdhashd ashd
          </p>

          <p className="text-[length:10px] font-light">1 hours ago</p>
        </div>
      </div>

      <p
        className="font-montserrat overflow-hidden leading-5 max-h-[calc(3*16px*1.25)] relative before:content-['']
        before:absolute before:h-[calc(16px*1.25)] before:w-full before:bottom-0 before:pointer-events-none
        before:bg-gradient-to-t [&:has(+_input:not(:checked))]:before:from-black-wash
        [&:has(+_input:checked)]:max-h-[none]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.
      </p>

      <input
        type="checkbox"
        className="expand-btn mt-2 rounded appearance-none border px-2 cursor-pointer hover:bg-navy-blazer
        before:content-['Expand'] checked:before:content-['Collapse']"
      />

      <div className="flex rounded mt-2">
        <VoteUpButton />
        <VoteDownButton />
      </div>

      <hr />
    </div>
  );
}

export default CommentItem;
