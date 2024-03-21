"use client"

import { ILayout } from '@/lib/Types'
import { createContext, useState } from 'react'

// Define a type for the context value
interface MenuContextValue {
    isSidebarOpen: boolean;
    toggle: () => void;
  }
  
  // Create the context
  export const MenuContext = createContext<MenuContextValue | null>({
    isSidebarOpen : true,
    toggle : () => {}
  });
  
  export const MenuContextProvider: React.FC<ILayout> = ({ children }) => {
    const [isSidebarOpen, setSideBarOpen] = useState(true);
  
    const toggle = () => {
      setSideBarOpen((prev) => !prev);
    };
  
    return (
      <MenuContext.Provider value={{ isSidebarOpen, toggle }}>
        {children}
      </MenuContext.Provider>
    );
  };