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
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone-flying-in-silhouette-against-the-blue-sky-2024-11-27-13-22-09-utc.jpg?v=1763195285"
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
  },
      {
                  title: "Shubman Gill Likely to Miss Out on Asia Cup T20I Squad as Selectors Stick to Core Group",
                  author: "Sports Desk",
                  date: "22 August, 2025",
                  slug: "shubman-gill-asia-cup-squad",
                  content: `
    <p>With the <strong>Asia Cup 2025 T20I tournament</strong> fast approaching, the Indian cricket team selectors are facing a key dilemma whether or not to include Test captain <strong>Shubman Gill</strong> in the squad. Despite Gill's strong recent performances in red-ball cricket and his consistency in the IPL, the selectors and team management appear inclined to maintain the existing squad composition that brought success post the 2024 T20 World Cup.</p>

    <p>Sources close to the Board of Control for Cricket in India (BCCI) indicate that Gill is unlikely to be picked in the 15-member squad for the Asia Cup, set to be played from September 9 to 28 in Dubai. The final selection meeting is scheduled for August 19, but early signs point to the selectors favoring continuity over experimentation.</p>

    <h2>Why Gill Is Being Overlooked</h2>
    <p>Despite being among the top run-scorers in IPL 2025 with 650 runs, Shubman Gill seems to be outside the current T20 plans. The team management and selectors have maintained a consistent approach since the 2024 T20 World Cup, preferring players who have been part of their long-term vision for the shortest format.</p>

    <p>Gill’s last T20I appearance came in July 2024 against Sri Lanka in Pallekele. Since then, India has played multiple T20I series against Bangladesh, South Africa, and England and Gill was not selected for any of them. These exclusions suggest that the team management sees his role as more suited to Tests and possibly ODIs rather than the fast-paced T20 format.</p>

    <blockquote>“If Gill is included, then he will have to open the innings. But if he doesn’t get a game, there’s no point in having him in the squad. It would also be unfair on someone like Sanju Samson who has performed consistently.” Source close to BCCI</blockquote>

    <h2>Current Openers in Favor</h2>
    <p>India has been backing <strong>Abhishek Sharma</strong> and <strong>Sanju Samson</strong> as their frontline openers, and both have shown form and composure at the top. Abhishek’s aggressive left-handed approach brings balance to the lineup, while Samson has impressed with consistent performances, adapting well to different match situations.</p>

    <p>The third opener in contention is <strong>Yashasvi Jaiswal</strong>, who, although didn’t get a game during the 2024 T20 World Cup, remains a key part of the future plans. The selectors are reportedly unwilling to sacrifice Jaiswal’s spot for Gill, further indicating the strength of the current top-order options.</p>

    <h2>Tilak Varma’s Spot Also Safe</h2>
    <p>One of the more debated options among selectors was whether to replace <strong>Tilak Varma</strong> with Gill. Varma has been India’s rising star in T20Is and is currently ranked No. 2 in the ICC T20I batting rankings. Dropping him at this stage would send the wrong message to a young player who has been delivering on the international stage.</p>

    <blockquote>“Dropping Varma now would be unfair. He’s performed under pressure, and the team sees him as a long-term middle-order option in T20Is.”Selector</blockquote>

    <h2>Gill’s T20 Credentials Still Strong</h2>
    <p>While the selectors are leaning toward stability, Shubman Gill’s numbers speak volumes. He was the fourth-highest run-scorer in IPL 2025, behind <strong>Sai Sudharsan (759)</strong>, <strong>Suryakumar Yadav (717)</strong>, and <strong>Virat Kohli (657)</strong>. His consistency and ability to anchor innings make him a valuable asset, but the current team philosophy seems to favor explosive and flexible players who can adapt quickly in the T20 format.</p>

    <p>Interestingly, his recent leadership in the Test series against England, where a young Indian side managed a 2-2 draw, had sparked conversations about making him the all-format captain. However, selectors appear to be resisting the temptation to fast-track Gill’s rise across formats.</p>

    <h2>Suryakumar Yadav to Continue as T20I Captain</h2>
    <p>Amid these selection debates, the one constant is <strong>Suryakumar Yadav’s captaincy</strong>. He has cleared his fitness tests and will continue leading the Indian T20I side. Under Surya’s leadership, India has maintained a strong record, with no series losses to date. His form and tactical acumen have impressed the selectors, and he remains a pivotal figure in India’s T20 setup.</p>

    <h2>Selectors Prioritize Continuity</h2>
    <p>The underlying message from the selection committee seems clear: back the group that brought success in the 2024 World Cup and build on that momentum. Experimenting just before a major tournament like the Asia Cup could disrupt team balance and morale.</p>

    <p>There is also a reluctance to include players who may not find a spot in the playing XI. Selectors want to avoid a scenario where a high-profile player like Shubman Gill ends up warming the bench a situation that would not only be uncomfortable but also potentially disruptive to the team environment.</p>

    <h2>Final Decision Looms</h2>
    <p>All eyes will be on the <strong>August 19 selection meeting</strong>, where BCCI secretary Devajit Saikia will join the selectors and team management for the final discussions. While a surprise inclusion cannot be completely ruled out, the tone of the conversations so far suggests that Gill may have to wait longer to make his return to T20I cricket.</p>

    <p>The Asia Cup will serve as a critical platform for India to test its core players before moving toward future ICC events. With the T20 World Cup 2026 also on the horizon, the focus is firmly on grooming a stable, in-form squad with proven match-winners.</p>

    <h2>Conclusion</h2>
    <p>Shubman Gill’s exclusion from the Asia Cup T20I squad, if confirmed, will undoubtedly spark debates among fans and pundits. However, the Indian team management appears to have taken a calculated decision based on form, team balance, and recent performances.</p>

    <p>While Gill remains a generational talent and an integral part of India’s red-ball future, he may need to further evolve his T20 game or wait for an opportunity when the team setup allows for his inclusion. For now, the selectors are sticking with a formula that has worked and they don’t want to fix what isn’t broken.</p>
  `,
                  image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/subham_gill.avif?v=1755843257"
                },
];
