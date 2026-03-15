import { useState } from 'react';
import { posts } from '../data/posts';

const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const HeartIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export default function Posts() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark/20" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30 backdrop-blur-sm">
                        <InstagramIcon />
                        Instagram Posts
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Posts</h1>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                        Follow our journey on Instagram — moments, events, and updates from the community.
                    </p>
                    <a
                        href="https://www.instagram.com/do8ry/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-8 py-3 rounded-xl hover:bg-cream transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <InstagramIcon />
                        @do8ry on Instagram
                    </a>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => {
                            const isExpanded = expandedId === post.id;
                            return (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                >
                                    {/* Card top (Instagram-style) */}
                                    <div className="relative h-52 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 flex items-center justify-center">
                                        <div className="text-6xl opacity-20">📸</div>
                                        <div className="absolute top-4 left-4 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                    <img src="/logo-nobg.png" alt="do8ry" className="w-6 h-6 object-contain"
                                                        onError={(e) => { e.target.outerHTML = '<span class="text-xs font-bold text-navy">D8</span>'; }} />
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold text-dark bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">@do8ry</span>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-pink-500 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <HeartIcon />
                                            {post.likes}
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5">
                                        <p className={`text-gray-700 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                                            {post.caption}
                                        </p>
                                        {post.caption.length > 120 && (
                                            <button
                                                onClick={() => setExpandedId(isExpanded ? null : post.id)}
                                                className="text-navy text-xs font-semibold mt-1 hover:text-gold transition-colors"
                                            >
                                                {isExpanded ? 'less' : 'more'}
                                            </button>
                                        )}

                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                            <span className="text-gray-400 text-xs">
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity hover:scale-105 duration-200"
                                            >
                                                <InstagramIcon />
                                                View Post
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Follow CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-4">Want to see more? Follow us on Instagram for daily updates.</p>
                        <a
                            href="https://www.instagram.com/do8ry/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <InstagramIcon />
                            Follow @do8ry
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
