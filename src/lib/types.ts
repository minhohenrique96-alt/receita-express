export type RecipeCategory = 
  | 'fitness' 
  | 'comidas-rapidas' 
  | 'sobremesas' 
  | 'bolos' 
  | 'doces' 
  | 'drinks-alcool' 
  | 'drinks-sem-alcool';

export type RecipeGoal = 'emagrecer' | 'manter' | 'ganhar-massa' | 'geral';

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  isPremium: boolean;
  time: number; // em minutos
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  goal?: RecipeGoal;
  image: string;
  ingredients: string[];
  instructions: string[];
  description: string;
}

export interface PremiumPlan {
  id: string;
  name: string;
  duration: 'mensal' | 'trimestral' | 'anual';
  price: number;
  originalPrice?: number;
  benefits: string[];
}
