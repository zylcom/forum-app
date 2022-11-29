import React from "react";
import CategoryButton from "../components/CategoryButton";

export default {
  title: "Category Button",
  component: CategoryButton,
};

const Template = (args) => <CategoryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryName: "general",
  currentCategory: "",
  categoryChangeHandler: () => {},
};

export const Active = Template.bind({});
Active.args = {
  categoryName: "test",
  currentCategory: "test",
  categoryChangeHandler: () => {},
};
