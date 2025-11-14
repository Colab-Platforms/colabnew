export interface BlogPost {
  title: string;
  author: string;
  date: string;
  slug: string;
  content: string;
  image: string;
  category?: string;
  excerpt?: string;
  tags?: string[];
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Asia Cup 2025: Indian Women's Hockey Team Faces Challenge Without Deepika and Savita",
    author: "Sports Desk",
    date: "05 September, 2025",
    slug: "asia-cup-2025-indian-womens-hockey-without-savita-deepika",
    category: "Sports",
    excerpt: "As the Indian women's hockey team embarks on its Asia Cup 2025 campaign in Hangzhou, the squad faces a daunting challenge competing without two of its most crucial players.",
    tags: ["Hockey", "Asia Cup", "Women's Sports"],
    readTime: "5 min read",
    content: `
    <p>As the Indian women's hockey team embarks on its <strong>Asia Cup 2025</strong> campaign in Hangzhou, the squad faces a daunting challenge competing without two of its most crucial players: stalwart goalkeeper <strong>Savita Punia</strong> and rising forward–drag-flick specialist <strong>Deepika</strong>. With <strong>World Cup qualification</strong> on the line, this setback comes at a critical time, testing the resilience and depth of the side under head coach <strong>Harendra Singh</strong>.</p>

    <h2>Key Absences: A Double Blow</h2>
    <p>Savita Punia, the experienced goalkeeper who has been a pillar of India's defence for over a decade, suffered a tendon injury during the Pro League and has been advised six to eight weeks of rest. Meanwhile, Deepika, a rising star in the forward line known for her powerful drag flicks, sustained a hamstring and groin injury on the final day of the pre-tournament camp.</p>
    <blockquote>"This is the first time in a decade or so that we will be without Savita in a major tournament. Deepika's loss is a big one, but the team is mentally prepared to substitute her presence," said Harendra Singh.</blockquote>

    <h2>Defensive Reinforcements Offer Hope</h2>
    <p>India's recent Pro League performances exposed defensive frailties, conceding more than 50 penalty corners, 35% of which resulted in goals. But with <strong>Udita</strong> and <strong>Nikki Pradhan</strong> returning, bringing over 300 international caps between them, plus <strong>Ishika Chaudhary</strong> back to full fitness, the backline gains crucial depth.</p>
    <blockquote>"Udita and Nikki know how to hold the line, when to push up, and when to drop back. Their experience is invaluable," Harendra emphasized.</blockquote>

    <h2>Conclusion</h2>
    <p>India enters Hangzhou carrying both setbacks and high expectations. With leaders like <strong>Udita</strong>, <strong>Nikki Pradhan</strong>, and <strong>Navneet Kaur</strong> steering the team, and youngsters like <strong>Sangita Kumari</strong> eager to shine, this Asia Cup 2025 could be the defining moment where India proves that pressure truly is a privilege.</p>
    `,
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/INDIAN-WOMENs-HOCKEY-TEAM-1024x576-1.webp?v=1757152037"
  },
  {
    title: "BCCI Breaks Silence on Shreyas Iyer's ODI Captaincy Speculation: What's Really Happening?",
    author: "Sports Desk",
    date: "22 August, 2025",
    slug: "bcci-shreyas-iyer-odi-captaincy",
    category: "Cricket",
    excerpt: "Indian cricket is no stranger to rumours and high-voltage speculation, especially when it comes to leadership transitions in key formats.",
    tags: ["Cricket", "BCCI", "Shreyas Iyer"],
    readTime: "6 min read",
    content: `
    <p>Indian cricket is no stranger to rumours and high-voltage speculation, especially when it comes to leadership transitions in key formats. Over the past few days, the cricketing fraternity has been buzzing with reports suggesting that <strong>Shreyas Iyer</strong> might be the frontrunner to succeed <strong>Rohit Sharma</strong> as India's next ODI captain.</p>

    <h2>The Rumour Mill: Shreyas Iyer as the Next ODI Captain?</h2>
    <p>Multiple media outlets reported that Shreyas Iyer was "leading the race" to take over as India's ODI skipper, with BCCI allegedly considering relieving Rohit Sharma of the leadership burden as he nears the twilight of his illustrious career.</p>

    <h2>BCCI's Response: Rumours Quashed</h2>
    <p>Despite the chatter, BCCI secretary <strong>Devajit Saikia</strong> dismissed the reports, calling them baseless. Speaking to <em>Hindustan Times</em>, Saikia said:</p>
    <blockquote>"That's news to me. There have been no such discussions."</blockquote>

    <h2>Conclusion: Rumours vs Reality</h2>
    <p>The Shreyas Iyer ODI captaincy rumours reflect the passion and speculation that surround Indian cricket, especially during transition phases. While fans are eager to see the next generation of leaders emerge, the BCCI has made its stance clear there is no imminent change in ODI leadership.</p>
    `,
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/00kskc38_shreyas-iyer-afp_625x300_21_August_25.webp?v=1755843388"
  },
  {
    title: "The Future of Sports Technology in India",
    author: "Tech Desk",
    date: "15 August, 2025",
    slug: "future-sports-technology-india",
    category: "Technology",
    excerpt: "How AI and analytics are revolutionizing athlete performance and training methodologies across Indian sports.",
    tags: ["Technology", "AI", "Sports Analytics"],
    readTime: "5 min read",
    content: `
    <p>The intersection of sports and technology is creating unprecedented opportunities for athletes and teams across India. From AI-powered performance analytics to virtual reality training systems, technology is reshaping how we approach sports excellence.</p>

    <h2>AI-Powered Performance Analytics</h2>
    <p>Modern sports analytics platforms are using artificial intelligence to provide real-time insights into athlete performance, helping coaches make data-driven decisions that can make the difference between winning and losing.</p>

    <h2>The Road Ahead</h2>
    <p>As India continues to invest in sports technology infrastructure, we're seeing a new generation of athletes who are tech-savvy and data-driven, ready to compete on the global stage with cutting-edge tools at their disposal.</p>
    `,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80"
  },
  {
    title: "Esports Revolution: India's Gaming Renaissance",
    author: "Gaming Desk",
    date: "10 August, 2025",
    slug: "esports-revolution-india-gaming",
    category: "Esports",
    excerpt: "The rise of professional gaming in India and how esports is becoming a mainstream career option for young talent.",
    tags: ["Esports", "Gaming", "Youth"],
    readTime: "4 min read",
    content: `
    <p>India's esports industry is experiencing explosive growth, with millions of young gamers aspiring to turn their passion into professional careers. The ecosystem is rapidly maturing with organized tournaments, professional teams, and substantial prize pools.</p>

    <h2>Professional Gaming Infrastructure</h2>
    <p>Major investments in gaming infrastructure, training facilities, and coaching programs are helping Indian esports athletes compete at international levels. The industry is projected to grow exponentially in the coming years.</p>

    <h2>Future Prospects</h2>
    <p>With increasing recognition from traditional sports bodies and growing corporate sponsorships, esports in India is poised for a golden era of growth and opportunity.</p>
    `,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"
  },
  {
    title: "AI Innovation: Transforming Defense Technology",
    author: "Defense Tech",
    date: "5 August, 2025",
    slug: "ai-innovation-defense-technology",
    category: "Technology",
    excerpt: "Exploring how artificial intelligence is revolutionizing defense systems and security solutions in modern warfare.",
    tags: ["AI", "Defense", "Innovation"],
    readTime: "6 min read",
    content: `
    <p>Artificial intelligence is fundamentally transforming defense technology, enabling smarter, faster, and more effective security solutions. From autonomous systems to predictive analytics, AI is reshaping modern defense strategies.</p>

    <h2>Autonomous Defense Systems</h2>
    <p>AI-powered autonomous systems are enhancing surveillance, threat detection, and response capabilities, providing defense forces with unprecedented situational awareness and decision-making support.</p>

    <h2>The Future of Defense</h2>
    <p>As AI technology continues to evolve, we're witnessing the emergence of next-generation defense solutions that promise to keep nations safer while reducing human risk in dangerous situations.</p>
    `,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
  },
  {
    title: "Drone Technology: The Sky is Not the Limit",
    author: "Drone Tech",
    date: "1 August, 2025",
    slug: "drone-technology-innovations",
    category: "Technology",
    excerpt: "How autonomous aerial systems are changing industries from agriculture to defense, and everything in between.",
    tags: ["Drones", "Technology", "Innovation"],
    readTime: "5 min read",
    content: `
    <p>Drone technology has evolved from a niche hobby to a transformative force across multiple industries. Today's autonomous aerial systems are sophisticated machines capable of complex tasks that were once impossible or too dangerous for humans.</p>

    <h2>Applications Across Industries</h2>
    <p>From precision agriculture and infrastructure inspection to emergency response and defense operations, drones are proving their worth across diverse sectors, delivering efficiency, safety, and cost savings.</p>

    <h2>The Future of Flight</h2>
    <p>As drone technology continues to advance with better AI, longer flight times, and enhanced capabilities, we're only beginning to scratch the surface of what's possible in autonomous aerial systems.</p>
    `,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80"
  }
];
