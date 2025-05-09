
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Upload, 
  Settings, 
  Database, 
  Users, 
  Network, 
  Lock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, label, active = false, onClick }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 font-normal",
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Button>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [active, setActive] = React.useState("dashboard");

  // Function to change section and dispatch custom event
  const changeSection = (section: string) => {
    setActive(section);
    
    // Dispatch custom event for Index.tsx to listen to
    const event = new CustomEvent("section-change", { detail: section });
    window.dispatchEvent(event);
  };

  return (
    <div 
      className={cn(
        "h-[calc(100vh-4rem)] bg-sidebar flex flex-col border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex-1 py-4 px-2 space-y-1">
        <Button 
          variant="ghost" 
          size="icon"
          className="mb-4 w-full flex justify-end text-sidebar-foreground hover:bg-sidebar-accent/50"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
        
        {!collapsed ? (
          <>
            <NavItem 
              icon={LayoutDashboard} 
              label="Dashboard" 
              active={active === "dashboard"} 
              onClick={() => changeSection("dashboard")}
            />
            <NavItem 
              icon={Upload} 
              label="Data Ingestion" 
              active={active === "ingestion"}
              onClick={() => changeSection("ingestion")}
            />
            <NavItem 
              icon={Settings} 
              label="Match Configuration" 
              active={active === "config"}
              onClick={() => changeSection("config")}
            />
            <NavItem 
              icon={Users} 
              label="Entity Grouping" 
              active={active === "entity"}
              onClick={() => changeSection("entity")}
            />
            <NavItem 
              icon={Database} 
              label="Explainability" 
              active={active === "explain"}
              onClick={() => changeSection("explain")}
            />
            <NavItem 
              icon={Network} 
              label="Visualization" 
              active={active === "visual"}
              onClick={() => changeSection("visual")}
            />
            <Separator className="my-4 bg-sidebar-border" />
            <NavItem 
              icon={Lock} 
              label="Security & Access" 
              active={active === "security"}
              onClick={() => changeSection("security")}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "dashboard" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("dashboard")}
              >
                <LayoutDashboard className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "ingestion" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("ingestion")}
              >
                <Upload className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "config" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("config")}
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "entity" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("entity")}
              >
                <Users className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "explain" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("explain")}
              >
                <Database className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "visual" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("visual")}
              >
                <Network className="h-5 w-5" />
              </Button>
              <Separator className="my-2 w-8 bg-sidebar-border" />
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  active === "security" && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => changeSection("security")}
              >
                <Lock className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
