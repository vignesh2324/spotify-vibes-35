import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play, Heart, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const recentlyPlayed = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", duration: "3:53" },
    { id: 3, title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", duration: "3:14" },
    { id: 4, title: "Someone You Loved", artist: "Lewis Capaldi", album: "Divinely Uninspired", duration: "3:02" },
  ];

  const topTracks = [
    { id: 1, title: "Watermelon Sugar", artist: "Harry Styles", plays: "1.2M" },
    { id: 2, title: "Levitating", artist: "Dua Lipa", plays: "950K" },
    { id: 3, title: "Good 4 U", artist: "Olivia Rodrigo", plays: "890K" },
    { id: 4, title: "Stay", artist: "The Kid LAROI & Justin Bieber", plays: "780K" },
  ];

  const featuredPlaylists = [
    { id: 1, title: "Today's Top Hits", description: "The most played songs right now", tracks: 50 },
    { id: 2, title: "RapCaviar", description: "New music from hip-hop's biggest stars", tracks: 65 },
    { id: 3, title: "Pop Rising", description: "The hottest new pop music", tracks: 40 },
    { id: 4, title: "Chill Hits", description: "Kick back to the best new and recent chill hits", tracks: 80 },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">Good afternoon</h1>
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="mr-2 h-4 w-4" />
            Shuffle Play
          </Button>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-card-hover hover:bg-card-hover/80 transition-colors cursor-pointer">
            <CardContent className="flex items-center p-4">
              <div className="w-12 h-12 bg-gradient-primary rounded flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Liked Songs</h3>
                <p className="text-sm text-muted-foreground">142 songs</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card-hover hover:bg-card-hover/80 transition-colors cursor-pointer">
            <CardContent className="flex items-center p-4">
              <div className="w-12 h-12 bg-gradient-secondary rounded flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Recently Played</h3>
                <p className="text-sm text-muted-foreground">Jump back in</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-hover hover:bg-card-hover/80 transition-colors cursor-pointer">
            <CardContent className="flex items-center p-4">
              <div className="w-12 h-12 bg-gradient-accent rounded flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Discover Weekly</h3>
                <p className="text-sm text-muted-foreground">Your weekly mix</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recently Played */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recently Played
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-2">
                  {recentlyPlayed.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{track.title}</p>
                        <p className="text-sm text-muted-foreground">{track.artist}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">{track.duration}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Top Tracks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Your Top Tracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-2">
                  {topTracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span className="w-6 text-sm text-muted-foreground">{index + 1}</span>
                        <div className="ml-3">
                          <p className="font-medium">{track.title}</p>
                          <p className="text-sm text-muted-foreground">{track.artist}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{track.plays}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Featured Playlists */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredPlaylists.map((playlist) => (
              <Card key={playlist.id} className="hover:bg-card-hover transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-primary rounded mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{playlist.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{playlist.description}</p>
                  <p className="text-xs text-muted-foreground">{playlist.tracks} tracks</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;