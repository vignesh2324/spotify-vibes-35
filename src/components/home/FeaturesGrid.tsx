import { Music, Search, Headphones, Smartphone, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Music,
    title: "Stream & Play",
    description: "High-quality music streaming with seamless playback controls and queue management."
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your favorite songs, artists, and albums instantly with our intelligent search."
  },
  {
    icon: Heart,
    title: "Personal Library",
    description: "Create and manage playlists, save your favorite tracks, and build your music collection."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Enjoy your music on any device - desktop, tablet, or mobile with full functionality."
  },
  {
    icon: Headphones,
    title: "Audio Quality",
    description: "Experience crystal-clear audio with support for high-quality streaming formats."
  },
  {
    icon: Zap,
    title: "Fast & Smooth",
    description: "Lightning-fast performance with smooth animations and instant track loading."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Soundwave</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful features designed to enhance your music listening experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/30">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}