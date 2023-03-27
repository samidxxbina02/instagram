import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { StyledSidebar, StyledMoreModal } from "./styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import { sidebarList, modalList } from "./heplers";

import "./SidebarStyle.css";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const linkStyle = { color: "white", textDecoration: "none" };

const Sidebar = () => {
  const modalRef = useRef();
  const { toggleAddModalIsOpen } = useContext(ModalContext);
  const { toggleTheme } = useContext(ThemeContext);

  const [isToggle, setIsToggle] = useState(false);
  const [moreShow, setMoreShow] = useState(false);

  const createNavClick = () => {
    setIsToggle((prev) => !prev);
  };

  const moreShowClick = () => {
    setMoreShow((prev) => !prev);
  };

  useOnClickOutside(modalRef, moreShowClick);

  return (
    <StyledSidebar.Wrapper isToggle={isToggle}>
      <StyledSidebar.Header>
        {!isToggle ? (
          <StyledSidebar.Logo className="logo">Mygram</StyledSidebar.Logo>
        ) : (
          <InstagramIcon sx={{ color: "white" }} fontSize="large" />
        )}
      </StyledSidebar.Header>

      <StyledSidebar.Body>
        <StyledSidebar.List>
          {sidebarList(createNavClick, toggleAddModalIsOpen)?.map((nav, idx) => (
            <StyledSidebar.ListItem onClick={nav?.onClick} key={idx}>
              <Link style={linkStyle} to={nav.href}>
                <StyledSidebar.ListItemWrapper>
                  <StyledSidebar.ListItemIcon>
                    {nav.icon}
                  </StyledSidebar.ListItemIcon>
                  {!isToggle && (
                    <StyledSidebar.ListItemTitle>
                      {nav.title}
                    </StyledSidebar.ListItemTitle>
                  )}
                </StyledSidebar.ListItemWrapper>
              </Link>
            </StyledSidebar.ListItem>
          ))}
        </StyledSidebar.List>
      </StyledSidebar.Body>
      <StyledSidebar.Footer>
        <StyledSidebar.More onClick={moreShowClick}>
          <MenuIcon sx={{ color: "white" }} fontSize="large" />
          <StyledSidebar.MoreText isToggle={isToggle}>
            Ещё
          </StyledSidebar.MoreText>

          {moreShow && (
            <StyledMoreModal.Wrapper ref={modalRef}>
              <StyledMoreModal.List>
                {modalList(toggleTheme)?.map((moreItem, idx) => (
                  <StyledMoreModal.ListItem
                    onClick={moreItem.onClick}
                    key={idx}
                  >
                    <StyledMoreModal.ListItemTitle>
                      {moreItem.title}
                    </StyledMoreModal.ListItemTitle>
                    <StyledMoreModal.ListItemIcon>
                      {moreItem.icon}
                    </StyledMoreModal.ListItemIcon>
                  </StyledMoreModal.ListItem>
                ))}
              </StyledMoreModal.List>
            </StyledMoreModal.Wrapper>
          )}
        </StyledSidebar.More>
      </StyledSidebar.Footer>
    </StyledSidebar.Wrapper>
  );
};

export default Sidebar;
