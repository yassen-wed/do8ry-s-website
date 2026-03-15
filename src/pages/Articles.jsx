import { useState, useMemo } from 'react';
import { articles, CATEGORIES } from '../data/articles';
import { ArticleCard } from './Home';

export default function Articles() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return articles.filter((a) => {
            const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                !q ||
                a.title.toLowerCase().includes(q) ||
                a.excerpt.toLowerCase().includes(q) ||
                a.content.toLowerCase().includes(q) ||
                a.tags.some((t) => t.toLowerCase().includes(q));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="bg-navy py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold/30">
                        📝 Knowledge Hub
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-cream mb-4">Articles</h1>
                    <p className="text-cream/60 text-lg max-w-2xl mx-auto">
                        Insights, ideas, and stories from the do8ry community.
                    </p>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4 items-center">
                    {/* Search */}
                    <div className="relative w-full sm:max-w-xs">
                        <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy bg-white text-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Category filters */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide flex-1">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${selectedCategory === cat
                                        ? 'bg-navy text-cream border-navy'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <span className="text-sm text-gray-500 shrink-0">
                        {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-navy mb-2">No articles found</h3>
                            <p className="text-gray-500 mb-6">Try adjusting your search or filter.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="btn-primary"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
