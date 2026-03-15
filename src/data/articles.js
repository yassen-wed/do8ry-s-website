// ============================================================
// ARTICLES DATA FILE
// ============================================================
// HOW TO ADD A NEW ARTICLE:
// 1. Copy one of the article objects below
// 2. Give it a unique `id` (increment from last one)
// 3. Fill in all fields
// 4. Add any new category to the CATEGORIES list at the bottom
// ============================================================

export const articles = [
    {
        id: 1,
        title: "The Power of Community Initiatives",
        titleAr: "قوة مبادرات المجتمع",
        excerpt: "How grassroots movements are transforming local communities and creating lasting impact beyond expectations.",
        excerptAr: "كيف تُحوّل الحركات الشعبية المجتمعات المحلية وتُحدث أثراً دائماً يتجاوز التوقعات.",
        content: `
Community initiatives have always been at the heart of social change. When individuals come together with a shared vision, they can achieve what governments and large organizations often cannot — genuine, ground-level transformation.

At do8ry, we believe that every community has untapped potential waiting to be unlocked. Our work focuses on identifying passionate individuals and equipping them with the tools, knowledge, and network they need to make real change.

## Why Community Matters

Communities are the building blocks of society. They shape culture, values, and opportunities. When a community thrives, its members thrive. When it struggles, everyone feels the impact.

Research consistently shows that communities with strong social networks and active participation have:
- Higher rates of educational attainment
- Lower crime rates
- Better mental and physical health outcomes
- Greater economic resilience

## The do8ry Approach

We use a three-pillar approach: **Connect**, **Empower**, and **Sustain**.

**Connect** means bringing people together across divides — across neighborhoods, age groups, and backgrounds.

**Empower** means providing training, resources, and mentorship so that community members can lead their own initiatives.

**Sustain** means building systems and habits that outlast any single project or person.

## Looking Forward

The journey is just beginning. Join us as we continue to prove that with the right support, every community can shine.
    `,
        contentAr: "",
        author: "do8ry Team",
        date: "2025-03-01",
        category: "Community",
        tags: ["community", "initiative", "impact"],
        readTime: "5 min",
        image: null,
    },
    {
        id: 2,
        title: "Youth Leadership: Building Tomorrow's Changemakers",
        titleAr: "قيادة الشباب: بناء صانعي التغيير في المستقبل",
        excerpt: "Young people are not just the future — they are the present. Here's how do8ry supports youth leadership.",
        excerptAr: "الشباب ليسوا مستقبلنا فحسب، بل هم حاضرنا. إليك كيف تدعم دو8ري قيادة الشباب.",
        content: `
Young people are among the most powerful agents of change in any society. They bring energy, creativity, and a fresh perspective that is essential for tackling today's most pressing challenges.

## Why Youth Leadership?

Studies show that young leaders who are supported early in their lives go on to create disproportionate positive impact in their communities. They start businesses, run NGOs, mentor others, and advocate for policies that lift entire communities.

At do8ry, our youth programs are designed to:

1. **Build Confidence** – through workshops, public speaking training, and leadership exercises
2. **Develop Skills** – from project management to communication and critical thinking
3. **Create Networks** – connecting young leaders with mentors and peers across the region
4. **Launch Projects** – giving young people real resources to bring their ideas to life

## Success Stories

In our first cohort, we supported 12 young leaders who launched initiatives ranging from local clean-up campaigns to digital literacy programs for seniors.

## How to Get Involved

Whether you are a young person looking to grow or an experienced professional looking to mentor, do8ry has a place for you. Reach out and let's build something great together.
    `,
        contentAr: "",
        author: "do8ry Team",
        date: "2025-02-15",
        category: "Youth",
        tags: ["youth", "leadership", "empowerment"],
        readTime: "4 min",
        image: null,
    },
    {
        id: 3,
        title: "Social Innovation: New Solutions to Old Problems",
        titleAr: "الابتكار الاجتماعي: حلول جديدة لمشكلات قديمة",
        excerpt: "How creative thinking and social innovation are opening new pathways to solving community challenges.",
        excerptAr: "كيف يفتح التفكير الإبداعي والابتكار الاجتماعي مسارات جديدة لحل تحديات المجتمع.",
        content: `
Social innovation is the process of developing and deploying effective solutions to challenging and often systemic social and environmental issues, in support of social progress.

## What Makes an Innovation "Social"?

A social innovation isn't just a new idea — it's a new idea that works *for people and planet*, not just for profit. It could be:

- A new service model that reaches underserved populations
- A technology that solves a local problem with local means
- A policy change that unlocks new possibilities for communities
- A community practice that builds resilience and belonging

## do8ry's Innovation Labs

We run quarterly innovation labs where community members come together to:

1. Identify a real local challenge
2. Ideate creative solutions
3. Prototype quickly and cheaply
4. Test with real community feedback
5. Iterate and scale what works

## Join the Movement

Social innovation is not reserved for experts or academics. The best insights come from the people living the problems. If you have an idea, let's explore it together.
    `,
        contentAr: "",
        author: "do8ry Team",
        date: "2025-01-20",
        category: "Innovation",
        tags: ["innovation", "social", "creativity"],
        readTime: "6 min",
        image: null,
    },
    {
        id: 4,
        title: "Volunteerism: The Foundation of Strong Communities",
        titleAr: "التطوع: أساس المجتمعات القوية",
        excerpt: "A look at how volunteering shapes character, builds skills, and strengthens the social fabric.",
        excerptAr: "نظرة على كيفية قيام التطوع بتشكيل الشخصية وبناء المهارات وتعزيز النسيج الاجتماعي.",
        content: `
Volunteerism is one of the oldest and most powerful forces in human society. When people choose to give their time and energy without expecting anything in return, something remarkable happens — communities transform.

## The Value of Volunteering

Volunteering benefits everyone involved:

**For volunteers:**
- Develops professional and soft skills
- Builds meaningful relationships
- Increases sense of purpose and well-being
- Opens doors to new opportunities

**For communities:**
- Fills service gaps
- Builds social trust and cohesion
- Multiplies the impact of resources
- Creates a culture of giving

## How do8ry Mobilizes Volunteers

We run a structured volunteer program that matches people's skills and interests with real community needs. Every volunteer goes through an onboarding process and is supported throughout their journey.

## Start Volunteering Today

No experience needed. Just a desire to make a difference. Apply through our social media or contact us directly to find the right opportunity for you.
    `,
        contentAr: "",
        author: "do8ry Team",
        date: "2025-01-05",
        category: "Volunteering",
        tags: ["volunteering", "community", "service"],
        readTime: "4 min",
        image: null,
    },
];

// ============================================================
// CATEGORIES
// ============================================================
// Add new category names here to make them available in the filter
// ============================================================
export const CATEGORIES = [
    "All",
    "Community",
    "Youth",
    "Innovation",
    "Volunteering",
    // Add new categories here ↓
];
