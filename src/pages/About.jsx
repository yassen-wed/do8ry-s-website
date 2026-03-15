const team = [
    {
        name: 'Team Lead',
        role: 'Co-Founder & Director',
        bio: 'Passionate about community development and social innovation.',
        emoji: '👤',
    },
    {
        name: 'Community Manager',
        role: 'Co-Founder & Outreach',
        bio: 'Building bridges between people and creating spaces for meaningful connection.',
        emoji: '👤',
    },
    {
        name: 'Content Lead',
        role: 'Creative & Communications',
        bio: 'Telling the stories that matter to inspire and engage the wider community.',
        emoji: '👤',
    },
    {
        name: 'Programs Coordinator',
        role: 'Events & Programs',
        bio: 'Designing and running initiatives that create real impact on the ground.',
        emoji: '👤',
    },
];

const milestones = [
    { year: '2024', title: 'do8ry Founded', description: 'We launched with a small team and a big vision to empower communities.' },
    { year: '2024', title: 'First Workshop', description: 'Our inaugural community workshop brought together over 50 participants.' },
    { year: '2025', title: 'Youth Program Launch', description: 'We launched our flagship youth leadership program with 12 mentees.' },
    { year: '2025', title: 'Growing Community', description: 'Reached 200+ community members across 3 cities.' },
];

export default function About() {
    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="bg-navy py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-cream blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold/30">
                        🏠 About do8ry
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-cream mb-6">Who We Are</h1>
                    <p className="text-cream/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        do8ry is a community initiative built on the belief that everyone has the potential to be a changemaker.
                        We connect, empower, and sustain individuals who want to make a difference.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-navy hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🎯</div>
                            <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To connect passionate individuals with the tools, people, and opportunities they need to create
                                meaningful, lasting change in their communities — starting local and dreaming global.
                            </p>
                        </div>
                        <div className="bg-navy rounded-2xl p-8 shadow-md border-t-4 border-gold hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🌟</div>
                            <h2 className="text-2xl font-bold text-gold mb-4">Our Vision</h2>
                            <p className="text-cream/80 leading-relaxed">
                                A world where every community is led by empowered, informed, and connected individuals who believe
                                in something bigger than themselves and act on it every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-subtitle mx-auto">The principles that guide everything we do.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🤍', title: 'Integrity', desc: 'We do what we say and say what we mean, always.' },
                            { icon: '🔥', title: 'Passion', desc: 'We care deeply about the communities we serve.' },
                            { icon: '🤝', title: 'Collaboration', desc: 'We believe the best solutions come together.' },
                            { icon: '💡', title: 'Innovation', desc: 'We embrace new ideas and creative problem-solving.' },
                        ].map((v) => (
                            <div key={v.title} className="text-center p-6 rounded-2xl bg-cream hover:bg-gold/10 transition-colors duration-300 group border border-transparent hover:border-gold/30">
                                <div className="text-4xl mb-3">{v.icon}</div>
                                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">Our Journey</h2>
                        <p className="text-cream/60">Key milestones from where we started to where we are today.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2" />
                        <div className="flex flex-col gap-10">
                            {milestones.map((m, i) => (
                                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Line dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-navy z-10 mt-1.5" />
                                    {/* Content */}
                                    <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                                        <span className="inline-block text-gold font-black text-lg mb-1">{m.year}</span>
                                        <h3 className="text-cream font-bold text-xl mb-2">{m.title}</h3>
                                        <p className="text-cream/60 leading-relaxed">{m.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Meet the Team</h2>
                        <p className="section-subtitle mx-auto">The passionate people behind do8ry.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-navy/20"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-navy/60 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {member.emoji}
                                </div>
                                <h3 className="font-bold text-dark text-lg mb-1">{member.name}</h3>
                                <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / Join CTA */}
            <section className="py-20 bg-gold">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-dark mb-6">Join the Movement</h2>
                    <p className="text-dark/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                        Whether you want to volunteer, partner, or simply stay connected — we'd love to have you in the do8ry family.
                    </p>
                    <a
                        href="https://www.instagram.com/do8ry/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-navy text-cream px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Connect on Instagram
                    </a>
                </div>
            </section>
        </main>
    );
}
