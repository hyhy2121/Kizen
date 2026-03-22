export interface SidebarItem {
  id: number;
  title: string;
  screen: string;
}

export const dataSidebar: SidebarItem[] = [
  { id: 0, title: "My day", screen: "day" },
  { id: 1, title: "Tasks", screen: "tasks" },
  { id: 2, title: "Schedule", screen: "shedule" },
  { id: 3, title: "Focuse", screen: "focuse" },
  { id: 4, title: "Аchievements", screen: "achievements" },
];
