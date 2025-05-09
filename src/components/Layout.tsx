
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const isMobile = useIsMobile();
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
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className={cn("flex-1 overflow-auto transition-all duration-200", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
