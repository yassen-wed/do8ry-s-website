import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticleDetail() {
    const { id } = useParams();
    const article = articles.find((a) => a.id === Number(id));

    if (!article) return <Navigate to="/articles" replace />;

    // Find related articles (same category, different id)
    const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 2);

    // Render simple markdown-ish content (bold with **, headings with ##)
    const renderContent = (text) => {
        return text
            .trim()
            .split('\n')
            .map((line, i) => {
                if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-3xl font-bold text-navy mt-10 mb-4">{line.replace('# ', '')}</h1>;
                }
                if (line.startsWith('- ')) {
                    return (
                        <li key={i} className="ml-6 list-disc text-gray-700 leading-relaxed mb-1">
                            {renderInline(line.replace('- ', ''))}
                        </li>
                    );
                }
                if (/^\d+\./.test(line)) {
                    const content = line.replace(/^\d+\.\s/, '');
                    return (
                        <li key={i} className="ml-6 list-decimal text-gray-700 leading-relaxed mb-1">
                            {renderInline(content)}
                        </li>
                    );
                }
                if (line.trim() === '') return <div key={i} className="h-3" />;
                return <p key={i} className="text-gray-700 leading-relaxed mb-2">{renderInline(line)}</p>;
            });
    };

    const renderInline = (text) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-navy">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const categoryColors = {
        Community: 'bg-navy/15 text-navy',
        Youth: 'bg-gold/20 text-yellow-700',
        Innovation: 'bg-purple-100 text-purple-700',
        Volunteering: 'bg-green-100 text-green-700',
    };

    return (
        <main className="min-h-screen pt-20">
            {/* Breadcrumb */}
            <div className="bg-cream border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-navy transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/articles" className="hover:text-navy transition-colors">Articles</Link>
                    <span>/</span>
                    <span className="text-navy truncate max-w-[200px]">{article.title}</span>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`badge text-sm ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
                        {article.category}
                    </span>
                    {article.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                    <span className="text-xs text-gray-400 ml-auto">{article.readTime} read</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-black text-dark leading-tight mb-6">
                    {article.title}
                </h1>

                {/* Author & Date */}
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-cream font-bold text-sm">
                        {article.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-dark text-sm">{article.author}</p>
                        <p className="text-gray-400 text-xs">
                            {new Date(article.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>

                {/* Excerpt/Lead */}
                <blockquote className="bg-navy/5 border-l-4 border-gold rounded-r-xl px-6 py-4 mb-10 text-navy font-medium text-lg leading-relaxed italic">
                    {article.excerpt}
                </blockquote>

                {/* Content */}
                <div className="prose max-w-none text-base">
                    {renderContent(article.content)}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-navy/10 text-navy rounded-full text-sm font-medium hover:bg-navy hover:text-cream transition-colors cursor-pointer">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Navigation */}
                <div className="mt-12 flex gap-4">
                    <Link to="/articles" className="btn-outline gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        All Articles
                    </Link>
                </div>
            </article>

            {/* Related Articles */}
            {related.length > 0 && (
                <section className="bg-cream border-t border-gray-200 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-navy mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {related.map((a) => (
                                <Link key={a.id} to={`/articles/${a.id}`} className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 hover:border-navy/30">
                                    <span className={`badge text-xs mb-3 block ${categoryColors[a.category] || 'bg-gray-100 text-gray-600'}`} style={{ display: 'inline-block' }}>
                                        {a.category}
                                    </span>
                                    <h3 className="font-bold text-dark group-hover:text-navy transition-colors mb-2">{a.title}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2">{a.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
