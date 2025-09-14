import { Play, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-music.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <Headphones className="mx-auto h-16 w-16 text-primary mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Soundwave
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience music like never before. Stream, discover, and enjoy your favorite tracks with our elegant music player.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-white px-8 py-6 text-lg rounded-xl">
            <Play className="mr-2 h-5 w-5" />
            Connect Spotify
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-xl border-primary/30 hover:bg-primary/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}