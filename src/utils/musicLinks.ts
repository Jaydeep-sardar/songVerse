// External music service links
export interface MusicLink {
  platform: string;
  url: string;
  icon: string;
}

export const getMusicLinks = (artist: string, title: string): MusicLink[] => {
  const query = encodeURIComponent(`${artist} ${title}`);
  
  return [
    {
      platform: "YouTube",
      url: `https://www.youtube.com/results?search_query=${query}`,
      icon: "youtube"
    },
    {
      platform: "Spotify",
      url: `https://open.spotify.com/search/${query}`,
      icon: "spotify"
    },
    {
      platform: "Apple Music",
      url: `https://music.apple.com/search?term=${query}`,
      icon: "apple"
    }
  ];
};
