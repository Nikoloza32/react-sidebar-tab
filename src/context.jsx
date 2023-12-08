import { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSlidebarOpen, setIsSlidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSlidebar = () => {
    setIsSlidebarOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeSlidebar = () => {
    setIsSlidebarOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSlidebarOpen,
        isModalOpen,
        openModal,
        openSlidebar,
        closeModal,
        closeSlidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
