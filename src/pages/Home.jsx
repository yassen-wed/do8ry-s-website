import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const stats = [
    { value: '50+', label: 'Workshops Held' },
    { value: '200+', label: 'Community Members' },
    { value: '12', label: 'Active Projects' },
    { value: '3', label: 'Cities Reached' },
];

const pillars = [
    {
        icon: '🤝',
        title: 'Connect',
        description: 'Bringing people together across backgrounds, neighborhoods, and generations to build real relationships.',
    },
    {
        icon: '🚀',
        title: 'Empower',
        description: 'Providing training, mentorship, and resources so community members can lead their own change.',
    },
    {
        icon: '🌱',
        title: 'Sustain',
        description: 'Building systems and habits that create lasting impact long after any single project ends.',
    },
];

export default function Home() {
    const latestArticles = articles.slice(0, 3);

    return (
        <main>
            {/* ── Hero ─────────────────────────────── */}
            <section className="min-h-screen relative overflow-hidden bg-navy flex items-center">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cream blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left animate-slide-up">
                        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold/30">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            Community Initiative
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-tight mb-6">
                            Moving{' '}
                            <span className="text-gold">Forward</span>
                            <br />
                            Together
                        </h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                            do8ry is a community initiative dedicated to connecting, empowering, and sustaining the changemakers of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link to="/about" className="btn-primary text-base px-8 py-4">
                                Learn About Us
                            </Link>
                            <Link to="/articles" className="inline-flex items-center gap-2 border-2 border-cream/40 text-cream px-8 py-4 rounded-lg font-semibold hover:border-gold hover:text-gold transition-all duration-300">
                                Read Articles
                            </Link>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-110" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center animate-float">
                                <img
                                    src="/logo-nobg.png"
                                    alt="do8ry"
                                    className="w-52 h-52 md:w-64 md:h-64 object-contain"
                                    onError={(e) => {
                                        e.target.outerHTML = '<span class="text-8xl font-black text-gold">D8</span>';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 text-xs animate-bounce">
                    <span>Scroll</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* ── Stats Bar ────────────────────────── */}
            <section className="bg-gold py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="text-3xl md:text-4xl font-black text-dark">{s.value}</div>
                                <div className="text-dark/70 font-medium text-sm mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pillars ──────────────────────────── */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Three Pillars</h2>
                        <p className="section-subtitle mx-auto text-center">
                            Everything we do is built on three foundational principles that guide our work.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((p, i) => (
                            <div
                                key={p.title}
                                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-navy group"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="text-5xl mb-4">{p.icon}</div>
                                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{p.description}</p>
                                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-navy/5 group-hover:bg-gold/20 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Latest Articles ───────────────────── */}
            <section className="py-24 bg-navy">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-2">Latest Articles</h2>
                            <p className="text-cream/60">Insights and updates from the do8ry community.</p>
                        </div>
                        <Link to="/articles" className="text-gold hover:text-cream font-semibold flex items-center gap-2 transition-colors group">
                            View All
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {latestArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} dark />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────── */}
            <section className="py-24 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-navy to-navy/80 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                        <div className="relative">
                            <h2 className="text-3xl md:text-5xl font-black text-cream mb-6">
                                Ready to Make a <span className="text-gold">Difference?</span>
                            </h2>
                            <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
                                Join the do8ry community and be part of something meaningful.
                            </p>
                            <a
                                href="https://www.instagram.com/do8ry/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gold text-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-cream hover:text-navy transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Follow us on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// ── Shared Article Card ──────────────────
export function ArticleCard({ article, dark = false }) {
    const categoryColors = {
        Community: 'bg-navy/20 text-navy',
        Youth: 'bg-gold/20 text-yellow-700',
        Innovation: 'bg-purple-100 text-purple-700',
        Volunteering: 'bg-green-100 text-green-700',
    };

    const darkCategoryColors = {
        Community: 'bg-cream/20 text-cream',
        Youth: 'bg-gold/30 text-gold',
        Innovation: 'bg-purple-400/20 text-purple-300',
        Volunteering: 'bg-green-400/20 text-green-300',
    };

    const colorMap = dark ? darkCategoryColors : categoryColors;

    return (
        <Link to={`/articles/${article.id}`} className="group block">
            <div className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        ${dark ? 'bg-white/5 border-white/10 hover:border-gold/50' : 'bg-white border-gray-100 hover:border-navy/30'}`}>
                {/* Image placeholder */}
                <div className={`h-40 flex items-center justify-center text-4xl
          ${dark ? 'bg-white/5' : 'bg-cream'}`}>
                    {article.category === 'Community' && '🤝'}
                    {article.category === 'Youth' && '🚀'}
                    {article.category === 'Innovation' && '💡'}
                    {article.category === 'Volunteering' && '❤️'}
                    {!['Community', 'Youth', 'Innovation', 'Volunteering'].includes(article.category) && '📄'}
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`badge text-xs ${colorMap[article.category] || (dark ? 'bg-cream/20 text-cream' : 'bg-gray-100 text-gray-600')}`}>
                            {article.category}
                        </span>
                        <span className={`text-xs ${dark ? 'text-cream/40' : 'text-gray-400'}`}>{article.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-lg mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-200
            ${dark ? 'text-cream' : 'text-dark'}`}>
                        {article.title}
                    </h3>
                    <p className={`text-sm leading-relaxed line-clamp-3 mb-4 ${dark ? 'text-cream/60' : 'text-gray-500'}`}>
                        {article.excerpt}
                    </p>
                    <div className={`flex items-center justify-between text-xs ${dark ? 'text-cream/40' : 'text-gray-400'}`}>
                        <span>{article.author}</span>
                        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
