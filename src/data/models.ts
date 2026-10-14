import type { Model, ModelCategory } from '../types';

// Model data organized by category and subcategory
export const modelCategories: ModelCategory[] = [
  {
    id: 'whackers',
    name: 'Whackers (Sabers)',
    expanded: true,
    subcategories: [
      {
        id: 'whackers-sabers',
        name: 'Sabers',
        models: [
          {
            id: 'pixel-saber',
            name: 'Pixel Saber',
            description: 'Retro pixel-art style saber with animated glow effects. Perfect for a nostalgic feel.',
            image: 'https://cdn.mods.bsquest.xyz/models/pixel-saber.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/PixelSaber/releases/latest/download/PixelSaber.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'neon-saber',
            name: 'Neon Saber',
            description: 'Vibrant neon-tube style saber with customizable colors and pulse animations.',
            image: 'https://cdn.mods.bsquest.xyz/models/neon-saber.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/NeonSaber/releases/latest/download/NeonSaber.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'katana-saber',
            name: 'Katana Saber',
            description: 'Traditional Japanese katana model with detailed hilt and blade geometry.',
            image: 'https://cdn.mods.bsquest.xyz/models/katana-saber.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/KatanaSaber/releases/latest/download/KatanaSaber.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'lightsaber',
            name: 'Lightsaber',
            description: 'Star Wars inspired lightsaber with authentic ignition/retraction animation and hum.',
            image: 'https://cdn.mods.bsquest.xyz/models/lightsaber.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/Lightsaber/releases/latest/download/Lightsaber.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'crystal-saber',
            name: 'Crystal Saber',
            description: 'Elegant crystalline saber with refraction effects and multiple color variants.',
            image: 'https://cdn.mods.bsquest.xyz/models/crystal-saber.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/CrystalSaber/releases/latest/download/CrystalSaber.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'keyblade',
            name: 'Keyblade',
            description: 'Kingdom Hearts inspired Keyblade with multiple form transformations.',
            image: 'https://cdn.mods.bsquest.xyz/models/keyblade.png',
            category: 'Custom Models',
            subcategory: 'Whackers (Sabers)',
            downloadUrl: 'https://github.com/BeatSaberModels/Keyblade/releases/latest/download/Keyblade.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          }
        ]
      }
    ]
  },
  {
    id: 'boxes',
    name: 'Boxes (Walls)',
    expanded: true,
    subcategories: [
      {
        id: 'boxes-walls',
        name: 'Walls',
        models: [
          {
            id: 'glass-wall',
            name: 'Glass Wall',
            description: 'Transparent glass wall with reflective surfaces and shatter effects on hit.',
            image: 'https://cdn.mods.bsquest.xyz/models/glass-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/GlassWall/releases/latest/download/GlassWall.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'neon-wall',
            name: 'Neon Wall',
            description: 'Glowing neon-frame wall with animated pulse patterns matching the beat.',
            image: 'https://cdn.mods.bsquest.xyz/models/neon-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/NeonWall/releases/latest/download/NeonWall.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'hexagon-wall',
            name: 'Hexagon Wall',
            description: 'Geometric hexagonal wall pattern with tessellating design and glow accents.',
            image: 'https://cdn.mods.bsquest.xyz/models/hexagon-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/HexagonWall/releases/latest/download/HexagonWall.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'portal-wall',
            name: 'Portal Wall',
            description: 'Portal-style wall with swirling particle effects and depth illusion.',
            image: 'https://cdn.mods.bsquest.xyz/models/portal-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/PortalWall/releases/latest/download/PortalWall.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'brick-wall',
            name: 'Brick Wall',
            description: 'Classic brick wall texture with mortar detail and weathered appearance.',
            image: 'https://cdn.mods.bsquest.xyz/models/brick-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/BrickWall/releases/latest/download/BrickWall.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'hologram-wall',
            name: 'Hologram Wall',
            description: 'Futuristic holographic wall with scan lines and data visualization patterns.',
            image: 'https://cdn.mods.bsquest.xyz/models/hologram-wall.png',
            category: 'Custom Models',
            subcategory: 'Boxes (Walls)',
            downloadUrl: 'https://github.com/BeatSaberModels/HologramWall/releases/latest/download/HologramWall.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          }
        ]
      }
    ]
  },
  {
    id: 'cyoobs',
    name: 'Cyoobs (Bombs)',
    expanded: true,
    subcategories: [
      {
        id: 'cyoobs-bombs',
        name: 'Bombs',
        models: [
          {
            id: 'classic-bomb',
            name: 'Classic Bomb',
            description: 'Traditional spherical bomb with fuse and realistic explosion particles.',
            image: 'https://cdn.mods.bsquest.xyz/models/classic-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/ClassicBomb/releases/latest/download/ClassicBomb.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'nuke-bomb',
            name: 'Nuke Bomb',
            description: 'Massive nuclear bomb model with radiation warning symbols and mushroom cloud effect.',
            image: 'https://cdn.mods.bsquest.xyz/models/nuke-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/NukeBomb/releases/latest/download/NukeBomb.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'dice-bomb',
            name: 'Dice Bomb',
            description: 'Giant six-sided die that shows random numbers on explosion.',
            image: 'https://cdn.mods.bsquest.xyz/models/dice-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/DiceBomb/releases/latest/download/DiceBomb.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'heart-bomb',
            name: 'Heart Bomb',
            description: 'Heart-shaped bomb with loving particle burst - perfect for Valentine\'s maps.',
            image: 'https://cdn.mods.bsquest.xyz/models/heart-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/HeartBomb/releases/latest/download/HeartBomb.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'skull-bomb',
            name: 'Skull Bomb',
            description: 'Menacing skull bomb with glowing eyes and dark particle effects.',
            image: 'https://cdn.mods.bsquest.xyz/models/skull-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/SkullBomb/releases/latest/download/SkullBomb.zip',
            requires: ['Custom Models', 'Qosmetics'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          },
          {
            id: 'present-bomb',
            name: 'Present Bomb',
            description: 'Gift-wrapped present bomb with bow - explodes into confetti and particles.',
            image: 'https://cdn.mods.bsquest.xyz/models/present-bomb.png',
            category: 'Custom Models',
            subcategory: 'Cyoobs (Bombs)',
            downloadUrl: 'https://github.com/BeatSaberModels/PresentBomb/releases/latest/download/PresentBomb.zip',
            requires: ['Custom Models'],
            version: '1.0.0',
            author: 'BeatSaberModels'
          }
        ]
      }
    ]
  }
];

// Helper function to get all models as a flat array
export function getAllModels(): Model[] {
  return modelCategories.flatMap(cat =>
    cat.subcategories.flatMap(sub => sub.models)
  );
}

// Helper function to get a model by ID
export function getModelById(id: string): Model | undefined {
  return getAllModels().find(model => model.id === id);
}