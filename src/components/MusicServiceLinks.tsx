import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Music } from 'lucide-react';
import { getMusicLinks } from '@/utils/musicLinks';

interface MusicServiceLinksProps {
  artist?: string;
  title?: string;
}

export const MusicServiceLinks = ({ artist, title }: MusicServiceLinksProps) => {
  if (!artist || !title) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Music className="w-4 h-4" />
            Find Music
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Search for a song to see streaming platform links
          </p>
        </CardContent>
      </Card>
    );
  }

  const links = getMusicLinks(artist, title);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <Music className="w-4 h-4" />
          Listen on Streaming Platforms
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm font-medium mb-2">
          {artist} - {title}
        </div>
        <div className="space-y-1">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="w-full justify-start"
              onClick={() => window.open(link.url, '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              {link.platform}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          💡 Find the song on these platforms, then use "Add Mp3" to upload your own audio file
        </p>
      </CardContent>
    </Card>
  );
};
