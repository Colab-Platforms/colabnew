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
  }
];
