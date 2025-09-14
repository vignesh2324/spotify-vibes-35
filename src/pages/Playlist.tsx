import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Play, 
  Heart, 
  MoreHorizontal, 
  Download, 
  Share,
  Clock,
  User,
  Calendar
} from "lucide-react";
import { useParams } from "react-router-dom";

const Playlist = () => {
  const { id } = useParams();

  // Mock playlist data - in real app, this would be fetched based on the id
  const playlist = {
    id: 1,
    title: "Chill Vibes",
    description: "Perfect songs for relaxation and focus",
    owner: "You",
    followers: 12,
    tracks: 45,
    duration: "2 hr 34 min",
    isPublic: true,
    createdAt: "Nov 15, 2023",
    lastModified: "2 days ago"
  };

  const tracks = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      addedAt: "5 days ago",
      isLiked: true
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      addedAt: "1 week ago",
      isLiked: false
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      addedAt: "2 weeks ago",
      isLiked: true
    },
    {
      id: 4,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3: OVER YOU",
      duration: "2:21",
      addedAt: "3 weeks ago",
      isLiked: false
    },
    {
      id: 5,
      title: "Bad Guy",
      artist: "Billie Eilish",
      album: "When We All Fall Asleep, Where Do We Go?",
      duration: "3:14",
      addedAt: "1 month ago",
      isLiked: true
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-primary/20 to-background p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            {/* Playlist Cover */}
            <div className="w-48 h-48 bg-gradient-primary rounded shadow-2xl flex items-center justify-center flex-shrink-0">
              <Play className="h-16 w-16 text-white" />
            </div>

            {/* Playlist Info */}
            <div className="flex-1 space-y-2">
              <Badge variant="secondary">Playlist</Badge>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text">
                {playlist.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {playlist.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span className="font-medium text-foreground">{playlist.owner}</span>
                </div>
                <span>•</span>
                <span>{playlist.followers} followers</span>
                <span>•</span>
                <span>{playlist.tracks} songs</span>
                <span>•</span>
                <span>{playlist.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 bg-background/95 backdrop-blur sticky top-0 z-10 border-b border-border/30">
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full w-14 h-14 p-0">
              <Play className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg">
              <Download className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg">
              <Share className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Track List */}
        <div className="p-6">
          {/* Track List Header */}
          <div className="grid grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border/30 mb-2">
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Date added
            </div>
            <div className="text-right">
              <Clock className="h-4 w-4 ml-auto" />
            </div>
          </div>

          {/* Track List */}
          <ScrollArea className="h-[600px]">
            <div className="space-y-1">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className="grid grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 px-4 py-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  {/* Track Number / Play Button */}
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground group-hover:hidden">
                      {index + 1}
                    </span>
                    <Play className="h-4 w-4 hidden group-hover:block" />
                  </div>

                  {/* Title & Artist */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded flex items-center justify-center flex-shrink-0">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{track.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                    </div>
                  </div>

                  {/* Album */}
                  <div className="flex items-center">
                    <p className="text-sm text-muted-foreground truncate">{track.album}</p>
                  </div>

                  {/* Date Added */}
                  <div className="flex items-center">
                    <p className="text-sm text-muted-foreground">{track.addedAt}</p>
                  </div>

                  {/* Duration & Actions */}
                  <div className="flex items-center justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`opacity-0 group-hover:opacity-100 ${track.isLiked ? 'text-primary opacity-100' : ''}`}
                    >
                      <Heart className={`h-4 w-4 ${track.isLiked ? 'fill-current' : ''}`} />
                    </Button>
                    <span className="text-sm text-muted-foreground min-w-[2.5rem] text-right">
                      {track.duration}
                    </span>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Playlist Info Footer */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Created {playlist.createdAt}</p>
              <p>Last modified {playlist.lastModified}</p>
              {playlist.isPublic && (
                <Badge variant="outline" className="mt-2">Public Playlist</Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Playlist;