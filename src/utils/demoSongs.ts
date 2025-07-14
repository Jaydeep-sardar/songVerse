// Demo songs with royalty-free audio
export interface DemoSong {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  lyrics: {
    syncType: string;
    lines: Array<{
      startTimeMs: number;
      endTimeMs?: number;
      text: string;
    }>;
  };
}

export const demoSongs: DemoSong[] = [
  {
    id: "demo-1",
    title: "Chemistry Elements",
    artist: "Demo Artist",
    audioUrl: "/demo.mp3",
    lyrics: {
      syncType: 'line-synced',
      lines: [
        { startTimeMs: 0, endTimeMs: 2000, text: "Welcome to the periodic table" },
        { startTimeMs: 2000, endTimeMs: 4000, text: "Where elements come alive" },
        { startTimeMs: 4000, endTimeMs: 6000, text: "Hydrogen starts the journey" },
        { startTimeMs: 6000, endTimeMs: 8000, text: "Helium makes us fly" },
        { startTimeMs: 8000, endTimeMs: 10000, text: "Carbon builds our world" },
        { startTimeMs: 10000, endTimeMs: 12000, text: "Oxygen helps us breathe" },
        { startTimeMs: 12000, endTimeMs: 14000, text: "In this chemical symphony" },
        { startTimeMs: 14000, endTimeMs: 16000, text: "Science and music weave" },
      ]
    }
  },
  {
    id: "demo-2",
    title: "Animated Lyrics",
    artist: "SongVerse",
    audioUrl: "/demo.mp3",
    lyrics: {
      syncType: 'line-synced',
      lines: [
        { startTimeMs: 0, endTimeMs: 2000, text: "Watch the words dance" },
        { startTimeMs: 2000, endTimeMs: 4000, text: "Like atoms in motion" },
        { startTimeMs: 4000, endTimeMs: 6000, text: "Every syllable glows" },
        { startTimeMs: 6000, endTimeMs: 8000, text: "With chemical devotion" },
        { startTimeMs: 8000, endTimeMs: 10000, text: "From verse to chorus" },
        { startTimeMs: 10000, endTimeMs: 12000, text: "The elements align" },
        { startTimeMs: 12000, endTimeMs: 14000, text: "Creating visual poetry" },
        { startTimeMs: 14000, endTimeMs: 16000, text: "Where music meets design" },
      ]
    }
  },
  {
    id: "demo-3",
    title: "Beta Version",
    artist: "Jaydeep",
    audioUrl: "/demo.mp3",
    lyrics: {
      syncType: 'line-synced',
      lines: [
        { startTimeMs: 0, endTimeMs: 2000, text: "This is just the beginning" },
        { startTimeMs: 2000, endTimeMs: 4000, text: "More features coming soon" },
        { startTimeMs: 4000, endTimeMs: 6000, text: "Upload your own music" },
        { startTimeMs: 6000, endTimeMs: 8000, text: "Customize every tune" },
        { startTimeMs: 8000, endTimeMs: 10000, text: "Share your creations" },
        { startTimeMs: 10000, endTimeMs: 12000, text: "With the world around" },
        { startTimeMs: 12000, endTimeMs: 14000, text: "SongVerse is evolving" },
        { startTimeMs: 14000, endTimeMs: 16000, text: "New possibilities found" },
      ]
    }
  }
];
