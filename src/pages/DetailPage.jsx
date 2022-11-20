import React from "react";
import Avatar from "../components/Avatar";
import CommentList from "../components/CommentList";

function DetailPage() {
  return (
    <div
      className="text-white flex md:max-h-screen md:min-h-screen flex-col gap-y-10
      md:flex-row "
    >
      <div className="overflow-auto bg-navy-blazer py-16 px-3">
        <div className=" flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Avatar />

            <p className="text-xs text-center font-light break-all mt-1">
              Zylcom
            </p>
          </div>

          <p className="text-[length:10px] font-light">1 hours ago</p>
        </div>

        <h1 className="text-3xl font-bold my-7">
          Title Lorem ipsum dolor sit amet.
        </h1>

        <p className="font-montserrat font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tenetur quaerat eum. Accusantium, ex delectus distinctio explicabo
          adipisci obcaecati eaque odio in ullam excepturi repellendus, nisi
          praesentium ratione culpa voluptatum corrupti harum ipsa voluptate
          tenetur! Ipsum esse facere cumque, corrupti minima voluptatum! A minus
          tenetur eos distinctio, asperiores aperiam voluptas aliquid nihil
          impedit nostrum hic quaerat fuga, provident quasi! Harum ratione nam
          perspiciatis sunt ad cupiditate culpa odio facere eaque, dicta hic
          earum eius eum atque? Doloremque, perspiciatis? Cupiditate labore
          molestias officia laudantium soluta harum, non rerum! Perferendis
          aspernatur officia repellat nam harum consequatur, culpa sequi minima
          sed consequuntur nesciunt!
        </p>
      </div>

      <aside
        className="md:border-l md:pt-5 pb-16 overflow-auto md:min-w-[300px] md:max-w-[350px] lg:max-w-[500px]
        xl:max-w-[600px]"
        id="comments"
      >
        <CommentList />
      </aside>
    </div>
  );
}

export default DetailPage;
