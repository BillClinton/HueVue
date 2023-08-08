export type Light = {
  id: string;
  name: string;
  on: boolean;
  color?: string;
};

export interface Room {
  id: string;
  name: string;
  lights?: Light[];
}
