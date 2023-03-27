import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";

const modalList = (toggleTheme) => {
  return [
    {
      title: "Настройки",
      icon: <SettingsIcon sx={{ color: "white" }} fontSize="medium" />,
    },
    {
      title: "Ваши действия",
      icon: <HistoryIcon sx={{ color: "white" }} fontSize="medium" />,
    },
    {
      title: "Сохраненное",
      icon: <BookmarkBorderIcon sx={{ color: "white" }} fontSize="medium" />,
    },
    {
      title: "Переключить тему",
      icon: <Brightness4Icon sx={{ color: "white" }} fontSize="medium" />,
      onClick: () => toggleTheme(),
    },
    {
      title: "Выход",
      icon: <LogoutIcon sx={{ color: "white" }} fontSize="medium" />,
    },
  ];
};

const sidebarList = (createNavClick, toggleModalIsOpen) => {
  return [
    {
      title: "Главная",
      href: "/",
      icon: <HomeIcon sx={{ color: "white" }} fontSize="large" />,
    },
    {
      title: "Создать пост",
      href: "/",
      icon: <AddCircleIcon sx={{ color: "white" }} fontSize="large" />,
      onClick: () => {
        createNavClick();
        toggleModalIsOpen();
      },
    },
    {
      title: "Reels",
      href: "/reels",
      icon: <VideoLibraryIcon sx={{ color: "white" }} fontSize="large" />,
    },
    {
      title: "Профиль",
      href: "/profile",
      icon: <PersonIcon sx={{ color: "white" }} fontSize="large" />,
    },
  ];
};

export { sidebarList, modalList };
