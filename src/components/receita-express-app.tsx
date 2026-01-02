'use client';

import { useState, useMemo } from 'react';
import { Search, Heart, Clock, Lock, Home, Crown, User, ChevronLeft, Filter, X } from 'lucide-react';
import { Recipe, RecipeCategory, RecipeGoal } from '@/lib/types';
import { allRecipes, premiumPlans } from '@/lib/recipes-data';

type Screen = 'home' | 'category' | 'recipe' | 'premium' | 'favorites';

export default function ReceitaExpressApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<RecipeGoal | 'all'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'fitness', name: 'Fitness & Dieta', icon: '💪', premium: true, color: 'from-emerald-500 to-teal-500' },
    { id: 'comidas-rapidas', name: 'Comidas Rápidas', icon: '⚡', color: 'from-orange-500 to-red-500' },
    { id: 'sobremesas', name: 'Sobremesas', icon: '🍰', color: 'from-pink-500 to-rose-500' },
    { id: 'bolos', name: 'Bolos', icon: '🎂', color: 'from-purple-500 to-indigo-500' },
    { id: 'doces', name: 'Doces', icon: '🍬', color: 'from-yellow-500 to-orange-500' },
    { id: 'drinks-alcool', name: 'Drinks c/ Álcool', icon: '🍹', color: 'from-blue-500 to-cyan-500' },
    { id: 'drinks-sem-alcool', name: 'Drinks s/ Álcool', icon: '🥤', color: 'from-green-500 to-emerald-500' },
  ];

  const goals = [
    { id: 'all', name: 'Todos os objetivos', icon: '🎯' },
    { id: 'emagrecer', name: 'Emagrecimento', icon: '🔥' },
    { id: 'manter', name: 'Manutenção', icon: '⚖️' },
    { id: 'ganhar-massa', name: 'Hipertrofia', icon: '💪' },
  ];

  const filteredRecipes = useMemo(() => {
    let recipes = allRecipes;

    if (selectedCategory) {
      recipes = recipes.filter(r => r.category === selectedCategory);
    }

    if (searchTerm) {
      recipes = recipes.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedGoal !== 'all') {
      recipes = recipes.filter(r => r.goal === selectedGoal || r.goal === 'geral');
    }

    return recipes;
  }, [selectedCategory, searchTerm, selectedGoal]);

  const favoriteRecipes = useMemo(() => {
    return allRecipes.filter(r => favorites.includes(r.id));
  }, [favorites]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleRecipeClick = (recipe: Recipe) => {
    if (recipe.isPremium) {
      setCurrentScreen('premium');
    } else {
      setSelectedRecipe(recipe);
      setCurrentScreen('recipe');
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category?.premium) {
      setCurrentScreen('premium');
    } else {
      setSelectedCategory(categoryId as RecipeCategory);
      setCurrentScreen('category');
    }
  };

  // TELA HOME (CATEGORIAS)
  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 pb-8 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Receita Express</h1>
            <p className="text-emerald-50 text-sm">Escolha uma categoria para começar</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 -mt-4">
          {/* Cards de Categorias */}
          <div className="grid gap-4 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">
                        {allRecipes.filter(r => r.category === category.id).length} receitas
                      </p>
                    </div>
                  </div>
                  {category.premium && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Lock className="w-4 h-4" />
                      PREMIUM
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-2">
              <button className="flex flex-col items-center gap-1 py-2 text-emerald-600">
                <Home className="w-6 h-6" />
                <span className="text-xs font-semibold">Home</span>
              </button>
              <button
                onClick={() => setCurrentScreen('favorites')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentScreen('premium')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Crown className="w-6 h-6" />
                <span className="text-xs font-semibold">Premium</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-xs font-semibold">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TELA LISTA DE RECEITAS
  if (currentScreen === 'category') {
    const currentCategory = categories.find(c => c.id === selectedCategory);

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 pb-20">
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentCategory?.color} text-white p-6 pb-8 shadow-lg`}>
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => {
                setCurrentScreen('home');
                setSelectedCategory(null);
                setSearchTerm('');
                setSelectedGoal('all');
              }}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Voltar</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{currentCategory?.icon}</span>
              <div>
                <h1 className="text-2xl font-bold">{currentCategory?.name}</h1>
                <p className="text-white/80 text-sm">{filteredRecipes.length} receitas encontradas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 -mt-4">
          {/* Busca */}
          <div className="bg-white rounded-2xl shadow-xl p-4 mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou ingrediente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>

          {/* Filtros por Objetivo */}
          {selectedCategory === 'fitness' && (
            <div className="mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-gray-700 w-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtrar por objetivo
                </div>
                {selectedGoal !== 'all' && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                    Ativo
                  </span>
                )}
              </button>

              {showFilters && (
                <div className="mt-3 bg-white rounded-xl shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {goals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.id as RecipeGoal | 'all')}
                        className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 justify-center ${
                          selectedGoal === goal.id
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{goal.icon}</span>
                        {goal.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Lista de Receitas */}
          <div className="grid gap-4 pb-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <div className="flex gap-4 p-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                    />
                    {recipe.isPremium && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{recipe.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {recipe.time} min
                      </div>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-semibold">
                        {recipe.difficulty}
                      </span>
                    </div>
                    {recipe.goal && recipe.goal !== 'geral' && (
                      <div className="text-xs text-emerald-600 font-semibold">
                        🎯 {
                          recipe.goal === 'emagrecer' ? 'Emagrecimento' :
                          recipe.goal === 'manter' ? 'Manutenção' :
                          'Hipertrofia'
                        }
                      </div>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className="flex-shrink-0 self-start"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        favorites.includes(recipe.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nenhuma receita encontrada
                </h3>
                <p className="text-gray-600">
                  Tente buscar por outros termos
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => {
                  setCurrentScreen('home');
                  setSelectedCategory(null);
                }}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-xs font-semibold">Home</span>
              </button>
              <button
                onClick={() => setCurrentScreen('favorites')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentScreen('premium')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Crown className="w-6 h-6" />
                <span className="text-xs font-semibold">Premium</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-xs font-semibold">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TELA DE RECEITA (DETALHES)
  if (currentScreen === 'recipe' && selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 pb-20">
        {/* Header com Imagem */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={() => {
              setSelectedRecipe(null);
              setCurrentScreen('category');
            }}
            className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-2xl font-bold text-white mb-2">
              {selectedRecipe.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                ⏱ {selectedRecipe.time} min
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {selectedRecipe.difficulty}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <p className="text-gray-600 mb-6">{selectedRecipe.description}</p>

          {selectedRecipe.goal && selectedRecipe.goal !== 'geral' && (
            <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
              <p className="text-sm font-semibold text-emerald-700">
                🎯 Objetivo: {
                  selectedRecipe.goal === 'emagrecer' ? 'Emagrecimento' :
                  selectedRecipe.goal === 'manter' ? 'Manutenção' :
                  'Hipertrofia'
                }
              </p>
            </div>
          )}

          {/* Ingredientes */}
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🥘</span>
              Ingredientes
            </h2>
            <ul className="space-y-3">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1 text-lg">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modo de Preparo */}
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">👨‍🍳</span>
              Modo de Preparo
            </h2>
            <ol className="space-y-4">
              {selectedRecipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Botão Favoritar */}
          <button
            onClick={() => toggleFavorite(selectedRecipe.id)}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
              favorites.includes(selectedRecipe.id)
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-red-300'
            }`}
          >
            <Heart
              className={`w-5 h-5 inline mr-2 ${
                favorites.includes(selectedRecipe.id) ? 'fill-current' : ''
              }`}
            />
            {favorites.includes(selectedRecipe.id) ? 'Favoritado ❤️' : 'Favoritar Receita'}
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => {
                  setCurrentScreen('home');
                  setSelectedRecipe(null);
                }}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-xs font-semibold">Home</span>
              </button>
              <button
                onClick={() => setCurrentScreen('favorites')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentScreen('premium')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Crown className="w-6 h-6" />
                <span className="text-xs font-semibold">Premium</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-xs font-semibold">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TELA PREMIUM
  if (currentScreen === 'premium') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-emerald-50 pb-20">
        {/* Header Premium */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 pb-8 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentScreen('home')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Voltar</span>
            </button>
            <div className="text-center">
              <Crown className="w-16 h-16 mx-auto mb-3" />
              <h1 className="text-3xl font-bold mb-2">Seja Premium</h1>
              <p className="text-white/90">Desbloqueie todas as receitas Fitness & Dieta</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 -mt-4">
          {/* Benefícios */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              ✨ O que você ganha:
            </h2>
            <div className="space-y-3">
              {[
                '+50 receitas fitness exclusivas',
                'Receitas rápidas e práticas',
                'Conteúdo organizado por objetivo',
                'Shakes pré e pós-treino',
                'Doces e bolos fitness',
                'Cardápio semanal personalizado',
                'Atualizações constantes'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planos */}
          <div className="space-y-4 mb-6">
            {premiumPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 transition-all hover:shadow-2xl ${
                  plan.duration === 'anual'
                    ? 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-500'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.duration === 'anual' && (
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    🔥 MAIS POPULAR - ECONOMIA DE 37%
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    {plan.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        De R$ {plan.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      R$ {plan.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {plan.duration === 'mensal' && '/mês'}
                      {plan.duration === 'trimestral' && '/3 meses'}
                      {plan.duration === 'anual' && '/ano'}
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg">
                  👉 Desbloquear Premium
                </button>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>🔒 Pagamento 100% seguro</p>
            <p>✓ Cancele quando quiser</p>
            <p>💳 Aceitamos todos os cartões</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setCurrentScreen('home')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-xs font-semibold">Home</span>
              </button>
              <button
                onClick={() => setCurrentScreen('favorites')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors relative"
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-1/4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-orange-600">
                <Crown className="w-6 h-6" />
                <span className="text-xs font-semibold">Premium</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-xs font-semibold">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TELA FAVORITOS
  if (currentScreen === 'favorites') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 pb-8 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentScreen('home')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Voltar</span>
            </button>
            <div className="flex items-center gap-3">
              <Heart className="w-10 h-10 fill-current" />
              <div>
                <h1 className="text-2xl font-bold">Minhas Receitas Favoritas</h1>
                <p className="text-white/80 text-sm">{favoriteRecipes.length} receitas salvas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          {favoriteRecipes.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Você ainda não favoritou nenhuma receita
              </h3>
              <p className="text-gray-600 mb-6">
                Explore as categorias e favorite suas receitas preferidas!
              </p>
              <button
                onClick={() => setCurrentScreen('home')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition-all"
              >
                Explorar Receitas
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {favoriteRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    setCurrentScreen('recipe');
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{recipe.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.time} min
                        </div>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-semibold">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      className="flex-shrink-0 self-start"
                    >
                      <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setCurrentScreen('home')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-xs font-semibold">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-red-600">
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold">Favoritos</span>
              </button>
              <button
                onClick={() => setCurrentScreen('premium')}
                className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Crown className="w-6 h-6" />
                <span className="text-xs font-semibold">Premium</span>
              </button>
              <button className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="text-xs font-semibold">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
