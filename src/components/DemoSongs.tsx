import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Music } from 'lucide-react';
import { demoSongs, DemoSong } from '@/utils/demoSongs';
import { Lyrics } from '@/utils/lyricsService';

interface DemoSongsProps {
  onSongSelected: (lyrics: Lyrics, audioFile: { file: File; url: string }) => void;
}

export const DemoSongs = ({ onSongSelected }: DemoSongsProps) => {
  const handleDemoSelect = async (song: DemoSong) => {
    try {
      // Fetch the audio file
      const response = await fetch(song.audioUrl);
      const blob = await response.blob();
      const file = new File([blob], `${song.title}.mp3`, { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      
      // Call the callback with both lyrics and audio
      onSongSelected(song.lyrics, { file, url });
    } catch (error) {
      console.error('Error loading demo song:', error);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Music className="w-4 h-4" />
        <h3 className="font-semibold text-sm">Demo Songs</h3>
        <Badge variant="secondary">Beta</Badge>
      </div>
      
      <div className="space-y-2">
        {demoSongs.map((song) => (
          <Card key={song.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-sm">{song.title}</div>
                  <div className="text-xs text-muted-foreground">{song.artist}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {song.lyrics.lines.length} lines • {song.lyrics.syncType}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDemoSelect(song)}
                  className="ml-2"
                >
                  <PlayCircle className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground mt-2">
        💡 Demo songs include both lyrics and audio for full experience
      </div>
    </div>
  );
};
