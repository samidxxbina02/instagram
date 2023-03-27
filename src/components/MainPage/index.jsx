import React from "react";
import HeaderStories from "../HeaderStories";
import PostList from "../PostList";
import Search from "../Seach";
import { StyledMainPage } from "./styled";

const MainPage = () => {
  return (
    <StyledMainPage.Wrapper>
      <HeaderStories />
      <Search />
      <PostList />
    </StyledMainPage.Wrapper>
  );
};

export default MainPage;
