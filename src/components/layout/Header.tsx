import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Soundwave
        </h1>
      </div>
      
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search songs, artists, albums..."
            className="pl-10 bg-secondary/50 border-border/30 focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Login with Spotify
        </Button>
        <Button variant="ghost" size="sm">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}