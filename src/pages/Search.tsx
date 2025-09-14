import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, Play, Heart, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const genres = [
    { name: "Pop", color: "from-pink-500 to-purple-500" },
    { name: "Hip-Hop", color: "from-orange-500 to-red-500" },
    { name: "Rock", color: "from-blue-500 to-indigo-500" },
    { name: "Jazz", color: "from-green-500 to-teal-500" },
    { name: "Electronic", color: "from-cyan-500 to-blue-500" },
    { name: "Classical", color: "from-purple-500 to-pink-500" },
    { name: "R&B", color: "from-red-500 to-orange-500" },
    { name: "Country", color: "from-yellow-500 to-orange-500" },
  ];

  const recentSearches = ["The Weeknd", "Billie Eilish", "Dua Lipa", "Harry Styles"];

  const searchResults = {
    tracks: [
      { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
      { id: 2, title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", duration: "3:14" },
      { id: 3, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23" },
    ],
    artists: [
      { id: 1, name: "The Weeknd", followers: "89.2M", verified: true },
      { id: 2, name: "Billie Eilish", followers: "64.1M", verified: true },
      { id: 3, name: "Dua Lipa", followers: "58.7M", verified: true },
    ],
    albums: [
      { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", tracks: 14 },
      { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", tracks: 11 },
      { id: 3, title: "Happier Than Ever", artist: "Billie Eilish", year: "2021", tracks: 16 },
    ],
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Search Header */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card-hover border-border/30 focus:border-primary"
            />
          </div>

          {!searchQuery && recentSearches.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Recent searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search) => (
                  <Badge
                    key={search}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {!searchQuery ? (
          // Browse All
          <div>
            <h1 className="text-2xl font-bold mb-6">Browse all</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {genres.map((genre) => (
                <Card
                  key={genre.name}
                  className={`relative h-32 cursor-pointer hover:scale-105 transition-transform overflow-hidden bg-gradient-to-br ${genre.color}`}
                >
                  <CardContent className="p-4 h-full flex items-start justify-between">
                    <h3 className="text-lg font-bold text-white">{genre.name}</h3>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 text-white" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Search Results
          <div>
            <h1 className="text-2xl font-bold mb-6">Search results for "{searchQuery}"</h1>
            
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="bg-card-hover">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tracks">Songs</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
                <TabsTrigger value="albums">Albums</TabsTrigger>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {/* Top Result */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Top result</h2>
                  <Card className="w-full max-w-sm hover:bg-card-hover transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full mb-4 flex items-center justify-center">
                        <SearchIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">The Weeknd</h3>
                      <Badge variant="secondary">Artist</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Songs */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Songs</h2>
                  <div className="space-y-2">
                    {searchResults.tracks.map((track, index) => (
                      <div
                        key={track.id}
                        className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center">
                          <div className="w-6 text-center">
                            <span className="text-sm text-muted-foreground group-hover:hidden">
                              {index + 1}
                            </span>
                            <Play className="h-4 w-4 hidden group-hover:block" />
                          </div>
                          <div className="w-12 h-12 bg-gradient-primary rounded ml-3 mr-3 flex items-center justify-center">
                            <SearchIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{track.title}</p>
                            <p className="text-sm text-muted-foreground">{track.artist}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">{track.duration}</span>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Artists */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Artists</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {searchResults.artists.map((artist) => (
                      <Card key={artist.id} className="hover:bg-card-hover transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                            <SearchIcon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="font-semibold mb-1">{artist.name}</h3>
                          <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                          {artist.verified && (
                            <Badge variant="secondary" className="mt-2">Verified</Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tracks">
                <div className="space-y-2">
                  {searchResults.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center">
                        <div className="w-6 text-center">
                          <span className="text-sm text-muted-foreground group-hover:hidden">
                            {index + 1}
                          </span>
                          <Play className="h-4 w-4 hidden group-hover:block" />
                        </div>
                        <div className="w-12 h-12 bg-gradient-primary rounded ml-3 mr-3 flex items-center justify-center">
                          <SearchIcon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{track.title}</p>
                          <p className="text-sm text-muted-foreground">{track.artist} • {track.album}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground">{track.duration}</span>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="artists">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {searchResults.artists.map((artist) => (
                    <Card key={artist.id} className="hover:bg-card-hover transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                          <SearchIcon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold mb-1">{artist.name}</h3>
                        <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                        {artist.verified && (
                          <Badge variant="secondary" className="mt-2">Verified</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="albums">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {searchResults.albums.map((album) => (
                    <Card key={album.id} className="hover:bg-card-hover transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="w-full aspect-square bg-gradient-primary rounded mb-4 flex items-center justify-center">
                          <SearchIcon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold mb-1">{album.title}</h3>
                        <p className="text-sm text-muted-foreground">{album.artist}</p>
                        <p className="text-xs text-muted-foreground">{album.year} • {album.tracks} tracks</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;