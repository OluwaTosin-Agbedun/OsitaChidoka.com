export type Essay = {
  slug: string;
  year: number;
  title: string;
  month: string;
  category: string;
  summary: string;
  content: string[];
  views?: number;
  downloads?: number;
  pdfUrl?: string;
};

export const essays: Essay[] = [
  {
    slug: "reclaiming-the-nigerian-state",
    year: 2026,
    title: "Reclaiming the Nigerian State",
    month: "July 2026",
    category: "POLITICS",
    summary: "Keynote address delivered at the 28th Wole Soyinka Lecture and inauguration of NAS Martyrs' Day, Port Harcourt. Nigeria's renewal requires more than constitutional restructuring or institutional reform — it requires a shared moral consensus about what public power is for, what citizenship must guarantee and what Nigerians owe one another. Through the lens of accountability, justice and civic courage, this lecture traces the distance between Nigeria's founding aspirations and its present reality.",
    views: 142,
    downloads: 38,
    pdfUrl: "#",
    content: [
      "Keynote address delivered at the 28th Wole Soyinka Lecture and inauguration of NAS Martyrs' Day, Port Harcourt.",
      "The state is not merely a collection of administrative machinery, nor is it simply a flag, a constitution, or a treasury. In its highest expression, the state is a moral agreement among free citizens to organize their collective existence around principles of justice, security, and mutual obligation.",
      "When we look at Nigeria today, we observe a dangerous divergence between the formal apparatus of government and the live moral consciousness of our people. For millions of citizens, the state has become distant, transactional, and too frequently coercive. The primary task of our generation is not merely to win elections or amend clauses, but to reclaim the moral authority of public power.",
      "Reclaiming the state requires three foundational shifts: First, restoring accountability as an enforceable standard rather than a political rhetoric. Second, defining a minimum social threshold below which no Nigerian citizen will be permitted to fall. Third, building civic courage that moves from passive complaint to organized, disciplined demand for institutional performance.",
      "It was Wole Soyinka who reminded us that 'the man dies in all who keep silent in the face of tyranny.' Today, tyranny does not only wear military boots; it wears the cloak of institutional indifference, grand corruption, and the normalization of public decay. To reclaim Nigeria, we must awaken the citizen."
    ]
  },
  {
    slug: "governance-foundation-africa-future",
    year: 2026,
    title: "Governance as the Foundation for Africa's Future",
    month: "June 2026",
    category: "DEVELOPMENT",
    summary: "A lead paper delivered at Nnamdi Azikiwe University arguing that Africa's growth will become real development only when public institutions earn trust through transparency, accountability and visible delivery. It calls for transparent, accountable institutions that make public decisions, spending, and performance easier to examine.",
    views: 98,
    downloads: 24,
    pdfUrl: "#",
    content: [
      "Lead paper delivered at the Public Policy Symposium, Nnamdi Azikiwe University, Awka.",
      "Economic statistics and GDP expansion numbers often obscure a fundamental reality: without institutional capability, economic growth produces concentrated wealth alongside general vulnerability. Growth without governance is a fragile edifice.",
      "In many African nations, public expenditure remains shrouded in administrative obscurity. Decisions regarding resource allocation, infrastructure awards, and civil service recruitment are too often conducted far from public scrutiny. This lack of transparency undermines investor confidence and fractures the social contract.",
      "We must transition from discretionary governance to rule-based systems. A rule-based administration relies on automated processes, open procurement portals, independent audit mechanisms, and meritocratic human resource management.",
      "Africa's young population demands an environment where talent, rather than political patronage, determines outcomes. When governance becomes predictable and fair, domestic innovation flourishes and international capital finds a secure harbor."
    ]
  },
  {
    slug: "ekulu-at-70-story-of-decline-and-renewal",
    year: 2026,
    title: "Ekulu at 70: How One School Tells the Nigerian Story of Decline and the Duty of Renewal",
    month: "May 2026",
    category: "YOUTH",
    summary: "A reflection on educational decline and the responsibility of each generation to renew the institutions it inherits.",
    views: 114,
    downloads: 19,
    pdfUrl: "#",
    content: [
      "A personal and historical reflection on public education in Eastern Nigeria.",
      "Ekulu Primary School in Enugu once stood as a monument to public excellence. It brought together children of civil servants, traders, academics, and artisans under an equalizing educational standard. To walk through its halls in the 1960s and 70s was to experience the promise of a rising post-independence nation.",
      "To visit the same school today is to confront the tragic trajectory of Nigeria's social infrastructure. Roofs sagged, libraries emptied, and teacher training neglected — Ekulu became a microcosm of our collective institutional surrender.",
      "Yet, nostalgia is not a strategy. The story of Ekulu demands a duty of renewal. We cannot wait for distant centralized ministries to fix community institutions. Alumni networks, civic associations, and local governments must form new governance models to rebuild public schooling as a driver of social mobility.",
      "When we rebuild a primary school, we do not merely lay bricks; we restore a child's belief that society values their mind and their future."
    ]
  },
  {
    slug: "fragments-of-time-foreign-service-years",
    year: 2026,
    title: "Fragments of Time: My Foreign Service Years — A Book Review",
    month: "May 2026",
    category: "POLITICS",
    summary: "A review on public service, diplomacy, and the distance between national capacity and consistent follow-through.",
    views: 76,
    downloads: 11,
    pdfUrl: "#",
    content: [
      "Reflections on ambassadorial memoirs and the craft of international diplomacy.",
      "Diplomacy is the art of projecting national power, values, and economic interests beyond domestic borders. In 'Fragments of Time', the author captures the golden era of Nigerian foreign policy — when African liberation was our non-negotiable compass and Lagos was a hub of continental strategy.",
      "The memoir reveals a sharp contrast with modern foreign service operations, where budget delays, ad-hoc appointments, and fragmented strategic messaging have weakened Nigeria's diplomatic posture.",
      "A nation's foreign policy can never rise above its domestic cohesion. If our internal security is fragile and our economy volatile, our envoys speak with diminished leverage in global assemblies.",
      "To regain our rightful stature in global affairs, Nigeria must recommit to professional diplomatic training, institutional memory, and alignment between foreign commitments and domestic capabilities."
    ]
  },
  {
    slug: "beyond-participation-rebuilding-political-culture",
    year: 2026,
    title: "Beyond Participation: Rebuilding Nigeria's Political Culture for a New Generation",
    month: "April 2026",
    category: "POLITICS",
    summary: "An examination of political belief, civic participation, and a new culture of purposeful improvement.",
    views: 165,
    downloads: 42,
    pdfUrl: "#",
    content: [
      "Published in the Policy & Governance Quarterly.",
      "Voter turnout in Nigerian presidential elections has steadily declined over recent cycles, reaching historic lows. While commentators often label this as civic apathy, a deeper analysis reveals a rational withdrawal by citizens who perceive electoral cycles as elite games with fixed outcomes.",
      "Participation must be redefined beyond the act of casting a ballot every four years. True democratic culture requires continuous civic organizing, policy engagement at ward levels, budget monitoring, and demand for local council performance.",
      "Youth movements must move from digital outrage to institutional capture — organizing political clubs, mastering electoral law, drafting policy papers, and contesting local elections.",
      "Power yields nothing without a organized demand. Rebuilding political culture means equipping a new generation with the tools of sustained, strategic civic engagement."
    ]
  },
  {
    slug: "architecture-of-career-ascent-part-2-trap-of-busyness",
    year: 2026,
    title: "The Architecture of Career Ascent: Part 2 — The Trap of Busyness",
    month: "April 2026",
    category: "LEADERSHIP",
    summary: "Why activity is not the same as progress, and how professionals can turn disciplined effort into measurable impact.",
    views: 188,
    downloads: 51,
    pdfUrl: "#",
    content: [
      "A masterclass essay for young executives and public sector managers.",
      "In modern corporate and public organizations, busyness has become a proxy for competence. Calendars packed with back-to-back meetings, endless email chains, and late-night messages create an illusion of high productivity while core strategic objectives remain unfulfilled.",
      "The trap of busyness stems from a failure to distinguish between transactional tasks and transformational outcomes. High performers do not measure their worth by hours spent sitting in committees, but by structural problems solved.",
      "To escape this trap, professionals must adopt three habits: First, ruthlessly audit time allocations against strategic priority goals. Second, cultivate deep work blocks free from digital interruption. Third, learn the discipline of saying 'no' to non-essential demands.",
      "Career ascent is built on focused execution and leverage, not exhaustion."
    ]
  },
  {
    slug: "architecture-of-career-ascent",
    year: 2026,
    title: "The Architecture of Career Ascent",
    month: "April 2026",
    category: "DEVELOPMENT",
    summary: "A practical essay on depth, sponsorship, responsibility, and building systems that outlast individual careers.",
    views: 230,
    downloads: 64,
    pdfUrl: "#",
    content: [
      "Part 1 of the Career Leadership Series.",
      "Building a lasting career in public administration or private enterprise requires deliberate design rather than opportunistic drift. Most people focus exclusively on acquiring titles, missing the deeper structural pillars that sustain professional longevity.",
      "The first pillar is technical mastery. In the early stages of a career, there is no substitute for deep, rigorous competence in your chosen field.",
      "The second pillar is institutional trust. Leaders are trusted with expanded mandates not because they are brilliant, but because they demonstrate consistent integrity, emotional intelligence, and dependability under pressure.",
      "The third pillar is legacy building — creating operational manuals, mentoring junior successors, and designing processes that survive your departure."
    ]
  },
  {
    slug: "from-alibi-to-agency-south-east-agenda",
    year: 2026,
    title: "From Alibi to Agency: Re-Inventing the South-East Through Data, Discipline and Purpose",
    month: "January 2026",
    category: "POLITICS",
    summary: "A regional development agenda centred on data, education, infrastructure, cooperation, and accountable execution.",
    views: 310,
    downloads: 87,
    pdfUrl: "#",
    content: [
      "Keynote presentation delivered at the South-East Economic Summit.",
      "For decades, discourse regarding the economic position of the South-East region has hovered between historical grievances and political marginalization complaints. While historical context matters, grievance is an inadequate foundation for economic development.",
      "We must transition from alibi to agency. The South-East possesses immense human capital, vibrant entrepreneurial clusters in Aba, Onitsha, and Nnewi, and an extensive global diaspora eager to invest.",
      "A modern regional agenda requires five concrete pillars: First, establishing a unified South-East Economic Commission with statutory authority for cross-state infrastructure projects. Second, converting commercial hubs into digital manufacturing zones with reliable power and internet connectivity. Third, leveraging diaspora capital through structured regional investment bonds.",
      "Fourth, reforming state land registries to enable fast commercial titling. Fifth, establishing world-class technical institutes like the Mekaria Institute to train thousands of engineers, programmers, and logistics specialists annually."
    ]
  },
  {
    slug: "art-and-practice-of-influencing-policy",
    year: 2025,
    title: "The Art and Practice of Influencing Policy",
    month: "December 2025",
    category: "POLITICS",
    summary: "A policy masterclass on technical credibility, political intelligence, and moral authority.",
    views: 154,
    downloads: 36,
    pdfUrl: "#",
    content: [
      "Essays on public sector reform and legislative advocacy.",
      "Good ideas rarely become public policy on account of their intrinsic merit alone. In the complex arena of governance, evidence must be paired with political intelligence and tactical timing.",
      "Policy advocates often fail because they treat policymakers as neutral judges awaiting academic papers. In reality, decision-makers operate under severe time constraints, competing interest group pressures, and political survival imperatives.",
      "To influence policy effectively, three components are required: Sound data that withstands technical scrutiny, a clear political narrative that connects policy to the decision-maker's mandate, and a coalitional strategy that aligns civil society, media, and private sector stakeholders.",
      "When technical rigour meets political discipline, meaningful policy transformation becomes possible."
    ]
  },
  {
    slug: "leadership-crisis-in-africa-alibi-to-agency",
    year: 2025,
    title: "The Leadership Crisis in Africa: From Alibi to Agency",
    month: "October 2025",
    category: "POLITICS",
    summary: "A leadership philosophy that replaces excuses with preparation, discipline, and responsibility.",
    views: 195,
    downloads: 48,
    pdfUrl: "#",
    content: [
      "Pan-African Leadership Forum Address.",
      "The recurring narrative of African leadership is too frequently framed around external constraints — colonial legacies, unfair global trade terms, or international debt structures. While these factors are real, framing them as insurmountable barriers breeds a culture of fatalism and executive inertia.",
      "True leadership is defined by what leaders accomplish within constraints. Leadership is the deliberate act of organizing society's resources to overcome adversity and build self-sustaining institutions.",
      "Africa's crisis is not a lack of vision or resources; it is a crisis of execution. We have produced innumerable blue-ribbon reports and strategic vision documents that gather dust in ministry archives.",
      "The leaders of tomorrow must be obsession-driven project managers — men and women who measure success by pipelines laid, schools built, taxes collected transparently, and justice delivered swiftly."
    ]
  },
  {
    slug: "from-resources-to-prosperity-physical-sciences",
    year: 2025,
    title: "From Resources to Prosperity: The Role of the Physical Sciences in Managing Nigeria's Future",
    month: "October 2025",
    category: "DEVELOPMENT",
    summary: "How science, knowledge, and institutions can transform natural resources into shared prosperity.",
    views: 122,
    downloads: 29,
    pdfUrl: "#",
    content: [
      "Lecture delivered at the Nigerian Academy of Science.",
      "The paradox of resource wealth in developing nations is well documented. Nations rich in crude oil, solid minerals, and arable land frequently suffer from currency volatility, weak industrial manufacturing, and high poverty rates.",
      "The antidote to the resource curse is the application of physical sciences, engineering, and technology to add value at source. Extracting crude oil without domestic refining capacity or chemical processing infrastructure is an export of jobs and wealth.",
      "Nigeria must invest aggressively in state-of-the-art research laboratories, material science centers, and industrial research parks linked directly to our universities.",
      "Prosperity in the 21st century is built on bits, atoms, and algorithms, not unprocessed raw minerals."
    ]
  },
  {
    slug: "instilling-the-mekaria-spirit-convocation-lecture",
    year: 2025,
    title: "Instilling the Mekaria Spirit: The Role of Universities in Shaping Leaders for a New Age",
    month: "October 2025",
    category: "YOUTH",
    summary: "A convocation lecture on the role of universities in preparing purposeful leaders.",
    views: 140,
    downloads: 31,
    pdfUrl: "#",
    content: [
      "Convocation Lecture delivered to graduating students.",
      "'Mekaria' in the Igbo language translates to an imperative: 'Do better, strive higher, refine what you inherit.' It is a philosophy of continuous self-surpassing and moral excellence.",
      "Universities are not merely credential-issuing factories designed to supply corporate employers with workforce units. They are sacred sanctuaries where character is tempered, critical thinking is sharpened, and civic duty is instilled.",
      "To the graduating class, remember that your degree is not a ticket to privilege or entitlement. It is an obligation to serve, to innovate, and to stand as a bulwark against mediocrity in public life.",
      "Whatever field you enter — law, medicine, technology, or public service — carry the Mekaria spirit: leave every institution better than you found it."
    ]
  },
  {
    slug: "audacity-to-transform-vision-meets-governance",
    year: 2025,
    title: "The Audacity to Transform: When Vision Meets Governance — Book Review",
    month: "January 2025",
    category: "LEADERSHIP",
    summary: "A review of the ideas, choices, and institutions that connect vision to effective governance.",
    views: 110,
    downloads: 22,
    pdfUrl: "#",
    content: [
      "Book review and commentary on public administration case studies.",
      "Transformational leadership is often mischaracterized as charismatic oratory. While inspiring speeches can rally public support, transformation is ultimately won in the tedious trenches of public policy implementation.",
      "In 'The Audacity to Transform', the author chronicles case studies of rapid institutional turnarounds — from civil aviation safety overhauls to road safety corps modernizations.",
      "The common thread across every successful transformation is a clear diagnostic framework, uncompromising merit-based recruitment, technology integration, and unwavering political backing from the top.",
      "When vision is backed by rigorous operational method, systemic dysfunction yields to order."
    ]
  }
];

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
