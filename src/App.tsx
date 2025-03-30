import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'shonen', name: 'Shonen' },
    { id: 'seinen', name: 'Seinen' },
    { id: 'shojo', name: 'Shojo' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center mb-4">Mundo dos Mangás</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Buscar mangás..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/xUxxB94kGb4"
              title="Mangás em Destaque"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">One Piece</h3>
            <p className="text-gray-400">Uma aventura épica sobre piratas em busca do maior tesouro do mundo.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Berserk</h3>
            <p className="text-gray-400">Uma história dark fantasy sobre vingança e sobrevivência.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Fruits Basket</h3>
            <p className="text-gray-400">Uma história sobre uma garota que descobre uma família com poderes especiais.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
