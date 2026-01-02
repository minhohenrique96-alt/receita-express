'use client';

import { useState, useMemo, useEffect } from 'react';
import { Search, Heart, Clock, Lock, Filter, X } from 'lucide-react';
import { Recipe, RecipeCategory, RecipeGoal } from '@/lib/types';
import { allRecipes, premiumPlans } from '@/lib/recipes-data';

export default function ReceitaExpressApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | 'all'>('all');
  const [selectedGoal, setSelectedGoal] = useState<RecipeGoal | 'all'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showPremium, setShowPremium] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isPremiumUser] = useState(false); // Usuário Free por padrão

  // Carregar favoritos do localStorage ao montar o componente
  useEffect(() => {
    const savedFavorites = localStorage.getItem('receita-express-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  // Salvar favoritos no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('receita-express-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const categories = [
    { id: 'all', name: 'Todas', icon: '🍽️' },
    { id: 'fitness', name: 'Fitness & Dieta', icon: '💪', premium: true },
    { id: 'comidas-rapidas', name: 'Comidas Rápidas', icon: '⚡' },
    { id: 'sobremesas', name: 'Sobremesas', icon: '🍰' },
    { id: 'bolos', name: 'Bolos', icon: '🎂' },
    { id: 'doces', name: 'Doces', icon: '🍬' },
    { id: 'drinks-alcool', name: 'Drinks c/ Álcool', icon: '🍹' },
    { id: 'drinks-sem-alcool', name: 'Drinks s/ Álcool', icon: '🥤' },
  ];

  const goals = [
    { id: 'all', name: 'Todos os objetivos' },
    { id: 'emagrecer', name: 'Emagrecer' },
    { id: 'manter', name: 'Manter peso' },
    { id: 'ganhar-massa', name: 'Ganhar massa' },
  ];

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      // Bloquear receitas Premium para usuários Free
      if (recipe.isPremium && !isPremiumUser) {
        return false;
      }

      const matchesSearch = 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      const matchesGoal = selectedGoal === 'all' || recipe.goal === selectedGoal || recipe.goal === 'geral';

      return matchesSearch && matchesCategory && matchesGoal;
    });
  }, [searchTerm, selectedCategory, selectedGoal, isPremiumUser]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    // Se clicar em Fitness & Dieta e não for Premium, mostrar tela Premium
    if (categoryId === 'fitness' && !isPremiumUser) {
      setShowPremium(true);
      return;
    }
    setSelectedCategory(categoryId as RecipeCategory | 'all');
  };

  const handleRecipeClick = (recipe: Recipe) => {
    // Se receita for Premium e usuário não for Premium, mostrar tela Premium
    if (recipe.isPremium && !isPremiumUser) {
      setShowPremium(true);
    } else {
      setSelectedRecipe(recipe);
    }
  };

  if (showPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Premium */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <button
              onClick={() => setShowPremium(false)}
              className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
              Voltar
            </button>
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                ⭐ PREMIUM
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Desbloqueie todas as receitas Fitness & Dieta
              </h1>
              <p className="text-gray-600">
                Acesse +50 receitas exclusivas e alcance seus objetivos
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                O que você ganha com o Premium:
              </h2>
              <div className="grid gap-3">
                {[
                  '+50 receitas fitness exclusivas',
                  'Receitas rápidas e práticas',
                  'Conteúdo organizado por objetivo (Emagrecimento, Hipertrofia, Manutenção)'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Planos */}
            <div className="grid gap-4 mb-6">
              {premiumPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`border-2 rounded-xl p-6 transition-all hover:shadow-lg ${
                    plan.duration === 'anual'
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {plan.duration === 'anual' && (
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                      MAIS POPULAR
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      {plan.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          R$ {plan.originalPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">
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
                    Desbloquear Premium
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>🔒 Pagamento 100% seguro</p>
              <p>✓ Cancele quando quiser</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Header da Receita */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl font-bold text-white mb-2">
                  {selectedRecipe.name}
                </h1>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedRecipe.time} min
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    {selectedRecipe.difficulty}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
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
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Ingredientes
                </h2>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Modo de Preparo
                </h2>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white text-sm flex items-center justify-center font-bold">
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
                {favorites.includes(selectedRecipe.id) ? 'Favoritado' : 'Favoritar Receita'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 pb-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Receita Express</h1>
          <p className="text-emerald-50">Receitas rápidas, práticas e fitness</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-4 pb-24">
        {/* Busca */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome ou ingrediente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none text-base"
            />
          </div>
        </div>

        {/* Categorias */}
        <div className="mb-6 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
                {category.premium && <Lock className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-gray-700"
          >
            <Filter className="w-5 h-5" />
            Filtrar por objetivo
            {selectedGoal !== 'all' && (
              <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                1
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
                    className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                      selectedGoal === goal.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {goal.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mensagem quando categoria Fitness está selecionada mas usuário é Free */}
        {selectedCategory === 'fitness' && !isPremiumUser && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 mb-6 text-center">
            <Lock className="w-12 h-12 mx-auto mb-3 text-orange-500" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Conteúdo Premium 🔒
            </h3>
            <p className="text-gray-600 mb-4">
              As receitas Fitness & Dieta são exclusivas para assinantes Premium
            </p>
            <button
              onClick={() => setShowPremium(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition-all"
            >
              Ver Planos Premium
            </button>
          </div>
        )}

        {/* Lista de Receitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => handleRecipeClick(recipe)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                {recipe.isPremium && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Lock className="w-3 h-3" />
                    PREMIUM
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-lg"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(recipe.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {recipe.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.time} min
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold">
                    {recipe.difficulty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nenhuma receita encontrada
            </h3>
            <p className="text-gray-600">
              {selectedCategory === 'fitness' && !isPremiumUser 
                ? 'Assine o Premium para acessar receitas Fitness & Dieta'
                : 'Tente buscar por outros termos ou categorias'
              }
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-2">
            <button className="flex flex-col items-center gap-1 py-2 text-emerald-600">
              <Search className="w-6 h-6" />
              <span className="text-xs font-semibold">Explorar</span>
            </button>
            <button
              onClick={() => {
                const favRecipes = allRecipes.filter(r => favorites.includes(r.id));
                if (favRecipes.length === 0) {
                  alert('Você ainda não tem receitas favoritas!');
                }
              }}
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
              onClick={() => setShowPremium(true)}
              className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Lock className="w-6 h-6" />
              <span className="text-xs font-semibold">Premium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
