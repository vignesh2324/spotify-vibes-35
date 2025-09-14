import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Grid3X3, 
  List, 
  SortAsc, 
  Play, 
  Heart, 
  Music, 
  Clock,
  User,
  Disc3
} from "lucide-react";
import { useState } from "react";

const Library = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const playlists = [
    { 
      id: 1, 
      title: "Liked Songs", 
      type: "playlist", 
      tracks: 142, 
      creator: "You", 
      lastPlayed: "2 days ago",
      pinned: true 
    },
    { 
      id: 2, 
      title: "My Playlist #1", 
      type: "playlist", 
      tracks: 28, 
      creator: "You", 
      lastPlayed: "1 week ago",
      pinned: false 
    },
    { 
      id: 3, 
      title: "Chill Vibes", 
      type: "playlist", 
      tracks: 45, 
      creator: "You", 
      lastPlayed: "3 days ago",
      pinned: true 
    },
    { 
      id: 4, 
      title: "Workout Mix", 
      type: "playlist", 
      tracks: 32, 
      creator: "You", 
      lastPlayed: "1 day ago",
      pinned: false 
    },
  ];

  const followedArtists = [
    { id: 1, name: "The Weeknd", followers: "89.2M", following: true },
    { id: 2, name: "Billie Eilish", followers: "64.1M", following: true },
    { id: 3, name: "Dua Lipa", followers: "58.7M", following: true },
    { id: 4, name: "Harry Styles", followers: "45.3M", following: true },
  ];

  const savedAlbums = [
    { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", tracks: 14 },
    { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", tracks: 11 },
    { id: 3, title: "Fine Line", artist: "Harry Styles", year: "2019", tracks: 12 },
    { id: 4, title: "Happier Than Ever", artist: "Billie Eilish", year: "2021", tracks: 16 },
  ];

  const recentlyPlayed = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", playedAt: "2 hours ago" },
    { id: 2, title: "Levitating", artist: "Dua Lipa", playedAt: "5 hours ago" },
    { id: 3, title: "Good 4 U", artist: "Olivia Rodrigo", playedAt: "1 day ago" },
    { id: 4, title: "Stay", artist: "The Kid LAROI, Justin Bieber", playedAt: "2 days ago" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "playlist": return <Music className="h-5 w-5" />;
      case "artist": return <User className="h-5 w-5" />;
      case "album": return <Disc3 className="h-5 w-5" />;
      default: return <Music className="h-5 w-5" />;
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">Your Library</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Recently played
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search in Your Library"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card-hover border-border/30 focus:border-primary"
          />
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-card-hover">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="albums">Albums</TabsTrigger>
            <TabsTrigger value="recent">Recently Played</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              {/* Quick Access - Pinned Items */}
              <div>
                <h2 className="text-xl font-bold mb-4">Pinned</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {playlists.filter(p => p.pinned).map((playlist) => (
                    <Card key={playlist.id} className="bg-card-hover hover:bg-card-hover/80 transition-colors cursor-pointer">
                      <CardContent className="flex items-center p-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded flex items-center justify-center mr-4">
                          {playlist.title === "Liked Songs" ? (
                            <Heart className="h-6 w-6 text-white fill-white" />
                          ) : (
                            <Music className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{playlist.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {playlist.tracks} songs • {playlist.lastPlayed}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                          <Play className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Items */}
              <div>
                <h2 className="text-xl font-bold mb-4">All</h2>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {playlists.map((playlist) => (
                      <Card key={playlist.id} className="hover:bg-card-hover transition-colors cursor-pointer group">
                        <CardContent className="p-4">
                          <div className="w-full aspect-square bg-gradient-primary rounded mb-4 flex items-center justify-center relative">
                            {playlist.title === "Liked Songs" ? (
                              <Heart className="h-8 w-8 text-white fill-white" />
                            ) : (
                              <Music className="h-8 w-8 text-white" />
                            )}
                            <Button 
                              size="sm" 
                              className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90 rounded-full w-8 h-8 p-0"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                          <h3 className="font-semibold mb-1">{playlist.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {playlist.tracks} songs
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {playlists.map((playlist) => (
                      <div
                        key={playlist.id}
                        className="flex items-center justify-between p-3 rounded hover:bg-secondary/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-primary rounded mr-4 flex items-center justify-center">
                            {playlist.title === "Liked Songs" ? (
                              <Heart className="h-5 w-5 text-white fill-white" />
                            ) : (
                              <Music className="h-5 w-5 text-white" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{playlist.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Playlist • {playlist.creator} • {playlist.tracks} songs
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{playlist.lastPlayed}</span>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="playlists">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {playlists.map((playlist) => (
                <Card key={playlist.id} className="hover:bg-card-hover transition-colors cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="w-full aspect-square bg-gradient-primary rounded mb-4 flex items-center justify-center relative">
                      {playlist.title === "Liked Songs" ? (
                        <Heart className="h-8 w-8 text-white fill-white" />
                      ) : (
                        <Music className="h-8 w-8 text-white" />
                      )}
                      <Button 
                        size="sm" 
                        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90 rounded-full w-8 h-8 p-0"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold mb-1">{playlist.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {playlist.tracks} songs
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artists">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {followedArtists.map((artist) => (
                <Card key={artist.id} className="hover:bg-card-hover transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                    <Badge variant="secondary" className="mt-2">Following</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="albums">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {savedAlbums.map((album) => (
                <Card key={album.id} className="hover:bg-card-hover transition-colors cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="w-full aspect-square bg-gradient-primary rounded mb-4 flex items-center justify-center relative">
                      <Disc3 className="h-8 w-8 text-white" />
                      <Button 
                        size="sm" 
                        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90 rounded-full w-8 h-8 p-0"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold mb-1">{album.title}</h3>
                    <p className="text-sm text-muted-foreground">{album.artist}</p>
                    <p className="text-xs text-muted-foreground">{album.year} • {album.tracks} tracks</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="space-y-2">
              {recentlyPlayed.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3 rounded hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded mr-4 flex items-center justify-center">
                      <Music className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{track.title}</h3>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{track.playedAt}</span>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Library;