import styled from "styled-components";

export const StyledModal = {
  Opacity: styled.div`
    width: 100%;
    height: 100vh;
  `,
  CloseWrapper: styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  `,
  Wrapper: styled.div`
    position: absolute;
    background: rgb(38, 38, 38);
    width: 30%;
    height: 70vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    color: white;
    font-family: sans-serif;
  `,
  Title: styled.h3`
    width: 100%;
    text-align: center;
    border-bottom: 0.5px solid white;
    font-size: 15px;
    margin: 0;
    line-height: 40px;
    font-weight: 200;
  `,
  Body: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
  `,
  BodyDescription: styled.p`
    font-size: 20px;
  `,
};
