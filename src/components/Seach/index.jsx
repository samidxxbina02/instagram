import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/Store/StoreContext";
import Button from "../UI/Button/Button";
import { StyledSearch } from "./styled";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { getPosts } = useContext(StoreContext)

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    getPosts(searchText)
  }

  return (
    <StyledSearch.Wrapper>
      <StyledSearch.Input
        placeholder="Ищи сука"
        onChange={handleChange}
        value={searchText}
      />
      <Button onClick={handleSearchClick}>Искать</Button>
    </StyledSearch.Wrapper>
  );
};

export default Search;
