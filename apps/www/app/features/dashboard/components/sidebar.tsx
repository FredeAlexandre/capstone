import { useState } from 'react';
import { 
  LayoutDashboard, 
  Hexagon, 
  BarChart3, 
  Calendar, 
  Settings, 
  Users, 
  FileText, 
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { cn } from "@captsone/ui";
import { Button } from '@captsone/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@captsone/ui/tooltip';
import { Link } from '@tanstack/react-router';

interface SidebarProps {
  open: boolean;
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  expanded?: boolean;
  children?: { label: string; href: string }[];
  href: string;
}

const NavItem = ({ 
  icon: Icon, 
  label, 
  active, 
  expanded, 
  children,
  href
}: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  return (
    <div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={active ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "w-full justify-start gap-2 mb-1",
                active && "bg-secondary font-medium"
              )}
              asChild={!hasChildren}
              onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
              {hasChildren ? (<><Icon className={cn("h-5 w-5", active && "text-amber-500")} />
                {expanded && (
                  <>
                    <span className="grow text-left">{label}</span>
                    {hasChildren && (
                      <ChevronRight 
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform", 
                        isOpen && "rotate-90"
                      )} 
                    />
                  )}
                </>
              )}</>) : 
              <Link to={href}><Icon className={cn("h-5 w-5", active && "text-amber-500")} />
              {expanded && (
                <>
                  <span className="grow text-left">{label}</span>
                  {hasChildren && (
                    <ChevronRight 
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform", 
                      isOpen && "rotate-90"
                    )} 
                  />
                )}
              </>
            )}
                
            </Link>}
            </Button>
          </TooltipTrigger>
          {!expanded && (
            <TooltipContent side="right" className="border bg-popover text-popover-foreground">
              {label}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      {expanded && isOpen && hasChildren && (
        <div className="ml-6 mb-1 mt-1 space-y-1">
          {children?.map((child, idx) => (
            <Button
              key={idx}
              variant="ghost"
              size="sm"
              className="w-full justify-start pl-2 text-muted-foreground hover:text-foreground text-sm"
              asChild
            >
              <Link to={child.href}>
                {child.label}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ open }: SidebarProps) => {
  const mainNavItems = [
    { 
      icon: LayoutDashboard, 
      label: "Overview", 
      active: true,
      href: "/dashboard"
    },
    { 
      icon: Hexagon, 
      label: "Hives", 
      children: [
        { label: "All Hives", href: "/all-hives" },
        { label: "Add New Hive", href: "/add-new-hive" }
      ],
      href: "#"
    },
    { 
      icon: BarChart3, 
      label: "Analytics",
      href: "/analytics" 
    },
    { 
      icon: AlertTriangle, 
      label: "Alerts",
      href: "/alerts" 
    },
    { 
      icon: Calendar, 
      label: "Schedule",
      href: "/schedule" 
    },
    { 
      icon: FileText, 
      label: "Reports",
      href: "/reports" 
    }
  ];
  
  const bottomNavItems = [
    { icon: Users, label: "Team", href: "/team"  },
    { icon: Settings, label: "Settings", href: "/settings" }
  ];

  return (
    <aside
      className={cn(
        "border-r bg-card pb-10 transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-16"
      )}
    >
      <div className="space-y-4 py-4 h-[calc(100vh-4rem)] flex flex-col">
        <div className="px-3 py-2">
          {open && <h2 className="text-lg font-semibold mb-2 px-4">Dashboard</h2>}
          <div className="space-y-1">
            {mainNavItems.map((item, idx) => (
              <NavItem 
                key={idx} 
                icon={item.icon} 
                label={item.label} 
                active={item.active} 
                href={item.href}
                expanded={open}
                children={item.children} 
              />
            ))}
          </div>
        </div>
        <div className="mt-auto px-3 py-2">
          {open && <h2 className="text-sm font-medium mb-2 px-4 text-muted-foreground">Settings</h2>}
          <div className="space-y-1">
            {bottomNavItems.map((item, idx) => (
              <NavItem key={idx} icon={item.icon} label={item.label} href={item.href} expanded={open} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;