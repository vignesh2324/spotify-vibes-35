import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function PlayerBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-card/95 backdrop-blur-md border-t border-border/30 p-4 z-40">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Current Track Info */}
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <Play className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 hidden sm:block">
            <h4 className="font-medium text-foreground truncate">Select a song</h4>
            <p className="text-sm text-muted-foreground truncate">Artist name</p>
          </div>
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-white rounded-full w-10 h-10">
              <Play className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 text-xs text-muted-foreground w-full">
            <span>0:00</span>
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="flex-1"
            />
            <span>3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="hidden lg:flex items-center space-x-2 justify-end flex-1">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
}