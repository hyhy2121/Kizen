import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Pomodoro } from "./features/pomodoro/Pomodoro";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentScreen, setCurrentScreen] = useState("focuse");

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    setIsSidebarOpen(false);
  };

  return (
    <div className="main_layout">
      <button onClick={() => setIsSidebarOpen(true)}>open</button>
      <div className="side_bar">
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
          isOpen={isSidebarOpen}
          onNavigate={handleNavigate}
        />
      </div>
      <main className="content">
        {currentScreen === "focuse" && (
          <section className="pomodoro">
            <Pomodoro />
          </section>
        )}
        {currentScreen === "tasks" && <div>Todo</div>}
        {currentScreen === "schedule" && <div>Calendar</div>}
      </main>
    </div>
  );
}
