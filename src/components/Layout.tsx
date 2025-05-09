
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  // Auto collapse sidebar on mobile
  React.useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    } else {
      setSidebarCollapsed(false);
    }
  }, [isMobile]);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} />
        <main className={cn("flex-1 overflow-auto transition-all duration-200", 
          sidebarCollapsed ? "md:ml-0" : "md:ml-0", 
          className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
