export interface UnitType {
  id?: number;
  name: string;
  unit_category?: number;
  affix: number;
}

export interface CategoryType {
  id?: number;
  category: string;
  standard: string;
}
