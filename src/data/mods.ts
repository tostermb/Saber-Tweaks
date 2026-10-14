import type { Mod, Category } from '../types';

// Mod data organized by category and subcategory
export const modCategories: Category[] = [
  {
    id: 'useful-recommended',
    name: 'Useful/Recommended',
    expanded: true,
    subcategories: [
      {
        id: 'useful-recommended-mods',
        name: 'Useful/Recommended Mods',
        mods: [
          {
            id: 'better-song-search',
            name: 'Better Song Search',
            description: 'Advanced song search and filtering with custom playlists, ratings, and more.',
            image: 'https://cdn.mods.bsquest.xyz/images/better-song-search.png',
            category: 'Mods',
            subcategory: 'Useful/Recommended',
            downloadUrl: 'https://github.com/Assistant/BetterSongSearch/releases/latest/download/BetterSongSearch.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'beatleader',
            name: 'BeatLeader',
            description: 'Competitive leaderboard system with replays, rankings, and tournaments.',
            image: 'https://cdn.mods.bsquest.xyz/images/beatleader.png',
            category: 'Mods',
            subcategory: 'Useful/Recommended',
            downloadUrl: 'https://github.com/BeatLeader/BeatLeader/releases/latest/download/BeatLeader.qmod',
            version: '1.0.0',
            author: 'BeatLeader Team'
          },
          {
            id: 'song-browser',
            name: 'Song Browser',
            description: 'Enhanced in-game song browser with filtering, sorting, and favorites.',
            image: 'https://cdn.mods.bsquest.xyz/images/song-browser.png',
            category: 'Mods',
            subcategory: 'Useful/Recommended',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/SongBrowser/releases/latest/download/SongBrowser.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'playlist-editor',
            name: 'Playlist Editor',
            description: 'Create and edit playlists directly in-game with drag-and-drop support.',
            image: 'https://cdn.mods.bsquest.xyz/images/playlist-editor.png',
            category: 'Mods',
            subcategory: 'Useful/Recommended',
            downloadUrl: 'https://github.com/Assistant/PlaylistEditor/releases/latest/download/PlaylistEditor.qmod',
            version: '1.0.0',
            author: 'Assistant'
          }
        ]
      }
    ]
  },
  {
    id: 'core',
    name: 'Core',
    expanded: true,
    subcategories: [
      {
        id: 'core-mods',
        name: 'Core Mods',
        mods: [
          {
            id: 'mapping-extensions',
            name: 'Mapping Extensions',
            description: 'Essential mod for playing maps with custom mapping features like noodle extensions, chroma, etc.',
            image: 'https://cdn.mods.bsquest.xyz/images/mapping-extensions.png',
            category: 'Mods',
            subcategory: 'Core',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/MappingExtensions/releases/latest/download/MappingExtensions.qmod',
            isCore: true,
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'chroma',
            name: 'Chroma',
            description: 'Advanced lighting and color system for custom maps with RGB lighting support.',
            image: 'https://cdn.mods.bsquest.xyz/images/chroma.png',
            category: 'Mods',
            subcategory: 'Core',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/Chroma/releases/latest/download/Chroma.qmod',
            isCore: true,
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'noodle-extensions',
            name: 'Noodle Extensions',
            description: 'Enables advanced mapping features like rotation, scaling, and positioning of notes and obstacles.',
            image: 'https://cdn.mods.bsquest.xyz/images/noodle-extensions.png',
            category: 'Mods',
            subcategory: 'Core',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/NoodleExtensions/releases/latest/download/NoodleExtensions.qmod',
            isCore: true,
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'bmbf-core',
            name: 'BMBF Core',
            description: 'Core modding framework required for most Beat Saber mods on Quest.',
            image: 'https://cdn.mods.bsquest.xyz/images/bmbf-core.png',
            category: 'Mods',
            subcategory: 'Core',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/BMBF/releases/latest/download/BMBF.qmod',
            isCore: true,
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'songcore',
            name: 'SongCore',
            description: 'Core library for custom song loading and management.',
            image: 'https://cdn.mods.bsquest.xyz/images/songcore.png',
            category: 'Mods',
            subcategory: 'Core',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/SongCore/releases/latest/download/SongCore.qmod',
            isCore: true,
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          }
        ]
      }
    ]
  },
  {
    id: 'customization',
    name: 'Customization',
    expanded: true,
    subcategories: [
      {
        id: 'customization-mods',
        name: 'Customization Mods',
        mods: [
          {
            id: 'custom-models',
            name: 'Custom Models',
            description: 'Allows loading custom 3D models for sabers, walls, bombs, and more.',
            image: 'https://cdn.mods.bsquest.xyz/images/custom-models.png',
            category: 'Mods',
            subcategory: 'Customization',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/CustomModels/releases/latest/download/CustomModels.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'qosmetics',
            name: 'Qosmetics',
            description: 'Advanced customization for sabers, trails, explosions, and UI elements with preview support.',
            image: 'https://cdn.mods.bsquest.xyz/images/qosmetics.png',
            category: 'Mods',
            subcategory: 'Customization',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/Qosmetics/releases/latest/download/Qosmetics.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'saber-tailor',
            name: 'Saber Tailor',
            description: 'Create custom saber models directly in-game with an intuitive editor.',
            image: 'https://cdn.mods.bsquest.xyz/images/saber-tailor.png',
            category: 'Mods',
            subcategory: 'Customization',
            downloadUrl: 'https://github.com/Assistant/SaberTailor/releases/latest/download/SaberTailor.qmod',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'avatar-customizer',
            name: 'Avatar Customizer',
            description: 'Customize your in-game avatar with custom models, colors, and accessories.',
            image: 'https://cdn.mods.bsquest.xyz/images/avatar-customizer.png',
            category: 'Mods',
            subcategory: 'Customization',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/AvatarCustomizer/releases/latest/download/AvatarCustomizer.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          }
        ]
      }
    ]
  },
  {
    id: 'ui',
    name: 'UI',
    expanded: true,
    subcategories: [
      {
        id: 'ui-mods',
        name: 'UI Mods',
        mods: [
          {
            id: 'qounters-plus',
            name: 'Qounters++',
            description: 'Customizable in-game counters for score, accuracy, combo, and more with position/size control.',
            image: 'https://cdn.mods.bsquest.xyz/images/qounters-plus.png',
            category: 'Mods',
            subcategory: 'UI',
            downloadUrl: 'https://github.com/Assistant/QountersPlus/releases/latest/download/QountersPlus.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'hit-scores-visualizer',
            name: 'Hit Scores Visualizer',
            description: 'Shows hit scores as floating numbers with customizable appearance and animations.',
            image: 'https://cdn.mods.bsquest.xyz/images/hit-scores-visualizer.png',
            category: 'Mods',
            subcategory: 'UI',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/HitScoresVisualizer/releases/latest/download/HitScoresVisualizer.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'hud-modifier',
            name: 'HUD Modifier',
            description: 'Move, resize, and hide HUD elements like health bar, combo, and score.',
            image: 'https://cdn.mods.bsquest.xyz/images/hud-modifier.png',
            category: 'Mods',
            subcategory: 'UI',
            downloadUrl: 'https://github.com/Assistant/HUDModifier/releases/latest/download/HUDModifier.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'menu-songs',
            name: 'Menu Songs',
            description: 'Play custom songs in the main menu with full playback controls.',
            image: 'https://cdn.mods.bsquest.xyz/images/menu-songs.png',
            category: 'Mods',
            subcategory: 'UI',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/MenuSongs/releases/latest/download/MenuSongs.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          }
        ]
      }
    ]
  },
  {
    id: 'fun',
    name: 'Fun',
    expanded: true,
    subcategories: [
      {
        id: 'fun-mods',
        name: 'Fun Mods',
        mods: [
          {
            id: 'third-person',
            name: 'Third Person Mod',
            description: 'Play Beat Saber in third-person view with customizable camera position and rotation.',
            image: 'https://cdn.mods.bsquest.xyz/images/third-person.png',
            category: 'Mods',
            subcategory: 'Fun',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/ThirdPerson/releases/latest/download/ThirdPerson.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'tricksaber',
            name: 'TrickSaber',
            description: 'Perform tricks with your sabers - throws, spins, and flips with physics simulation.',
            image: 'https://cdn.mods.bsquest.xyz/images/tricksaber.png',
            category: 'Mods',
            subcategory: 'Fun',
            downloadUrl: 'https://github.com/Assistant/TrickSaber/releases/latest/download/TrickSaber.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'christmas',
            name: 'Christmas Mod',
            description: 'Festive Christmas theme with snow, decorations, and holiday-themed sabers.',
            image: 'https://cdn.mods.bsquest.xyz/images/christmas.png',
            category: 'Mods',
            subcategory: 'Fun',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/Christmas/releases/latest/download/Christmas.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'party-mode',
            name: 'Party Mode',
            description: 'Multiplayer party features with queue system, spectator mode, and more.',
            image: 'https://cdn.mods.bsquest.xyz/images/party-mode.png',
            category: 'Mods',
            subcategory: 'Fun',
            downloadUrl: 'https://github.com/Assistant/PartyMode/releases/latest/download/PartyMode.qmod',
            version: '1.0.0',
            author: 'Assistant'
          }
        ]
      }
    ]
  },
  {
    id: 'qol',
    name: 'QOL',
    expanded: true,
    subcategories: [
      {
        id: 'qol-mods',
        name: 'Quality of Life Mods',
        mods: [
          {
            id: 'smoothed-controller',
            name: 'Smoothed Controller',
            description: 'Smooths controller tracking for more natural movement and reduced jitter.',
            image: 'https://cdn.mods.bsquest.xyz/images/smoothed-controller.png',
            category: 'Mods',
            subcategory: 'QOL',
            downloadUrl: 'https://github.com/Assistant/SmoothedController/releases/latest/download/SmoothedController.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'bts-yeeter',
            name: 'BTS Yeeter',
            description: 'Quickly skip or restart songs with controller gestures - no menu navigation needed.',
            image: 'https://cdn.mods.bsquest.xyz/images/bts-yeeter.png',
            category: 'Mods',
            subcategory: 'QOL',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/BTSYeeter/releases/latest/download/BTSYeeter.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'auto-pause',
            name: 'Auto Pause',
            description: 'Automatically pauses the game when you take off the headset or look away.',
            image: 'https://cdn.mods.bsquest.xyz/images/auto-pause.png',
            category: 'Mods',
            subcategory: 'QOL',
            downloadUrl: 'https://github.com/Assistant/AutoPause/releases/latest/download/AutoPause.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'quick-restart',
            name: 'Quick Restart',
            description: 'Instantly restart the current song with a button combination.',
            image: 'https://cdn.mods.bsquest.xyz/images/quick-restart.png',
            category: 'Mods',
            subcategory: 'QOL',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/QuickRestart/releases/latest/download/QuickRestart.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'no-hud',
            name: 'No HUD',
            description: 'Completely hide the HUD for immersive gameplay or recording.',
            image: 'https://cdn.mods.bsquest.xyz/images/no-hud.png',
            category: 'Mods',
            subcategory: 'QOL',
            downloadUrl: 'https://github.com/Assistant/NoHUD/releases/latest/download/NoHUD.qmod',
            version: '1.0.0',
            author: 'Assistant'
          }
        ]
      }
    ]
  },
  {
    id: 'misc',
    name: 'Misc',
    expanded: true,
    subcategories: [
      {
        id: 'misc-mods',
        name: 'Miscellaneous Mods',
        mods: [
          {
            id: 'discord-rpc',
            name: 'Discord Rich Presence',
            description: 'Shows your current song, score, and status in Discord with customizable display.',
            image: 'https://cdn.mods.bsquest.xyz/images/discord-rpc.png',
            category: 'Mods',
            subcategory: 'Misc',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/DiscordRPC/releases/latest/download/DiscordRPC.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'twitch-integration',
            name: 'Twitch Integration',
            description: 'Display Twitch chat, alerts, and song requests directly in-game.',
            image: 'https://cdn.mods.bsquest.xyz/images/twitch-integration.png',
            category: 'Mods',
            subcategory: 'Misc',
            downloadUrl: 'https://github.com/Assistant/TwitchIntegration/releases/latest/download/TwitchIntegration.qmod',
            version: '1.0.0',
            author: 'Assistant'
          },
          {
            id: 'streamer-tools',
            name: 'Streamer Tools',
            description: 'Tools for streamers including song request overlay, viewer interaction, and more.',
            image: 'https://cdn.mods.bsquest.xyz/images/streamer-tools.png',
            category: 'Mods',
            subcategory: 'Misc',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/StreamerTools/releases/latest/download/StreamerTools.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          },
          {
            id: 'practice-plugin',
            name: 'Practice Plugin',
            description: 'Advanced practice mode with section looping, speed control, and no-fail options.',
            image: 'https://cdn.mods.bsquest.xyz/images/practice-plugin.png',
            category: 'Mods',
            subcategory: 'Misc',
            downloadUrl: 'https://github.com/BeatSaberModdingGroup/PracticePlugin/releases/latest/download/PracticePlugin.qmod',
            version: '1.0.0',
            author: 'BeatSaberModdingGroup'
          }
        ]
      }
    ]
  }
];

// Helper function to get all mods as a flat array
export function getAllMods(): Mod[] {
  return modCategories.flatMap(cat =>
    cat.subcategories.flatMap(sub => sub.mods)
  );
}

// Helper function to get a mod by ID
export function getModById(id: string): Mod | undefined {
  return getAllMods().find(mod => mod.id === id);
}