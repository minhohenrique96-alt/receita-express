import { Recipe, PremiumPlan } from './types';

// 50 Receitas Fitness Premium
export const fitnessRecipes: Recipe[] = [
  {
    id: 'fit-1',
    name: 'Panqueca proteica de banana',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop',
    description: 'Panqueca rica em proteínas, perfeita para o café da manhã pós-treino',
    ingredients: [
      '2 ovos inteiros',
      '1 banana madura',
      '2 colheres de aveia',
      '1 scoop de whey protein',
      'Canela a gosto'
    ],
    instructions: [
      'Amasse a banana em um bowl',
      'Adicione os ovos e misture bem',
      'Acrescente a aveia e o whey protein',
      'Misture até obter uma massa homogênea',
      'Aqueça uma frigideira antiaderente',
      'Despeje a massa e cozinhe por 2-3 minutos de cada lado',
      'Sirva com mel ou pasta de amendoim'
    ]
  },
  {
    id: 'fit-2',
    name: 'Arroz integral com carne moída',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
    description: 'Refeição completa com carboidrato de qualidade e proteína magra',
    ingredients: [
      '1 xícara de arroz integral',
      '300g de carne moída magra',
      '1 cebola picada',
      '2 dentes de alho',
      'Temperos naturais',
      'Sal e pimenta'
    ],
    instructions: [
      'Cozinhe o arroz integral conforme instruções da embalagem',
      'Refogue a cebola e o alho',
      'Adicione a carne moída e temperos',
      'Cozinhe até a carne estar bem passada',
      'Sirva o arroz com a carne por cima'
    ]
  },
  {
    id: 'fit-3',
    name: 'Frango com batata-doce',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    description: 'Combinação clássica fitness: proteína magra e carboidrato complexo',
    ingredients: [
      '200g de peito de frango',
      '2 batatas-doces médias',
      'Azeite de oliva',
      'Alecrim e tomilho',
      'Sal e pimenta'
    ],
    instructions: [
      'Tempere o frango com sal, pimenta e ervas',
      'Corte as batatas-doces em cubos',
      'Asse as batatas com azeite a 200°C por 25 minutos',
      'Grelhe o frango por 6-7 minutos de cada lado',
      'Sirva junto com salada verde'
    ]
  },
  {
    id: 'fit-4',
    name: 'Macarrão integral com frango',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    description: 'Massa integral com proteína magra e molho leve',
    ingredients: [
      '200g de macarrão integral',
      '200g de frango em cubos',
      'Molho de tomate caseiro',
      'Manjericão fresco',
      'Alho e cebola'
    ],
    instructions: [
      'Cozinhe o macarrão al dente',
      'Refogue o frango com alho e cebola',
      'Adicione o molho de tomate',
      'Misture o macarrão ao molho',
      'Finalize com manjericão fresco'
    ]
  },
  {
    id: 'fit-5',
    name: 'Omelete proteico recheado',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1612240498936-65f4b6e6d1e3?w=400&h=300&fit=crop',
    description: 'Omelete rico em proteínas com recheio saudável',
    ingredients: [
      '3 ovos inteiros',
      '2 claras',
      'Queijo cottage',
      'Tomate e espinafre',
      'Sal e orégano'
    ],
    instructions: [
      'Bata os ovos com as claras',
      'Despeje em frigideira antiaderente',
      'Adicione o recheio quando começar a cozinhar',
      'Dobre ao meio e sirva'
    ]
  },
  {
    id: 'fit-6',
    name: 'Shake hipercalórico caseiro',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    description: 'Shake rico em calorias e proteínas para ganho de massa',
    ingredients: [
      '1 banana',
      '2 scoops de whey protein',
      '2 colheres de pasta de amendoim',
      '1 xícara de aveia',
      '300ml de leite integral',
      'Mel a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'fit-7',
    name: 'Cuscuz fitness com ovos',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1587486936321-e069e7c5d9de?w=400&h=300&fit=crop',
    description: 'Café da manhã nordestino fitness e nutritivo',
    ingredients: [
      '1 xícara de flocos de milho',
      '2 ovos cozidos',
      '1 colher de azeite',
      'Sal a gosto',
      'Água'
    ],
    instructions: [
      'Hidrate os flocos de milho com água',
      'Cozinhe no vapor por 5 minutos',
      'Sirva com ovos cozidos e azeite'
    ]
  },
  {
    id: 'fit-8',
    name: 'Quinoa com frango e legumes',
    category: 'fitness',
    isPremium: true,
    time: 25,
    difficulty: 'Médio',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop',
    description: 'Refeição completa com superalimento e proteína',
    ingredients: [
      '1 xícara de quinoa',
      '200g de frango em cubos',
      'Brócolis e cenoura',
      'Azeite de oliva',
      'Temperos naturais'
    ],
    instructions: [
      'Cozinhe a quinoa conforme embalagem',
      'Refogue o frango com temperos',
      'Cozinhe os legumes no vapor',
      'Misture tudo e regue com azeite'
    ]
  },
  {
    id: 'fit-9',
    name: 'Escondidinho fitness',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Médio',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
    description: 'Versão saudável do escondidinho tradicional',
    ingredients: [
      '300g de carne moída magra',
      '3 batatas-doces',
      'Queijo cottage',
      'Cebola e alho',
      'Temperos naturais'
    ],
    instructions: [
      'Cozinhe e amasse as batatas-doces',
      'Refogue a carne com temperos',
      'Monte em camadas em refratário',
      'Cubra com queijo cottage',
      'Leve ao forno por 15 minutos'
    ]
  },
  {
    id: 'fit-10',
    name: 'Lasanha fitness de berinjela',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Médio',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?w=400&h=300&fit=crop',
    description: 'Lasanha low carb com berinjela no lugar da massa',
    ingredients: [
      '2 berinjelas grandes',
      '300g de carne moída magra',
      'Molho de tomate caseiro',
      'Queijo minas light',
      'Manjericão'
    ],
    instructions: [
      'Corte as berinjelas em fatias finas',
      'Grelhe as fatias levemente',
      'Refogue a carne com molho',
      'Monte em camadas alternadas',
      'Asse por 20 minutos a 180°C'
    ]
  },
  {
    id: 'fit-11',
    name: 'Arroz integral simples',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    description: 'Arroz integral bem temperado e soltinho',
    ingredients: [
      '1 xícara de arroz integral',
      '2 xícaras de água',
      'Sal',
      'Alho',
      'Azeite'
    ],
    instructions: [
      'Refogue o alho no azeite',
      'Adicione o arroz e torre levemente',
      'Acrescente a água e sal',
      'Cozinhe em fogo baixo por 25 minutos'
    ]
  },
  {
    id: 'fit-12',
    name: 'Frango grelhado temperado',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    description: 'Peito de frango suculento e bem temperado',
    ingredients: [
      '300g de peito de frango',
      'Limão',
      'Alho e cebola',
      'Páprica e cominho',
      'Azeite'
    ],
    instructions: [
      'Tempere o frango com todos os ingredientes',
      'Deixe marinar por 30 minutos',
      'Grelhe em fogo médio por 7 minutos cada lado',
      'Deixe descansar antes de cortar'
    ]
  },
  {
    id: 'fit-13',
    name: 'Carne moída saudável',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    description: 'Carne moída magra bem temperada',
    ingredients: [
      '400g de carne moída magra',
      'Cebola e alho',
      'Tomate picado',
      'Cheiro verde',
      'Temperos naturais'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione a carne e mexa bem',
      'Acrescente tomate e temperos',
      'Cozinhe até secar o líquido',
      'Finalize com cheiro verde'
    ]
  },
  {
    id: 'fit-14',
    name: 'Peixe grelhado com limão',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    description: 'Peixe leve e saboroso, rico em ômega 3',
    ingredients: [
      '2 filés de peixe branco',
      'Suco de limão',
      'Alho',
      'Azeite',
      'Sal e pimenta'
    ],
    instructions: [
      'Tempere o peixe com limão, alho e sal',
      'Deixe marinar por 15 minutos',
      'Grelhe por 4 minutos cada lado',
      'Regue com azeite ao servir'
    ]
  },
  {
    id: 'fit-15',
    name: 'Panqueca simples de aveia',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop',
    description: 'Panqueca básica e nutritiva de aveia',
    ingredients: [
      '3 colheres de aveia',
      '2 ovos',
      '1 banana',
      'Canela',
      'Fermento (opcional)'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador',
      'Aqueça frigideira antiaderente',
      'Despeje a massa e cozinhe',
      'Vire quando formar bolhas'
    ]
  },
  {
    id: 'fit-16',
    name: 'Sanduíche natural fitness',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop',
    description: 'Sanduíche leve e nutritivo para qualquer hora',
    ingredients: [
      'Pão integral',
      'Peito de frango desfiado',
      'Alface e tomate',
      'Cenoura ralada',
      'Cream cheese light'
    ],
    instructions: [
      'Passe cream cheese no pão',
      'Monte com frango e vegetais',
      'Tempere com sal e limão',
      'Corte ao meio e sirva'
    ]
  },
  {
    id: 'fit-17',
    name: 'Salada completa balanceada',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    description: 'Salada nutritiva com todos os macronutrientes',
    ingredients: [
      'Mix de folhas verdes',
      'Frango grelhado',
      'Grão-de-bico',
      'Tomate cereja',
      'Azeite e limão'
    ],
    instructions: [
      'Lave e seque as folhas',
      'Adicione o frango em cubos',
      'Acrescente grão-de-bico e tomates',
      'Tempere com azeite, limão e sal'
    ]
  },
  {
    id: 'fit-18',
    name: 'Tapioca fitness',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1626776876729-bab4eda639c7?w=400&h=300&fit=crop',
    description: 'Tapioca versátil para recheios saudáveis',
    ingredients: [
      'Goma de tapioca',
      'Recheio de frango',
      'Queijo cottage',
      'Tomate',
      'Orégano'
    ],
    instructions: [
      'Aqueça frigideira antiaderente',
      'Espalhe a goma uniformemente',
      'Adicione o recheio quando firmar',
      'Dobre e sirva quente'
    ]
  },
  {
    id: 'fit-19',
    name: 'Omelete simples',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    description: 'Omelete básico rico em proteínas',
    ingredients: [
      '3 ovos',
      'Sal e pimenta',
      'Cheiro verde',
      'Tomate picado',
      'Cebola (opcional)'
    ],
    instructions: [
      'Bata os ovos com sal e pimenta',
      'Despeje em frigideira quente',
      'Adicione tomate e cheiro verde',
      'Dobre e sirva'
    ]
  },
  {
    id: 'fit-20',
    name: 'Bowl fitness equilibrado',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    description: 'Bowl completo com carboidrato, proteína e vegetais',
    ingredients: [
      'Arroz integral',
      'Frango grelhado',
      'Brócolis',
      'Cenoura',
      'Abacate'
    ],
    instructions: [
      'Cozinhe o arroz e os vegetais',
      'Grelhe o frango',
      'Monte o bowl em camadas',
      'Finalize com abacate em fatias'
    ]
  },
  {
    id: 'fit-21',
    name: 'Shake pré-treino de banana',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop',
    description: 'Energia rápida para treinos intensos',
    ingredients: [
      '1 banana',
      '1 colher de aveia',
      '1 scoop de whey',
      '200ml de água',
      'Canela'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Consuma 30 minutos antes do treino'
    ]
  },
  {
    id: 'fit-22',
    name: 'Shake pós-treino de chocolate',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop',
    description: 'Recuperação muscular com proteína e carboidrato',
    ingredients: [
      '2 scoops de whey chocolate',
      '1 banana',
      '1 colher de pasta de amendoim',
      '300ml de leite',
      'Gelo'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Consuma até 30 minutos após o treino'
    ]
  },
  {
    id: 'fit-23',
    name: 'Vitamina proteica',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    description: 'Vitamina nutritiva e rica em proteínas',
    ingredients: [
      '1 banana',
      'Morango',
      '1 scoop de whey',
      'Leite desnatado',
      'Aveia'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Sirva gelado'
    ]
  },
  {
    id: 'fit-24',
    name: 'Smoothie verde fitness',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    description: 'Smoothie detox rico em nutrientes',
    ingredients: [
      'Espinafre',
      '1 maçã verde',
      'Gengibre',
      'Limão',
      'Água de coco'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Coe se preferir',
      'Consuma imediatamente'
    ]
  },
  {
    id: 'fit-25',
    name: 'Shake energético natural',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?w=400&h=300&fit=crop',
    description: 'Energia natural para o dia todo',
    ingredients: [
      'Café frio',
      '1 banana',
      'Cacau em pó',
      'Aveia',
      'Mel'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Sirva com gelo'
    ]
  },
  {
    id: 'fit-26',
    name: 'Bolo fitness de chocolate',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Médio',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop',
    description: 'Bolo saudável sem açúcar refinado',
    ingredients: [
      '3 ovos',
      '1 xícara de aveia',
      'Cacau em pó',
      'Banana madura',
      'Fermento'
    ],
    instructions: [
      'Bata ovos e banana',
      'Adicione aveia e cacau',
      'Acrescente fermento',
      'Asse por 25 minutos a 180°C'
    ]
  },
  {
    id: 'fit-27',
    name: 'Brownie fitness',
    category: 'fitness',
    isPremium: true,
    time: 25,
    difficulty: 'Médio',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop',
    description: 'Brownie proteico e delicioso',
    ingredients: [
      'Batata-doce cozida',
      'Cacau em pó',
      'Whey protein chocolate',
      'Ovos',
      'Pasta de amendoim'
    ],
    instructions: [
      'Amasse a batata-doce',
      'Misture todos os ingredientes',
      'Despeje em forma untada',
      'Asse por 20 minutos'
    ]
  },
  {
    id: 'fit-28',
    name: 'Brigadeiro fitness',
    category: 'fitness',
    isPremium: true,
    time: 15,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4cac5bf4?w=400&h=300&fit=crop',
    description: 'Brigadeiro saudável sem leite condensado',
    ingredients: [
      'Tâmaras',
      'Cacau em pó',
      'Pasta de amendoim',
      'Leite de coco',
      'Granulado de cacau'
    ],
    instructions: [
      'Bata tâmaras com leite de coco',
      'Adicione cacau e pasta de amendoim',
      'Leve ao fogo até engrossar',
      'Enrole e passe no granulado'
    ]
  },
  {
    id: 'fit-29',
    name: 'Doce de banana fit',
    category: 'fitness',
    isPremium: true,
    time: 15,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop',
    description: 'Doce natural adoçado com a própria fruta',
    ingredients: [
      '4 bananas maduras',
      'Canela',
      'Cravo',
      'Água'
    ],
    instructions: [
      'Amasse as bananas',
      'Leve ao fogo com especiarias',
      'Cozinhe mexendo até engrossar',
      'Deixe esfriar'
    ]
  },
  {
    id: 'fit-30',
    name: 'Panqueca doce fitness',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
    description: 'Panqueca doce sem açúcar',
    ingredients: [
      'Aveia',
      'Ovos',
      'Banana',
      'Canela',
      'Mel para servir'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Cozinhe em frigideira',
      'Sirva com mel e frutas'
    ]
  },
  {
    id: 'fit-31',
    name: 'Frango desfiado temperado',
    category: 'fitness',
    isPremium: true,
    time: 15,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    description: 'Frango versátil para várias receitas',
    ingredients: [
      '500g de peito de frango',
      'Cebola e alho',
      'Temperos naturais',
      'Sal',
      'Água'
    ],
    instructions: [
      'Cozinhe o frango com temperos',
      'Desfie ainda quente',
      'Refogue com cebola e alho',
      'Use em diversas preparações'
    ]
  },
  {
    id: 'fit-32',
    name: 'Ovo mexido fitness',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop',
    description: 'Ovos mexidos cremosos e proteicos',
    ingredients: [
      '3 ovos',
      'Sal e pimenta',
      'Cheiro verde',
      'Tomate',
      'Azeite'
    ],
    instructions: [
      'Bata os ovos levemente',
      'Aqueça azeite na frigideira',
      'Adicione os ovos e mexa',
      'Finalize com tomate e cheiro verde'
    ]
  },
  {
    id: 'fit-33',
    name: 'Batata-doce assada',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=300&fit=crop',
    description: 'Carboidrato complexo perfeito para treino',
    ingredients: [
      'Batatas-doces',
      'Azeite',
      'Sal',
      'Alecrim',
      'Páprica'
    ],
    instructions: [
      'Corte as batatas em rodelas',
      'Tempere com azeite e especiarias',
      'Asse a 200°C por 30 minutos',
      'Vire na metade do tempo'
    ]
  },
  {
    id: 'fit-34',
    name: 'Legumes no vapor',
    category: 'fitness',
    isPremium: true,
    time: 15,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    description: 'Legumes preservando todos os nutrientes',
    ingredients: [
      'Brócolis',
      'Cenoura',
      'Couve-flor',
      'Abobrinha',
      'Sal e azeite'
    ],
    instructions: [
      'Corte os legumes uniformemente',
      'Cozinhe no vapor por 10-12 minutos',
      'Tempere com sal e azeite',
      'Sirva quente'
    ]
  },
  {
    id: 'fit-35',
    name: 'Arroz integral temperado',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=400&h=300&fit=crop',
    description: 'Arroz integral saboroso e nutritivo',
    ingredients: [
      'Arroz integral',
      'Alho e cebola',
      'Cenoura ralada',
      'Ervilha',
      'Temperos'
    ],
    instructions: [
      'Refogue alho e cebola',
      'Adicione o arroz e torre',
      'Acrescente água e cozinhe',
      'Finalize com cenoura e ervilha'
    ]
  },
  {
    id: 'fit-36',
    name: 'Salada de grão-de-bico',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop',
    description: 'Salada proteica e refrescante',
    ingredients: [
      'Grão-de-bico cozido',
      'Tomate',
      'Pepino',
      'Cebola roxa',
      'Limão e azeite'
    ],
    instructions: [
      'Pique todos os vegetais',
      'Misture com grão-de-bico',
      'Tempere com limão, azeite e sal',
      'Deixe na geladeira por 30 minutos'
    ]
  },
  {
    id: 'fit-37',
    name: 'Frango com abóbora',
    category: 'fitness',
    isPremium: true,
    time: 25,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    description: 'Combinação nutritiva e saborosa',
    ingredients: [
      'Frango em cubos',
      'Abóbora',
      'Cebola',
      'Alho',
      'Temperos'
    ],
    instructions: [
      'Refogue o frango com temperos',
      'Adicione abóbora em cubos',
      'Cozinhe até amaciar',
      'Finalize com cheiro verde'
    ]
  },
  {
    id: 'fit-38',
    name: 'Peixe com arroz integral',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e5d0c9e?w=400&h=300&fit=crop',
    description: 'Refeição leve e completa',
    ingredients: [
      'Filé de peixe',
      'Arroz integral',
      'Limão',
      'Alho',
      'Temperos'
    ],
    instructions: [
      'Cozinhe o arroz',
      'Tempere e grelhe o peixe',
      'Sirva com legumes'
    ]
  },
  {
    id: 'fit-39',
    name: 'Panqueca proteica salgada',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1590137876181-af5e94d1f6f0?w=400&h=300&fit=crop',
    description: 'Panqueca rica em proteínas',
    ingredients: [
      'Ovos',
      'Aveia',
      'Queijo cottage',
      'Sal',
      'Recheio de frango'
    ],
    instructions: [
      'Bata ovos com aveia',
      'Cozinhe como panqueca',
      'Recheie com frango e queijo'
    ]
  },
  {
    id: 'fit-40',
    name: 'Crepioca fitness',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
    description: 'Mistura de crepe com tapioca',
    ingredients: [
      'Goma de tapioca',
      'Ovos',
      'Recheio de frango',
      'Queijo',
      'Temperos'
    ],
    instructions: [
      'Misture tapioca com ovo batido',
      'Despeje em frigideira',
      'Adicione recheio',
      'Dobre e sirva'
    ]
  },
  {
    id: 'fit-41',
    name: 'Shake rápido de aveia e banana',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
    description: 'Energia rápida e nutritiva',
    ingredients: [
      'Banana',
      'Aveia',
      'Leite',
      'Canela',
      'Mel'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Sirva gelado'
    ]
  },
  {
    id: 'fit-42',
    name: 'Omelete de claras com legumes',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    description: 'Baixo em calorias e rico em proteínas',
    ingredients: [
      '4 claras',
      'Brócolis',
      'Tomate',
      'Cebola',
      'Sal'
    ],
    instructions: [
      'Bata as claras',
      'Refogue os legumes',
      'Despeje as claras',
      'Cozinhe e dobre'
    ]
  },
  {
    id: 'fit-43',
    name: 'Salada fitness com frango',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    description: 'Salada completa e balanceada',
    ingredients: [
      'Alface',
      'Rúcula',
      'Frango grelhado',
      'Tomate cereja',
      'Azeite e limão'
    ],
    instructions: [
      'Monte a base de folhas',
      'Adicione frango em tiras',
      'Acrescente tomates',
      'Tempere e sirva'
    ]
  },
  {
    id: 'fit-44',
    name: 'Quinoa com legumes',
    category: 'fitness',
    isPremium: true,
    time: 20,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1612240498936-65f4b6e6d1e3?w=400&h=300&fit=crop',
    description: 'Superalimento com vegetais',
    ingredients: [
      'Quinoa',
      'Brócolis',
      'Cenoura',
      'Pimentão',
      'Azeite'
    ],
    instructions: [
      'Cozinhe a quinoa',
      'Refogue os legumes',
      'Misture tudo',
      'Tempere com azeite'
    ]
  },
  {
    id: 'fit-45',
    name: 'Smoothie proteico de morango',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'ganhar-massa',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    description: 'Smoothie refrescante e proteico',
    ingredients: [
      'Morangos',
      'Whey protein',
      'Iogurte natural',
      'Banana',
      'Gelo'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'fit-46',
    name: 'Bolo fitness de cenoura',
    category: 'fitness',
    isPremium: true,
    time: 30,
    difficulty: 'Médio',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    description: 'Bolo saudável de cenoura',
    ingredients: [
      'Cenouras',
      'Ovos',
      'Aveia',
      'Óleo de coco',
      'Fermento'
    ],
    instructions: [
      'Bata cenoura com ovos',
      'Adicione aveia e óleo',
      'Acrescente fermento',
      'Asse por 30 minutos'
    ]
  },
  {
    id: 'fit-47',
    name: 'Muffin de banana e aveia',
    category: 'fitness',
    isPremium: true,
    time: 25,
    difficulty: 'Médio',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop',
    description: 'Muffins práticos e saudáveis',
    ingredients: [
      'Bananas maduras',
      'Aveia',
      'Ovos',
      'Canela',
      'Fermento'
    ],
    instructions: [
      'Amasse as bananas',
      'Misture todos os ingredientes',
      'Distribua em forminhas',
      'Asse por 20 minutos'
    ]
  },
  {
    id: 'fit-48',
    name: 'Cookies fitness de aveia',
    category: 'fitness',
    isPremium: true,
    time: 15,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    description: 'Cookies crocantes e saudáveis',
    ingredients: [
      'Aveia',
      'Banana',
      'Pasta de amendoim',
      'Mel',
      'Canela'
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Faça bolinhas e achate',
      'Asse por 12 minutos a 180°C'
    ]
  },
  {
    id: 'fit-49',
    name: 'Panqueca integral de chocolate',
    category: 'fitness',
    isPremium: true,
    time: 10,
    difficulty: 'Fácil',
    goal: 'manter',
    image: 'https://images.unsplash.com/photo-1590137876181-af5e94d1f6f0?w=400&h=300&fit=crop',
    description: 'Panqueca saudável sabor chocolate',
    ingredients: [
      'Aveia',
      'Ovos',
      'Cacau em pó',
      'Banana',
      'Fermento'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Cozinhe em frigideira',
      'Sirva com frutas'
    ]
  },
  {
    id: 'fit-50',
    name: 'Shake detox verde',
    category: 'fitness',
    isPremium: true,
    time: 5,
    difficulty: 'Fácil',
    goal: 'emagrecer',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    description: 'Shake desintoxicante e nutritivo',
    ingredients: [
      'Couve',
      'Limão',
      'Gengibre',
      'Maçã verde',
      'Água de coco'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Coe se preferir',
      'Beba em jejum'
    ]
  }
];

// Receitas Free (Comidas Rápidas, Sobremesas, Bolos, Doces, Drinks)
export const freeRecipes: Recipe[] = [
  // Comidas Rápidas (30 receitas)
  {
    id: 'rap-1',
    name: 'Sanduíche natural simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    description: 'Sanduíche prático e nutritivo para o dia a dia',
    ingredients: [
      'Pão integral',
      'Peito de frango desfiado',
      'Alface',
      'Tomate',
      'Cenoura ralada'
    ],
    instructions: [
      'Corte o pão ao meio',
      'Monte com frango e vegetais',
      'Tempere com sal e limão',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'rap-2',
    name: 'Macarrão ao molho rápido',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop',
    description: 'Macarrão simples com molho de tomate',
    ingredients: [
      '200g de macarrão',
      'Molho de tomate pronto',
      'Alho',
      'Azeite',
      'Manjericão'
    ],
    instructions: [
      'Cozinhe o macarrão al dente',
      'Refogue alho no azeite',
      'Adicione o molho de tomate',
      'Misture o macarrão e sirva'
    ]
  },
  {
    id: 'rap-3',
    name: 'Omelete simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    description: 'Omelete rápido para qualquer refeição',
    ingredients: ['3 ovos', 'Sal', 'Queijo', 'Tomate'],
    instructions: [
      'Bata os ovos com sal',
      'Despeje em frigideira quente',
      'Adicione queijo e tomate',
      'Dobre e sirva'
    ]
  },
  {
    id: 'rap-4',
    name: 'Arroz com ovo',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    description: 'Combinação clássica e rápida',
    ingredients: ['Arroz cozido', '2 ovos', 'Sal', 'Cebolinha', 'Azeite'],
    instructions: [
      'Frite os ovos',
      'Aqueça o arroz',
      'Monte o prato',
      'Finalize com cebolinha'
    ]
  },
  {
    id: 'rap-5',
    name: 'Tapioca simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    description: 'Tapioca versátil e rápida',
    ingredients: ['Goma de tapioca', 'Queijo', 'Presunto', 'Sal'],
    instructions: [
      'Aqueça a frigideira',
      'Espalhe a goma',
      'Adicione recheio',
      'Dobre e sirva'
    ]
  },
  {
    id: 'rap-6',
    name: 'Pão na chapa',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    description: 'Pão francês tostado na manteiga',
    ingredients: ['Pão francês', 'Manteiga', 'Sal'],
    instructions: [
      'Corte o pão ao meio',
      'Passe manteiga',
      'Torre na chapa',
      'Sirva quente'
    ]
  },
  {
    id: 'rap-7',
    name: 'Cuscuz nordestino',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    description: 'Cuscuz tradicional rápido',
    ingredients: ['Flocos de milho', 'Água', 'Sal', 'Manteiga'],
    instructions: [
      'Hidrate os flocos',
      'Cozinhe no vapor',
      'Adicione manteiga',
      'Sirva quente'
    ]
  },
  {
    id: 'rap-8',
    name: 'Batata frita simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 20,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    description: 'Batata frita crocante',
    ingredients: ['Batatas', 'Óleo', 'Sal'],
    instructions: [
      'Corte as batatas em palitos',
      'Frite em óleo quente',
      'Escorra e tempere com sal',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'rap-9',
    name: 'Salada verde simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Salada fresca e rápida',
    ingredients: ['Alface', 'Tomate', 'Cebola', 'Azeite', 'Limão'],
    instructions: [
      'Lave e corte os vegetais',
      'Misture em uma tigela',
      'Tempere com azeite e limão',
      'Sirva fresco'
    ]
  },
  {
    id: 'rap-10',
    name: 'Wrap de frango',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    description: 'Wrap prático e saboroso',
    ingredients: ['Tortilha', 'Frango desfiado', 'Alface', 'Molho', 'Queijo'],
    instructions: [
      'Aqueça a tortilha',
      'Adicione frango e vegetais',
      'Regue com molho',
      'Enrole e sirva'
    ]
  },
  {
    id: 'rap-11',
    name: 'Pizza de frigideira',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    description: 'Pizza rápida feita na frigideira',
    ingredients: ['Massa pronta', 'Molho de tomate', 'Queijo', 'Orégano'],
    instructions: [
      'Coloque a massa na frigideira',
      'Adicione molho e queijo',
      'Tampe e cozinhe por 10 minutos',
      'Finalize com orégano'
    ]
  },
  {
    id: 'rap-12',
    name: 'Sopa instantânea',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    description: 'Sopa prática para dias frios',
    ingredients: ['Sopa em pó', 'Água quente', 'Temperos'],
    instructions: [
      'Ferva a água',
      'Adicione o pó da sopa',
      'Mexa bem',
      'Sirva quente'
    ]
  },
  {
    id: 'rap-13',
    name: 'Cachorro-quente simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1612392062798-2dbaa4d3d6e4?w=400&h=300&fit=crop',
    description: 'Cachorro-quente clássico',
    ingredients: ['Pão', 'Salsicha', 'Molho', 'Batata palha', 'Milho'],
    instructions: [
      'Cozinhe a salsicha',
      'Aqueça o pão',
      'Monte com molhos',
      'Finalize com batata palha'
    ]
  },
  {
    id: 'rap-14',
    name: 'Hambúrguer caseiro',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    description: 'Hambúrguer simples e saboroso',
    ingredients: ['Pão', 'Hambúrguer', 'Queijo', 'Alface', 'Tomate'],
    instructions: [
      'Grelhe o hambúrguer',
      'Torre o pão',
      'Monte com vegetais',
      'Sirva quente'
    ]
  },
  {
    id: 'rap-15',
    name: 'Torrada com ovo',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    description: 'Café da manhã rápido',
    ingredients: ['Pão', 'Ovo', 'Manteiga', 'Sal'],
    instructions: [
      'Torre o pão',
      'Frite o ovo',
      'Monte e sirva'
    ]
  },
  {
    id: 'rap-16',
    name: 'Yakisoba instantâneo',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    description: 'Yakisoba rápido e prático',
    ingredients: ['Macarrão instantâneo', 'Legumes', 'Molho shoyu', 'Ovo'],
    instructions: [
      'Cozinhe o macarrão',
      'Refogue legumes',
      'Misture tudo',
      'Finalize com ovo'
    ]
  },
  {
    id: 'rap-17',
    name: 'Quesadilla rápida',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop',
    description: 'Quesadilla mexicana simples',
    ingredients: ['Tortilha', 'Queijo', 'Frango', 'Pimentão'],
    instructions: [
      'Recheie a tortilha',
      'Dobre ao meio',
      'Grelhe dos dois lados',
      'Corte e sirva'
    ]
  },
  {
    id: 'rap-18',
    name: 'Panqueca americana',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    description: 'Panqueca fofa e doce',
    ingredients: ['Farinha', 'Ovos', 'Leite', 'Açúcar', 'Fermento'],
    instructions: [
      'Misture todos os ingredientes',
      'Despeje na frigideira',
      'Vire quando formar bolhas',
      'Sirva com mel'
    ]
  },
  {
    id: 'rap-19',
    name: 'Crepe simples',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop',
    description: 'Crepe versátil para recheios',
    ingredients: ['Farinha', 'Ovos', 'Leite', 'Sal'],
    instructions: [
      'Bata todos os ingredientes',
      'Despeje em frigideira fina',
      'Recheie a gosto',
      'Enrole e sirva'
    ]
  },
  {
    id: 'rap-20',
    name: 'Bruschetta rápida',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    description: 'Bruschetta italiana simples',
    ingredients: ['Pão italiano', 'Tomate', 'Manjericão', 'Alho', 'Azeite'],
    instructions: [
      'Torre o pão',
      'Esfregue alho',
      'Adicione tomate e manjericão',
      'Regue com azeite'
    ]
  },
  {
    id: 'rap-21',
    name: 'Salada de macarrão',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop',
    description: 'Salada fria de macarrão',
    ingredients: ['Macarrão', 'Maionese', 'Legumes', 'Presunto', 'Queijo'],
    instructions: [
      'Cozinhe o macarrão',
      'Deixe esfriar',
      'Misture com maionese e ingredientes',
      'Sirva gelado'
    ]
  },
  {
    id: 'rap-22',
    name: 'Sanduíche de atum',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    description: 'Sanduíche prático e nutritivo',
    ingredients: ['Pão', 'Atum', 'Maionese', 'Alface', 'Tomate'],
    instructions: [
      'Misture atum com maionese',
      'Monte o sanduíche com vegetais',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'rap-23',
    name: 'Batata recheada',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 30,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    description: 'Batata assada com recheio',
    ingredients: ['Batata grande', 'Queijo', 'Bacon', 'Creme de leite', 'Cebolinha'],
    instructions: [
      'Asse a batata',
      'Abra e retire parte do miolo',
      'Recheie com ingredientes',
      'Leve ao forno por 5 minutos'
    ]
  },
  {
    id: 'rap-24',
    name: 'Risoto instantâneo',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1476124369491-f01e80c2a82d?w=400&h=300&fit=crop',
    description: 'Risoto rápido e cremoso',
    ingredients: ['Arroz arbóreo', 'Caldo', 'Queijo', 'Manteiga', 'Vinho branco'],
    instructions: [
      'Refogue o arroz',
      'Adicione caldo aos poucos',
      'Finalize com queijo e manteiga',
      'Sirva cremoso'
    ]
  },
  {
    id: 'rap-25',
    name: 'Espaguete alho e óleo',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop',
    description: 'Massa simples e saborosa',
    ingredients: ['Espaguete', 'Alho', 'Azeite', 'Pimenta', 'Salsinha'],
    instructions: [
      'Cozinhe o espaguete',
      'Refogue alho no azeite',
      'Misture a massa',
      'Finalize com salsinha'
    ]
  },
  {
    id: 'rap-26',
    name: 'Omelete de forno',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 20,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    description: 'Omelete assado prático',
    ingredients: ['Ovos', 'Leite', 'Queijo', 'Presunto', 'Temperos'],
    instructions: [
      'Bata ovos com leite',
      'Adicione recheio',
      'Despeje em forma',
      'Asse por 15 minutos'
    ]
  },
  {
    id: 'rap-27',
    name: 'Sanduíche grelhado',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    description: 'Sanduíche quente e crocante',
    ingredients: ['Pão', 'Queijo', 'Presunto', 'Manteiga'],
    instructions: [
      'Recheie o pão',
      'Passe manteiga por fora',
      'Grelhe dos dois lados',
      'Sirva quente'
    ]
  },
  {
    id: 'rap-28',
    name: 'Salada Caesar',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Salada clássica Caesar',
    ingredients: ['Alface romana', 'Frango', 'Croutons', 'Parmesão', 'Molho Caesar'],
    instructions: [
      'Lave e corte a alface',
      'Adicione frango grelhado',
      'Acrescente croutons',
      'Regue com molho'
    ]
  },
  {
    id: 'rap-29',
    name: 'Torta de liquidificador',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 30,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
    description: 'Torta salgada rápida',
    ingredients: ['Ovos', 'Leite', 'Farinha', 'Recheio', 'Queijo'],
    instructions: [
      'Bata massa no liquidificador',
      'Despeje metade em forma',
      'Adicione recheio',
      'Cubra e asse'
    ]
  },
  {
    id: 'rap-30',
    name: 'Pão de queijo de frigideira',
    category: 'comidas-rapidas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=300&fit=crop',
    description: 'Pão de queijo sem forno',
    ingredients: ['Polvilho', 'Queijo', 'Ovo', 'Leite', 'Óleo'],
    instructions: [
      'Misture todos os ingredientes',
      'Faça bolinhas',
      'Achate na frigideira',
      'Cozinhe dos dois lados'
    ]
  },

  // Sobremesas (15 receitas)
  {
    id: 'sob-1',
    name: 'Brigadeiro simples',
    category: 'sobremesas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Brigadeiro cremoso tradicional',
    ingredients: ['Leite condensado', 'Chocolate em pó', 'Manteiga', 'Granulado'],
    instructions: [
      'Misture leite condensado, chocolate e manteiga',
      'Cozinhe mexendo até desgrudar',
      'Deixe esfriar',
      'Enrole e passe no granulado'
    ]
  },
  {
    id: 'sob-2',
    name: 'Mousse de chocolate',
    category: 'sobremesas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop',
    description: 'Mousse cremoso e delicioso',
    ingredients: ['Chocolate', 'Creme de leite', 'Leite condensado'],
    instructions: [
      'Derreta o chocolate',
      'Misture com creme de leite',
      'Adicione leite condensado',
      'Leve à geladeira por 2 horas'
    ]
  },
  {
    id: 'sob-3',
    name: 'Pudim de leite',
    category: 'sobremesas',
    isPremium: false,
    time: 60,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Pudim clássico brasileiro',
    ingredients: ['Leite condensado', 'Leite', 'Ovos', 'Açúcar para calda'],
    instructions: [
      'Faça a calda de açúcar',
      'Bata leite condensado, leite e ovos',
      'Despeje sobre a calda',
      'Asse em banho-maria por 50 minutos'
    ]
  },
  {
    id: 'sob-4',
    name: 'Gelatina colorida',
    category: 'sobremesas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    description: 'Gelatina refrescante e colorida',
    ingredients: ['Gelatina em pó', 'Água quente', 'Água fria'],
    instructions: [
      'Dissolva a gelatina em água quente',
      'Adicione água fria',
      'Leve à geladeira por 4 horas'
    ]
  },
  {
    id: 'sob-5',
    name: 'Sorvete caseiro',
    category: 'sobremesas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Sorvete cremoso feito em casa',
    ingredients: ['Creme de leite', 'Leite condensado', 'Frutas'],
    instructions: [
      'Bata creme de leite até ficar firme',
      'Adicione leite condensado',
      'Misture frutas picadas',
      'Congele por 4 horas'
    ]
  },
  {
    id: 'sob-6',
    name: 'Pavê de chocolate',
    category: 'sobremesas',
    isPremium: false,
    time: 20,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Pavê clássico de chocolate',
    ingredients: ['Biscoito', 'Creme de chocolate', 'Leite', 'Chocolate ralado'],
    instructions: [
      'Molhe biscoitos no leite',
      'Faça camadas com creme',
      'Finalize com chocolate ralado',
      'Leve à geladeira por 2 horas'
    ]
  },
  {
    id: 'sob-7',
    name: 'Salada de frutas',
    category: 'sobremesas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop',
    description: 'Salada refrescante de frutas',
    ingredients: ['Frutas variadas', 'Suco de laranja', 'Mel'],
    instructions: [
      'Corte as frutas em cubos',
      'Misture com suco de laranja',
      'Adoce com mel',
      'Sirva gelado'
    ]
  },
  {
    id: 'sob-8',
    name: 'Banana caramelizada',
    category: 'sobremesas',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
    description: 'Banana doce e caramelizada',
    ingredients: ['Bananas', 'Açúcar', 'Manteiga', 'Canela'],
    instructions: [
      'Corte as bananas ao meio',
      'Caramelize o açúcar',
      'Adicione bananas e manteiga',
      'Polvilhe canela'
    ]
  },
  {
    id: 'sob-9',
    name: 'Arroz doce',
    category: 'sobremesas',
    isPremium: false,
    time: 30,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Arroz doce cremoso',
    ingredients: ['Arroz', 'Leite', 'Açúcar', 'Canela', 'Leite condensado'],
    instructions: [
      'Cozinhe o arroz no leite',
      'Adicione açúcar',
      'Finalize com leite condensado',
      'Polvilhe canela'
    ]
  },
  {
    id: 'sob-10',
    name: 'Manjar branco',
    category: 'sobremesas',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Manjar cremoso com calda',
    ingredients: ['Leite', 'Amido de milho', 'Açúcar', 'Coco', 'Calda de ameixa'],
    instructions: [
      'Cozinhe leite com amido e açúcar',
      'Adicione coco',
      'Despeje em forma',
      'Sirva com calda'
    ]
  },
  {
    id: 'sob-11',
    name: 'Creme de papaya',
    category: 'sobremesas',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    description: 'Creme refrescante de mamão',
    ingredients: ['Mamão papaya', 'Sorvete de creme', 'Licor de cassis'],
    instructions: [
      'Bata papaya com sorvete',
      'Adicione licor',
      'Sirva gelado'
    ]
  },
  {
    id: 'sob-12',
    name: 'Petit gateau',
    category: 'sobremesas',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Bolinho com recheio cremoso',
    ingredients: ['Chocolate', 'Ovos', 'Açúcar', 'Farinha', 'Manteiga'],
    instructions: [
      'Derreta chocolate com manteiga',
      'Misture ovos e açúcar',
      'Adicione farinha',
      'Asse por 10 minutos'
    ]
  },
  {
    id: 'sob-13',
    name: 'Tiramisu simples',
    category: 'sobremesas',
    isPremium: false,
    time: 30,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    description: 'Sobremesa italiana clássica',
    ingredients: ['Biscoito champagne', 'Café', 'Mascarpone', 'Cacau', 'Açúcar'],
    instructions: [
      'Molhe biscoitos no café',
      'Faça camadas com creme',
      'Polvilhe cacau',
      'Leve à geladeira'
    ]
  },
  {
    id: 'sob-14',
    name: 'Flan de baunilha',
    category: 'sobremesas',
    isPremium: false,
    time: 50,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Flan cremoso de baunilha',
    ingredients: ['Leite', 'Ovos', 'Açúcar', 'Essência de baunilha'],
    instructions: [
      'Faça calda de açúcar',
      'Bata leite, ovos e baunilha',
      'Asse em banho-maria',
      'Desenforme frio'
    ]
  },
  {
    id: 'sob-15',
    name: 'Palha italiana',
    category: 'sobremesas',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Doce crocante e cremoso',
    ingredients: ['Leite condensado', 'Chocolate', 'Biscoito', 'Manteiga'],
    instructions: [
      'Derreta chocolate com leite condensado',
      'Triture biscoitos',
      'Misture tudo',
      'Leve à geladeira'
    ]
  },

  // Bolos (10 receitas)
  {
    id: 'bol-1',
    name: 'Bolo simples de chocolate',
    category: 'bolos',
    isPremium: false,
    time: 30,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Bolo de chocolate fofinho e saboroso',
    ingredients: ['Chocolate', 'Ovos', 'Açúcar', 'Farinha', 'Manteiga'],
    instructions: [
      'Derreta chocolate com manteiga',
      'Misture ovos e açúcar',
      'Adicione farinha',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-2',
    name: 'Bolo de cenoura',
    category: 'bolos',
    isPremium: false,
    time: 45,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    description: 'Bolo de cenoura com cobertura de chocolate',
    ingredients: ['Cenoura', 'Ovos', 'Açúcar', 'Farinha', 'Óleo', 'Chocolate'],
    instructions: [
      'Bata cenoura com ovos e óleo',
      'Adicione açúcar e farinha',
      'Asse por 40 minutos',
      'Cubra com chocolate derretido'
    ]
  },
  {
    id: 'bol-3',
    name: 'Bolo de fubá',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
    description: 'Bolo de fubá cremoso',
    ingredients: ['Fubá', 'Ovos', 'Açúcar', 'Leite', 'Queijo ralado'],
    instructions: [
      'Bata todos os ingredientes',
      'Despeje em forma untada',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-4',
    name: 'Bolo de laranja',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop',
    description: 'Bolo úmido de laranja',
    ingredients: ['Laranja', 'Ovos', 'Açúcar', 'Farinha', 'Óleo'],
    instructions: [
      'Bata laranja inteira com ovos',
      'Adicione açúcar e farinha',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-5',
    name: 'Bolo de banana',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop',
    description: 'Bolo de banana com canela',
    ingredients: ['Banana', 'Ovos', 'Açúcar', 'Farinha', 'Canela'],
    instructions: [
      'Amasse as bananas',
      'Misture com ovos e açúcar',
      'Adicione farinha e canela',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-6',
    name: 'Bolo de milho',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
    description: 'Bolo cremoso de milho',
    ingredients: ['Milho verde', 'Ovos', 'Açúcar', 'Leite', 'Fubá'],
    instructions: [
      'Bata milho com leite',
      'Adicione ovos e açúcar',
      'Misture fubá',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-7',
    name: 'Bolo de coco',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
    description: 'Bolo úmido de coco',
    ingredients: ['Coco ralado', 'Ovos', 'Açúcar', 'Farinha', 'Leite de coco'],
    instructions: [
      'Misture todos os ingredientes',
      'Despeje em forma',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-8',
    name: 'Bolo mármore',
    category: 'bolos',
    isPremium: false,
    time: 45,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Bolo mesclado de chocolate e baunilha',
    ingredients: ['Ovos', 'Açúcar', 'Farinha', 'Chocolate em pó', 'Baunilha'],
    instructions: [
      'Prepare massa básica',
      'Divida em duas partes',
      'Adicione chocolate em uma',
      'Intercale na forma e asse'
    ]
  },
  {
    id: 'bol-9',
    name: 'Bolo de limão',
    category: 'bolos',
    isPremium: false,
    time: 40,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop',
    description: 'Bolo refrescante de limão',
    ingredients: ['Limão', 'Ovos', 'Açúcar', 'Farinha', 'Óleo'],
    instructions: [
      'Bata ovos com açúcar',
      'Adicione suco de limão',
      'Misture farinha',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'bol-10',
    name: 'Bolo de iogurte',
    category: 'bolos',
    isPremium: false,
    time: 35,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
    description: 'Bolo simples e fofinho',
    ingredients: ['Iogurte natural', 'Ovos', 'Açúcar', 'Farinha', 'Óleo'],
    instructions: [
      'Misture iogurte com ovos',
      'Adicione açúcar e farinha',
      'Asse por 30 minutos'
    ]
  },

  // Doces (10 receitas)
  {
    id: 'doc-1',
    name: 'Doce de leite rápido',
    category: 'doces',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
    description: 'Doce de leite cremoso e rápido',
    ingredients: ['Leite condensado', 'Leite', 'Açúcar', 'Bicarbonato'],
    instructions: [
      'Misture todos os ingredientes',
      'Cozinhe mexendo sempre',
      'Cozinhe até engrossar',
      'Deixe esfriar'
    ]
  },
  {
    id: 'doc-2',
    name: 'Beijinho',
    category: 'doces',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82ffc?w=400&h=300&fit=crop',
    description: 'Beijinho de coco tradicional',
    ingredients: ['Leite condensado', 'Coco ralado', 'Manteiga', 'Cravo'],
    instructions: [
      'Misture leite condensado, coco e manteiga',
      'Cozinhe até desgrudar',
      'Enrole e decore com cravo'
    ]
  },
  {
    id: 'doc-3',
    name: 'Cocada',
    category: 'doces',
    isPremium: false,
    time: 20,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82ffc?w=400&h=300&fit=crop',
    description: 'Cocada branca cremosa',
    ingredients: ['Coco ralado', 'Açúcar', 'Leite', 'Leite condensado'],
    instructions: [
      'Misture todos os ingredientes',
      'Cozinhe até engrossar',
      'Despeje em forma untada',
      'Corte em quadrados'
    ]
  },
  {
    id: 'doc-4',
    name: 'Cajuzinho',
    category: 'doces',
    isPremium: false,
    time: 20,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Doce de amendoim tradicional',
    ingredients: ['Amendoim', 'Leite condensado', 'Açúcar', 'Cravo'],
    instructions: [
      'Triture amendoim',
      'Misture com leite condensado',
      'Cozinhe até desgrudar',
      'Modele e decore'
    ]
  },
  {
    id: 'doc-5',
    name: 'Quindim',
    category: 'doces',
    isPremium: false,
    time: 40,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82ffc?w=400&h=300&fit=crop',
    description: 'Quindim brilhante e saboroso',
    ingredients: ['Gemas', 'Açúcar', 'Coco ralado', 'Manteiga'],
    instructions: [
      'Bata gemas com açúcar',
      'Adicione coco',
      'Despeje em forminhas',
      'Asse em banho-maria'
    ]
  },
  {
    id: 'doc-6',
    name: 'Paçoca caseira',
    category: 'doces',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Paçoca crocante e saborosa',
    ingredients: ['Amendoim torrado', 'Açúcar', 'Farinha de mandioca', 'Sal'],
    instructions: [
      'Triture amendoim',
      'Misture com açúcar e farinha',
      'Adicione sal',
      'Modele e sirva'
    ]
  },
  {
    id: 'doc-7',
    name: 'Pé de moleque',
    category: 'doces',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Doce crocante de amendoim',
    ingredients: ['Amendoim', 'Rapadura', 'Água'],
    instructions: [
      'Derreta rapadura com água',
      'Adicione amendoim',
      'Despeje em forma',
      'Corte ainda quente'
    ]
  },
  {
    id: 'doc-8',
    name: 'Bala de coco',
    category: 'doces',
    isPremium: false,
    time: 15,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82ffc?w=400&h=300&fit=crop',
    description: 'Bala macia de coco',
    ingredients: ['Coco ralado', 'Açúcar', 'Leite', 'Manteiga'],
    instructions: [
      'Cozinhe todos os ingredientes',
      'Mexa até engrossar',
      'Despeje em forma',
      'Corte em quadrados'
    ]
  },
  {
    id: 'doc-9',
    name: 'Doce de abóbora',
    category: 'doces',
    isPremium: false,
    time: 30,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
    description: 'Doce tradicional de abóbora',
    ingredients: ['Abóbora', 'Açúcar', 'Cravo', 'Canela'],
    instructions: [
      'Corte abóbora em cubos',
      'Cozinhe com açúcar',
      'Adicione especiarias',
      'Cozinhe até secar'
    ]
  },
  {
    id: 'doc-10',
    name: 'Bombom caseiro',
    category: 'doces',
    isPremium: false,
    time: 20,
    difficulty: 'Médio',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
    description: 'Bombom recheado artesanal',
    ingredients: ['Chocolate', 'Leite condensado', 'Manteiga', 'Cacau'],
    instructions: [
      'Faça brigadeiro para recheio',
      'Derreta chocolate',
      'Modele os bombons',
      'Cubra com chocolate'
    ]
  },

  // Drinks com álcool (10 receitas)
  {
    id: 'dra-1',
    name: 'Caipirinha rápida',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    description: 'Caipirinha clássica brasileira',
    ingredients: ['Cachaça', 'Limão', 'Açúcar', 'Gelo'],
    instructions: [
      'Macere limão com açúcar',
      'Adicione cachaça e gelo',
      'Misture bem'
    ]
  },
  {
    id: 'dra-2',
    name: 'Mojito',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'Mojito refrescante',
    ingredients: ['Rum branco', 'Hortelã', 'Limão', 'Açúcar', 'Água com gás'],
    instructions: [
      'Macere hortelã com açúcar',
      'Adicione limão e rum',
      'Complete com água com gás e gelo'
    ]
  },
  {
    id: 'dra-3',
    name: 'Gin Tônica',
    category: 'drinks-alcool',
    isPremium: false,
    time: 3,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    description: 'Gin tônica clássico',
    ingredients: ['Gin', 'Água tônica', 'Limão', 'Gelo'],
    instructions: [
      'Coloque gelo no copo',
      'Adicione gin',
      'Complete com água tônica',
      'Decore com limão'
    ]
  },
  {
    id: 'dra-4',
    name: 'Margarita',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'Margarita mexicana',
    ingredients: ['Tequila', 'Cointreau', 'Limão', 'Sal', 'Gelo'],
    instructions: [
      'Passe limão na borda do copo',
      'Passe no sal',
      'Bata tequila, cointreau e limão com gelo',
      'Sirva'
    ]
  },
  {
    id: 'dra-5',
    name: 'Piña Colada',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&h=300&fit=crop',
    description: 'Piña colada tropical',
    ingredients: ['Rum branco', 'Leite de coco', 'Suco de abacaxi', 'Gelo'],
    instructions: [
      'Bata todos os ingredientes no liquidificador',
      'Sirva em copo gelado',
      'Decore com abacaxi'
    ]
  },
  {
    id: 'dra-6',
    name: 'Caipiroska',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    description: 'Caipirinha com vodka',
    ingredients: ['Vodka', 'Limão', 'Açúcar', 'Gelo'],
    instructions: [
      'Macere limão com açúcar',
      'Adicione vodka e gelo',
      'Misture bem'
    ]
  },
  {
    id: 'dra-7',
    name: 'Cuba Libre',
    category: 'drinks-alcool',
    isPremium: false,
    time: 3,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    description: 'Rum com cola e limão',
    ingredients: ['Rum', 'Coca-cola', 'Limão', 'Gelo'],
    instructions: [
      'Coloque gelo no copo',
      'Adicione rum',
      'Complete com coca-cola',
      'Esprema limão'
    ]
  },
  {
    id: 'dra-8',
    name: 'Aperol Spritz',
    category: 'drinks-alcool',
    isPremium: false,
    time: 3,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'Drink italiano refrescante',
    ingredients: ['Aperol', 'Prosecco', 'Água com gás', 'Laranja', 'Gelo'],
    instructions: [
      'Coloque gelo no copo',
      'Adicione Aperol e Prosecco',
      'Complete com água com gás',
      'Decore com laranja'
    ]
  },
  {
    id: 'dra-9',
    name: 'Cosmopolitan',
    category: 'drinks-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'Drink elegante e rosado',
    ingredients: ['Vodka', 'Cointreau', 'Suco de cranberry', 'Limão', 'Gelo'],
    instructions: [
      'Bata todos os ingredientes com gelo',
      'Coe para taça',
      'Decore com casca de limão'
    ]
  },
  {
    id: 'dra-10',
    name: 'Sangria',
    category: 'drinks-alcool',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    description: 'Sangria espanhola com frutas',
    ingredients: ['Vinho tinto', 'Frutas', 'Açúcar', 'Suco de laranja', 'Gelo'],
    instructions: [
      'Corte frutas em pedaços',
      'Misture com vinho e suco',
      'Adoce a gosto',
      'Sirva gelado'
    ]
  },

  // Drinks sem álcool (10 receitas)
  {
    id: 'drs-1',
    name: 'Suco detox simples',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    description: 'Suco verde nutritivo e refrescante',
    ingredients: ['Couve', 'Limão', 'Maçã', 'Gengibre', 'Água'],
    instructions: [
      'Bata todos os ingredientes',
      'Coe se preferir',
      'Sirva gelado'
    ]
  },
  {
    id: 'drs-2',
    name: 'Limonada suíça',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400&h=300&fit=crop',
    description: 'Limonada cremosa e refrescante',
    ingredients: ['Limão', 'Leite condensado', 'Água', 'Gelo'],
    instructions: [
      'Bata limão com casca, leite condensado e água',
      'Coe',
      'Sirva com gelo'
    ]
  },
  {
    id: 'drs-3',
    name: 'Vitamina de frutas',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    description: 'Vitamina cremosa de frutas',
    ingredients: ['Banana', 'Morango', 'Leite', 'Mel', 'Gelo'],
    instructions: [
      'Bata todos os ingredientes',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'drs-4',
    name: 'Chá gelado de frutas',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    description: 'Chá gelado refrescante',
    ingredients: ['Chá preto', 'Frutas vermelhas', 'Limão', 'Mel', 'Gelo'],
    instructions: [
      'Prepare o chá e deixe esfriar',
      'Adicione frutas e limão',
      'Adoce com mel',
      'Sirva com gelo'
    ]
  },
  {
    id: 'drs-5',
    name: 'Smoothie de frutas tropicais',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    description: 'Smoothie tropical refrescante',
    ingredients: ['Manga', 'Abacaxi', 'Banana', 'Água de coco', 'Gelo'],
    instructions: [
      'Bata todas as frutas com água de coco',
      'Adicione gelo',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'drs-6',
    name: 'Suco de laranja natural',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    description: 'Suco fresco de laranja',
    ingredients: ['Laranjas', 'Açúcar (opcional)', 'Gelo'],
    instructions: [
      'Esprema as laranjas',
      'Adoce se desejar',
      'Sirva com gelo'
    ]
  },
  {
    id: 'drs-7',
    name: 'Milkshake de chocolate',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    description: 'Milkshake cremoso de chocolate',
    ingredients: ['Sorvete de chocolate', 'Leite', 'Chocolate em pó', 'Chantilly'],
    instructions: [
      'Bata sorvete com leite',
      'Adicione chocolate em pó',
      'Sirva com chantilly'
    ]
  },
  {
    id: 'drs-8',
    name: 'Água saborizada',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400&h=300&fit=crop',
    description: 'Água refrescante com frutas',
    ingredients: ['Água', 'Limão', 'Hortelã', 'Frutas vermelhas', 'Gelo'],
    instructions: [
      'Corte frutas em rodelas',
      'Adicione à água com hortelã',
      'Deixe na geladeira por 2 horas',
      'Sirva gelado'
    ]
  },
  {
    id: 'drs-9',
    name: 'Limonada de morango',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 5,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400&h=300&fit=crop',
    description: 'Limonada rosada e saborosa',
    ingredients: ['Limão', 'Morango', 'Açúcar', 'Água', 'Gelo'],
    instructions: [
      'Bata morangos com água',
      'Adicione suco de limão',
      'Adoce a gosto',
      'Sirva com gelo'
    ]
  },
  {
    id: 'drs-10',
    name: 'Chocolate quente',
    category: 'drinks-sem-alcool',
    isPremium: false,
    time: 10,
    difficulty: 'Fácil',
    goal: 'geral',
    image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&h=300&fit=crop',
    description: 'Chocolate quente cremoso',
    ingredients: ['Leite', 'Chocolate em pó', 'Açúcar', 'Canela', 'Chantilly'],
    instructions: [
      'Aqueça o leite',
      'Adicione chocolate e açúcar',
      'Mexa até dissolver',
      'Sirva com chantilly'
    ]
  }
];

// Planos Premium
export const premiumPlans: PremiumPlan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    duration: 'mensal',
    price: 19.90,
    benefits: [
      'Acesso a 50 receitas fitness exclusivas',
      'Cardápio semanal personalizado',
      'Shakes pré e pós-treino',
      'Receitas de doces e bolos fitness',
      'Suporte via WhatsApp',
      'Atualizações mensais de receitas'
    ]
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    duration: 'trimestral',
    price: 49.90,
    originalPrice: 59.70,
    benefits: [
      'Tudo do plano mensal',
      'Economia de 17%',
      'Lista de compras automática',
      'Calculadora de macros',
      'Receitas bônus exclusivas',
      '3 meses de acesso garantido'
    ]
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    duration: 'anual',
    price: 149.90,
    originalPrice: 238.80,
    benefits: [
      'Tudo dos planos anteriores',
      'Economia de 37%',
      'Acesso vitalício a novas receitas',
      'Consultoria nutricional mensal',
      'Grupo VIP no Telegram',
      'E-book de receitas bônus',
      'Prioridade no suporte'
    ]
  }
];

// Todas as receitas combinadas
export const allRecipes: Recipe[] = [...fitnessRecipes, ...freeRecipes];
