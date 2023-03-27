import styled from "styled-components";

export const StyledPostList = {
  Wrapper: styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;

    @media screen {
      
    }
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  Avatar: styled.img``,
  AvatarWrapper: styled.div`
    background-color: gray;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  Nickname: styled.span``,
  Description: styled.p``,
  ListItem: styled.li``,
  MoreContainer: styled.div``

  
};
