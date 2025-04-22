import { useState } from 'react';
import { Menu, Bell, Search, User, ChevronDown } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { Button } from '@captsone/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@captsone/ui/dropdown-menu';
import { HoneycombLogo } from './honeycomb-logo';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <div className="flex items-center">
          <HoneycombLogo className="h-8 w-8 text-amber-500" />
          <span className="ml-2 text-xl font-bold hidden sm:inline-block">
            BeehiveOS
          </span>
        </div>

        <div className="ml-auto flex items-center space-x-1 sm:space-x-2">
          <div className="hidden md:flex relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 h-9 w-[180px] lg:w-[280px] bg-muted rounded-md text-sm"
            />
          </div>

          <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500" />
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[320px]">
              <div className="flex items-center justify-between py-2 px-4 border-b">
                <span className="font-semibold">Notifications</span>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground">
                  Mark all as read
                </Button>
              </div>
              <div className="py-2 px-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-xs">H1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Hive #1 temperature alert</p>
                      <p className="text-xs text-muted-foreground">Temperature above optimal range</p>
                      <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs">H3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Hive #3 inspection due</p>
                      <p className="text-xs text-muted-foreground">Scheduled inspection today</p>
                      <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-center cursor-pointer">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium">Alex Kim</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center p-2 gap-2">
                <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Alex Kim</p>
                  <p className="text-xs text-muted-foreground">alex@beehive.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;