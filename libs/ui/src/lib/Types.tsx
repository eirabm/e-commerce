export interface Specy {}

export interface Sprite {}

export interface pokemonApiT {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: Specy;
  sprites: Sprite;
  stats: any[];
  types: any[];
  weight: number;
}

export interface GeneralPokeDataT {
  name: string;
  url: string;
}
