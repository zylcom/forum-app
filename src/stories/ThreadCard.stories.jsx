import React from "react";
import { Provider } from "react-redux";
import store from "../states";
import ThreadCard from "../components/ThreadCard";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Thread Card",
  component: ThreadCard,
  argTypes: {
    createdAt: {
      control: { type: "date" },
    },
  },
};

const Template = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThreadCard {...args} />
    </BrowserRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  id: "thread-1",
  title: "Lorem Ipsum",
  body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus doloribus 
  repudiandae maxime adipisci quibusdam hic consequuntur, quae quia laboriosam magni quis 
  explicabo eius neque facere animi provident non vero ipsa vitae ad earum fugiat ea. 
  Laborum ipsa qui praesentium explicabo placeat ab, eum at, voluptatum minus 
  deserunt dignissimos! Blanditiis?`,
  category: "test",
  createdAt: "2021-06-21T07:00:00.000Z",
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  user: {
    id: "users-1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=jhondoe&background=random",
  },
};
