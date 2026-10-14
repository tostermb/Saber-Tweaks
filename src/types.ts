export interface Mod {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  downloadUrl: string;
  requires?: string[];
  incompatibleWith?: string[];
  isCore?: boolean;
  version?: string;
  author?: string;
}

export interface Model {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string; // "Whackers", "Boxes", "Cyoobs"
  subcategory: string; // "Sabers", "Walls", "Bombs"
  downloadUrl: string;
  requires: string[]; // e.g., ["Qosmetics", "Custom Models"]
  version?: string;
  author?: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  expanded: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
  mods: Mod[];
}

export interface ModelCategory {
  id: string;
  name: string;
  subcategories: ModelSubcategory[];
  expanded: boolean;
}

export interface ModelSubcategory {
  id: string;
  name: string;
  models: Model[];
}

export type ViewMode = 'mods' | 'models';