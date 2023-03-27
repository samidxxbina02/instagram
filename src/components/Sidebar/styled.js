import styled from "styled-components";

export const StyledSidebar = {
  Wrapper: styled.div`
    position: fixed;
    border-right: 1px solid gray;
    z-index: 999;
    height: 100vh;
    transition: padding 0.8s;
    padding: ${(props) => (props.isToggle ? "50px 20px" : "50px 30px")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div:nth-child(1) {
      height: 20vh;
    }
    > div:nth-child(2) {
      height: 60vh;
    }
    > div:nth-child(3) {
      height: 20vh;
    }
  `,
  Logo: styled.span``,
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ListItem: styled.li`
    padding: 8px 25px;
    border-radius: 25px;
    :hover {
      background-color: rgb(38, 38, 38);
    }
  `,
  ListItemIcon: styled.span``,
  ListItemTitle: styled.span``,
  ListItemWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
  `,
  Header: styled.div``,
  Body: styled.div``,
  Footer: styled.div``,
  More: styled.div`
    position: relative;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 25px;
  `,
  MoreText: styled.span`
    display: ${(props) => (props.isToggle ? "none" : "inline")};
    font-size: 20px;
  `,
};

export const StyledMoreModal = {
  Wrapper: styled.div`
    position: absolute;
    border-radius: 8px;
    bottom: 35px;
    z-index: 1000;
    background-color: rgb(38, 38, 38);
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  ListItem: styled.li`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 20px;
    padding: 15px 20px;

    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  `,
  ListItemTitle: styled.div`
    white-space: nowrap;
  `,
  ListItemIcon: styled.div``,
};
