import React, { useState } from "react";
import { dataSidebar } from "./data/data";
import s from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onNavigate: (screen: string) => void;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onNavigate, onClose }: SidebarProps) => {
  return (
    <div className={isOpen === true ? s.sidebar_open : s.sidebar_closed}>
      <nav>
        <ul>
          {dataSidebar.map((item) => (
            <li key={item.id}>
              <button onClick={() => onNavigate(item.screen)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={onClose}>close</button>
    </div>
  );
};
