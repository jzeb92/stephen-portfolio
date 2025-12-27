/**
 * Stephen Carlick Portfolio - Content Configuration
 * 
 * Edit this file to update projects, testimonials, and site content.
 * All content is stored here for easy management.
 */

const SITE_DATA = {
  // Personal Info
  name: "Stephen Carlick",
  title: "Copywriter / Editor / Content Lead",
  
  // Positioning statement (hero) - supports HTML for links
  positioning: "I'm Stephen — an editor and writer who lives at the intersection of culture, community, and commerce. I've spent the last decade shaping editorial voice across owned channels: running daily publishing at <a href=\"https://exclaim.ca/writers/stephen_carlick\" target=\"_blank\" rel=\"noopener noreferrer\">Exclaim!</a>, building performance-minded content for <a href=\"https://www.penguin.co.uk/writers/stephen-carlick\" target=\"_blank\" rel=\"noopener noreferrer\">Penguin Random House</a>, and writing longform interviews and features for titles like GQ. My strength is making audiences feel seen — translating internet language and cultural signals into sharp, human copy that earns attention (and then converts it).",
  
  // Contact
  email: "stephencarlick@gmail.com",
  phone: "+44 7500 657389",
  linkedin: "https://uk.linkedin.com/in/stephen-carlick-baab8547",
  pdfDownload: null, // Disabled
  
  // Brands/outlets for logo strip
  brands: [
    { name: "Exclaim!", logo: "/images/logo-exclaim.png" },
    { name: "Penguin Random House", logo: "/images/logo-penguin.png" },
    { name: "GQ", logo: "/images/logo-gq.png" },
    { name: "The Independent", logo: "/images/logo-independent.png" },
    { name: "Curb", logo: null },
    { name: "Brightseeds", logo: null }
  ],
  
  // Skills section
  skills: [
    "Define tone of voice across social, editorial, and email",
    "Interview creators, founders, and cultural voices",
    "Shape community-led narratives that spark conversation",
    "Write performance-minded copy without losing personality",
    "Collaborate closely with designers and creative teams"
  ],
  
  // About section
  about: {
    paragraph: "After a decade in editorial leadership and brand content, I've learned that good copy isn't about sounding clever — it's about making people feel understood. I bring editorial instincts to commercial problems and commercial awareness to editorial projects.",
    waysIWork: [
      "I listen more than I talk (especially in interviews)",
      "I write tight, then tighten again",
      "I think about audiences, not just stakeholders",
      "I move fast without losing precision",
      "I care about the words — and the spaces between them"
    ]
  },
  
  // Hero image
  heroImage: {
    src: "/images/stephen.jpg",
    alt: "Stephen Carlick",
    placeholder: false
  },

  // Projects
  projects: [
    {
      id: "exclaim",
      title: "Exclaim! Magazine",
      subtitle: "Exclaim.ca",
      role: "Senior Editor",
      years: "2012–2019",
      thumbnail: {
        src: "/images/exclaim-LCD.png",
        alt: "Exclaim! magazine cover",
        placeholder: false
      },
      summary: "For nearly a decade, I curated and edited articles and reviews for Canada's most respected music publication. I led a team of editors and writers across a monthly print magazine and a fast-moving daily site — deciding what mattered, and how to talk about it.",
      focus: [
        "Owning and protecting tone of voice across platforms",
        "Interviewing artists and cultural figures weekly",
        "Shaping raw conversations into publishable narratives",
        "Responding to cultural moments at speed, without losing clarity",
        "Publishing for communities, not just clicks"
      ],
      links: [
        { text: "Joanna Newsom interview", url: "https://exclaim.ca/music/article/joanna_newsom-harp_wants_what_it_wants" },
        { text: "David Bowie: Essential Guide", url: "https://exclaim.ca/music/article/an_essential_guide_to_david_bowie" },
        { text: "Charli XCX interview", url: "https://exclaim.ca/music/article/charli_xcx-on_her_terms" },
        { text: "Carly Rae Jepsen cover story", url: "https://exclaim.ca/music/article/carly_rae_jepsens_dedicated_is_proof_that_e_mo_tion_was_no_fluke", featured: true }
      ],
      artefacts: [
        { type: "image", src: "/images/exclaim-LCD.png", alt: "Exclaim! magazine cover featuring LCD Soundsystem", placeholder: false }
      ]
    },
    {
      id: "penguin",
      title: "Penguin Random House",
      subtitle: "UK",
      role: "Lead Digital Editor",
      years: "2020–2023",
      thumbnail: {
        src: "/images/penguin-thumb.jpg",
        alt: "Penguin Random House digital content",
        placeholder: true
      },
      summary: "I led digital editorial across owned channels, writing and shaping content designed to meet readers where they were — then guide them somewhere new. Working cross-functionally with marketing, insight, and design teams, I helped set the standard for how Penguin shows up online.",
      focus: [
        "Leading editorial voice across email, social, and SEO",
        "Balancing cultural relevance with clear commercial outcomes",
        "Collaborating with influencers and BookTok creators",
        "Spearheading brand campaigns (including 'Did You Know?' Christmas 2023)"
      ],
      links: [
        { text: "Beyond BookTok", url: "https://www.penguin.co.uk/discover/articles/beyond-booktok" },
        { text: "Penguin's pop culture influence", url: "https://www.penguin.co.uk/discover/articles/penguin-books-influenced-pop-culture" },
        { text: "Irvine Welsh interview", url: "https://www.penguin.co.uk/discover/articles/i-dont-fear-death-21-questions-with-irvine-welsh" },
        { text: "Social content examples", url: "https://www.instagram.com/p/CxdetVrSs8W/", featured: true }
      ],
      artefacts: [
        { type: "image", src: "/images/penguin-booktok.png", alt: "Penguin Random House BookTok content", placeholder: false }
      ]
    },
    {
      id: "freelance",
      title: "Freelance Journalism",
      subtitle: "GQ, The Independent & more",
      role: "Freelance Writer",
      years: "2011–2025",
      thumbnail: {
        src: "/images/GQ.png",
        alt: "GQ magazine feature",
        placeholder: false
      },
      summary: "Features, interviews, and reported pieces across UK, US, and Canadian publications. Longform writing on culture, mental health, and the unexpected corners of everyday life.",
      focus: [
        "Longform features on mental health and culture",
        "Interviews with authors, artists, and cultural figures",
        "Reported pieces on niche subcultures"
      ],
      links: [
        { text: "Yes, your therapist is talking about you (GQ)", url: "#", featured: true },
        { text: "Chris Ware interview", url: "#" },
        { text: "How has the spelling bee become cool?", url: "https://www.independent.co.uk/life-style/adult-spelling-bee-history-spellbound-film-b2573318.html" }
      ],
      artefacts: [
        { type: "image", src: "/images/GQ2.png", alt: "GQ magazine therapy article illustration", placeholder: false }
      ]
    },
    {
      id: "curb",
      title: "Curb",
      subtitle: "Health-tech app",
      role: "UX Copywriter",
      years: "2024",
      thumbnail: {
        src: "/images/curb-thumb.jpg",
        alt: "Curb app interface",
        placeholder: true
      },
      summary: "Product and lifecycle copy for a health-tech app supporting people working to change habits. I focused on empathetic, goal-forward language that reduces friction and keeps users moving.",
      focus: [
        "Onboarding flows that feel doable",
        "Prompts that support without moralising",
        "Microcopy that respects user context",
        "Introductory email sequences"
      ],
      links: [],
      artefacts: [],
      note: "App remains in closed trials"
    },
    {
      id: "brightseeds",
      title: "Brightseeds",
      subtitle: "UK-based Ukrainian charity",
      role: "Copywriter & Strategist",
      years: "2025",
      thumbnail: {
        src: "/images/brightseeds-thumb.jpg",
        alt: "Brightseeds charity website",
        placeholder: true
      },
      summary: "Content strategy and website copy for a charity keeping education on track for Ukrainian schoolchildren during wartime. Balancing clarity, urgency, and sensitivity in a highly charged context.",
      focus: [
        "Website structure and copy",
        "Fundraising slide decks",
        "School-to-school twinning project communications"
      ],
      links: [
        { text: "Together: UK-Ukraine twinning project", url: "#" }
      ],
      artefacts: []
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      quote: "Whether he's editing others or writing his own articles about mental health, literature and life, Stephen's work is always attentive and precise. He's a pleasure to read.",
      author: "Sam Parker",
      role: "Site Director",
      company: "GQ"
    },
    {
      quote: "We hired Stephen for copywriting, but he provided much more than that, including precious digital insights about how copy can affect user behaviour.",
      author: "Valeria Samborska",
      role: "CEO",
      company: "Brightseeds"
    },
    {
      quote: "During his 10 years at Exclaim!, Stephen was hard-working and reliable, an organized self-starter who works well with others.",
      author: "Atsuko Kobasigawa",
      role: "Director of Operations",
      company: "Exclaim!",
      expanded: "Stephen had to communicate with a diverse group of writers, photographers and illustrators across Canada, USA and Europe, nurturing story ideas and ensuring that deadlines were met. He was always respectful and sensitive to other points of view, which made him an effective collaborator and leader."
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}

