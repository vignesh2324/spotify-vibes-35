import { Home, Search, Library, Heart, Plus, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Search", icon: Search, href: "/search" },
  { name: "Your Library", icon: Library, href: "/library" },
];

const playlists = [
  "Liked Songs",
  "Recently Played",
  "My Playlist #1",
  "Chill Vibes",
  "Workout Mix",
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:flex flex-col w-64 bg-background-subtle border-r border-border/30">
      <div className="p-4 space-y-4">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={`w-full justify-start hover:bg-secondary/50 ${
                location.pathname === item.href ? 'bg-secondary text-primary' : ''
              }`}
              asChild
            >
              <Link to={item.href}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
        
        <Separator className="bg-border/30" />
        
        <div className="space-y-2">
          <div className="flex items-center justify-between px-3">
            <span className="text-sm font-medium text-muted-foreground">Playlists</span>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="h-64">
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-secondary/50 text-primary"
                asChild
              >
                <Link to="/playlist/liked">
                  <Heart className="mr-3 h-4 w-4" />
                  Liked Songs
                </Link>
              </Button>
              {playlists.slice(1).map((playlist, index) => (
                <Button
                  key={playlist}
                  variant="ghost"
                  className="w-full justify-start hover:bg-secondary/50 text-muted-foreground"
                  asChild
                >
                  <Link to={`/playlist/${index + 2}`}>
                    <Music className="mr-3 h-4 w-4" />
                    {playlist}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}