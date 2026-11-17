import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Same information architecture as CaseIng (vendors page), adapted to a 3-phase research project.

const otherProjects = [
  { title: "Vendor Validation Solution", cardTitle: "Vendor Validation", tags: ["Business Transformation", "Co-Design"], image: "/UX-Portfolio/ing-cover.png", link: "/projects/vendors" },
  { title: "AI-based validation in forms", cardTitle: "AI-based Validation", tags: ["GenAI", "ML Engineers Collaboration", "ERP"], image: "/UX-Portfolio/ar-cover.png", link: "/projects/ai-validation" },
  { title: "Ericsson IoT", tags: ["Customer Research", "Iterative Prototyping"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61030d6e7ff1602f83c7a8e2_erikson2.png", link: "/projects/ericsson" },
  { title: "UX Research in VR", tags: ["VR", "Usability Tests", "Scientific Research"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317f629928f84e0f3b3f_vrcover.png", link: "/projects/vr" },
  { title: "UX & Food Allergy", tags: ["UX Research", "UX+UI Design"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109612e8870c62666a65f78_squirrel.jpg", link: "/projects/food-allergy" },
];

const DOT_COUNT = 5;

const ICON = { fill: "none", stroke: "#FFC133", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const phases: { id: string; title: string; summary: string; icon: ReactNode }[] = [
  {
    id: "phase-one",
    title: "Discovery & Ideation",
    summary: "Developed three AI-powered ideas with experts and presented them as video explainers to 11 interview participants to find the most promising concept",
    icon: (
      <>
        {/* Play screen - video explainers */}
        <rect x="12" y="20" width="96" height="66" rx="4" />
        <path d="M50 40 L74 53 L50 66 Z" />
        <line x1="40" y1="100" x2="80" y2="100" />
        <line x1="60" y1="86" x2="60" y2="100" />
        {/* Lightbulb spark */}
        <path d="M112 14 L116 24 L126 28 L116 32 L112 42 L108 32 L98 28 L108 24 Z" />
      </>
    ),
  },
  {
    id: "phase-two",
    title: "Validation & Prioritization",
    summary: "Ran a survey with a broader user group to quantify interest in the winning idea and gather requirements for feature prioritization",
    icon: (
      <>
        {/* Bar chart - survey results */}
        <line x1="14" y1="112" x2="116" y2="112" />
        <rect x="24" y="72" width="18" height="40" />
        <rect x="52" y="48" width="18" height="64" />
        <rect x="80" y="24" width="18" height="88" />
        <path d="M22 54 L50 34 L76 18 L104 10" />
      </>
    ),
  },
  {
    id: "phase-three",
    title: "Proof of Concept Testing",
    summary: "Tested a working prototype with about 15-16 teams to verify that the AI-generated output met the quality benchmark",
    icon: (
      <>
        {/* Gauge with threshold needle */}
        <path d="M18 92 A47 47 0 0 1 112 92" />
        <line x1="65" y1="92" x2="94" y2="58" />
        <circle cx="65" cy="92" r="6" />
        <line x1="26" y1="64" x2="34" y2="68" />
        <line x1="65" y1="45" x2="65" y2="54" />
        <line x1="104" y1="64" x2="96" y2="68" />
        {/* Check */}
        <path d="M44 112 L56 122 L86 104" />
      </>
    ),
  },
];

const S = { fill: "#FFC133", stroke: "#374151", strokeWidth: 3 } as const;

const startingChallenges: { title: string; desc: string; svg: ReactNode }[] = [
  {
    title: "Technology first",
    desc: "The brief was 'use GenAI', not a user problem to solve",
    svg: (<><rect x="14" y="14" width="32" height="32" rx="3" {...S} /><line x1="22" y1="8" x2="22" y2="14" /><line x1="30" y1="8" x2="30" y2="14" /><line x1="38" y1="8" x2="38" y2="14" /><line x1="22" y1="46" x2="22" y2="52" /><line x1="30" y1="46" x2="30" y2="52" /><line x1="38" y1="46" x2="38" y2="52" /><text x="30" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151" stroke="none">AI</text></>),
  },
  {
    title: "No problem statement",
    desc: "Ideas were based on general knowledge, not deep research",
    svg: (<><circle cx="30" cy="30" r="20" {...S} /><path d="M24 24 a6 6 0 1 1 6 7 v4" /><circle cx="30" cy="42" r="1.5" fill="#374151" /></>),
  },
  {
    title: "Tight timeline",
    desc: "A working tool was expected within a couple of months",
    svg: (<><circle cx="30" cy="32" r="18" {...S} /><line x1="30" y1="32" x2="30" y2="20" /><line x1="30" y1="32" x2="40" y2="36" /><line x1="24" y1="10" x2="36" y2="10" /><line x1="30" y1="10" x2="30" y2="14" /></>),
  },
  {
    title: "Pressure to prove",
    desc: "Senior stakeholders wanted evidence the product could use GenAI",
    svg: (<><path d="M10 46 L22 32 L32 40 L50 16" stroke="#F09065" strokeWidth="4" /><path d="M40 16 L50 16 L50 26" stroke="#F09065" strokeWidth="4" /><rect x="8" y="48" width="44" height="4" {...S} /></>),
  },
];

const W = { fill: "#FFC133", stroke: "#374151", strokeWidth: 4 } as const;

const concepts: { label: string; title: string; desc: string; winner?: boolean; svg: ReactNode }[] = [
  {
    label: "CONCEPT A",
    title: "Test cases & scripts generation",
    desc: "Generating test cases and scripts for software testing based on high-level requirements",
    winner: true,
    svg: (<><rect x="30" y="14" width="70" height="100" rx="3" fill="#FFF8F0" /><rect x="48" y="8" width="34" height="14" {...W} /><path d="M42 44 l6 6 l12 -12" /><line x1="68" y1="44" x2="90" y2="44" /><path d="M42 68 l6 6 l12 -12" /><line x1="68" y1="68" x2="90" y2="68" /><path d="M42 92 l6 6 l12 -12" /><line x1="68" y1="92" x2="86" y2="92" /></>),
  },
  {
    label: "CONCEPT B",
    title: "Requirements creation support",
    desc: "Supporting business and technical teams in creating complete software requirements",
    svg: (<><rect x="20" y="14" width="66" height="96" rx="3" fill="#FFF8F0" /><line x1="32" y1="34" x2="74" y2="34" /><line x1="32" y1="50" x2="74" y2="50" /><line x1="32" y1="66" x2="62" y2="66" /><path d="M80 98 L112 66 L120 74 L88 106 Z" {...W} /><path d="M80 98 L74 112 L88 106" fill="#374151" /></>),
  },
  {
    label: "CONCEPT C",
    title: "Requirements-to-tests traceability",
    desc: "Automating traceability between requirements and testing, making sure all requirements are covered",
    svg: (<><rect x="10" y="22" width="36" height="24" rx="2" fill="#FFF8F0" /><rect x="10" y="54" width="36" height="24" rx="2" fill="#FFF8F0" /><rect x="10" y="86" width="36" height="24" rx="2" fill="#FFF8F0" /><rect x="84" y="38" width="36" height="24" rx="2" {...W} /><rect x="84" y="70" width="36" height="24" rx="2" {...W} /><path d="M46 34 L84 50" /><path d="M46 66 L84 50" /><path d="M46 98 L84 82" /></>),
  },
];

const surveyTopics = [
  "Who the users are: more technical or more business-driven",
  "Preferred input formats: screenshots, user guides or plain requirements",
  "Which standards for business requirements work best",
  "Early access sign-ups for beta testing",
];

const pocCriteria = [
  "Writing style",
  "Appropriate language",
  "Content accuracy",
  "Time saved vs. manual preparation",
  "Overall satisfaction",
];

const B = "text-[#374151]"; // bold-highlight colour used throughout the vendors page

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <figure className="border-4 border-[#374151] overflow-hidden">
      <div className="aspect-[16/9] bg-[#F3F4F6] flex items-center justify-center text-gray-500 text-base font-medium px-6 text-center">
        {label}
      </div>
    </figure>
  );
}

function SectionHeading({ children, className = "text-[#374151]" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[32px] lg:text-[48px] font-bold mb-6 leading-tight ${className}`}>{children}</h2>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[24px] font-bold text-[#374151] mb-6 inline-block border-b-4 border-[#FFC133] pb-1">{children}</h3>
  );
}

export default function CaseAiTestCases() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      velocityRef.current += (e.deltaY + e.deltaX) * 0.8;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const animate = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft += velocityRef.current;
        velocityRef.current *= 0.85;
        if (Math.abs(velocityRef.current) > 0.5) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          velocityRef.current = 0;
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleScroll() {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setActiveDot(Math.round(progress * (DOT_COUNT - 1)));
    setCanScrollRight(scrollLeft < maxScroll - 4);
  }

  function scrollRight() {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 372, behavior: "smooth" });
  }

  return (
    <div className="bg-white">
      {/* Hero: title left (5/12) + cover image right (7/12) */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
              <h1 className="text-[60px] font-bold text-[#000000] mb-4 leading-tight">
                Test Script Automation Tool
              </h1>
              <div className="w-fit mb-8">
                <p className="text-[20px] font-semibold text-[#261d08] leading-[24px]">Steering a technology-first GenAI initiative with UX research</p>
                <div className="mt-[4px] h-[5px] w-full bg-[#FFC133] -skew-x-12" />
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-[#374151] hover:text-[#F09065] transition-colors text-[20px] font-medium underline underline-offset-4"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to all the cases
              </Link>
            </div>
            <div className="lg:col-span-7 relative overflow-hidden">
              <ImageWithFallback
                src="/UX-Portfolio/ai-test-cases-card.png"
                alt="Test Script Automation Tool case study cover"
                className="w-full h-full object-cover object-left min-h-[300px] lg:min-h-[500px]"
              />
              {/* Same NDApp overlay as the gallery tile */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(107,114,128,1) 0%, rgba(107,114,128,0.95) 20%, rgba(107,114,128,0.55) 50%, rgba(107,114,128,0) 75%)" }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FFFFFF" strokeWidth="2" />
                  <path d="M7 17V7l10 10V7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-bold text-[18px] tracking-tight leading-none">
                  NDApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Context */}
      <section className="bg-[#fdf7f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <SectionHeading className="text-[#000000]">Overview</SectionHeading>
              <p className="text-base text-gray-600 leading-relaxed">
                The project began when business stakeholders requested a <strong className={B}>generative AI tool to prove the product could successfully utilise this technology</strong>. Starting with a technology rather than a problem statement created an unconventional research challenge, so I decided to prepare <strong className={B}>three video explainers of the most promising GenAI concepts</strong>, based on known user issues. The winning concept focused on <strong className={B}>generating test cases and scripts for software testing based on high-level requirements</strong>. Potential users included both technical and business professionals responsible for software testing tasks within the organisation.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mt-4">
                Through <strong className={B}>11 interviews and focus groups</strong>, the research identified which idea had the highest chance of success. A <strong className={B}>survey with a broader user group</strong> then validated the concept, helped prioritise features, and recruited volunteers for beta testing. Finally, <strong className={B}>testing with about 15-16 teams</strong> confirmed that the proof of concept met <strong className={B}>all quality thresholds, set at 70%</strong>. Alongside the research, I also gathered training data for the AI model.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SectionHeading className="text-[#000000]">Context</SectionHeading>
              <dl className="space-y-3 text-base">
                {[
                  { label: "Type:", value: "Commercial project, in-house" },
                  { label: "My Contribution:", value: "All research activities, gathering AI training data, keeping the business and development team informed on research progress, setting up the effectiveness benchmark" },
                  { label: "Team composition:", value: "Business owner, product manager, AI developers, and three research contractors who ran the POC sessions" },
                  { label: "Duration:", value: "4 months" },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="inline font-bold text-[#374151]">{item.label} </dt>
                    <dd className="inline text-gray-600">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Main Outcomes */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <SectionHeading className="text-[#000000]">The Main Outcomes</SectionHeading>
          <h3 className="text-[24px] font-bold text-[#374151] mb-3 mt-2">Business Outcomes</h3>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>Identified <strong className={B}>which idea had the highest chance of success</strong> and prepared a SWOT analysis of the winning concept</li>
            <li>The team <strong className={B}>gained confidence in the idea</strong> through positive survey results and <strong className={B}>recruited many volunteers for beta testing</strong></li>
            <li><strong className={B}>All quality thresholds (70%) were met</strong> during POC testing, validating the decision to proceed with full system development</li>
          </ul>
          <h3 className="text-[24px] font-bold text-[#374151] mb-3 mt-8">User Outcomes</h3>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>Created <strong className={B}>feature prioritisation based on user preferences</strong> for input formats</li>
            <li>Validated that the AI solution could <strong className={B}>save significant time compared to manual test preparation</strong></li>
          </ul>
          <h3 className="text-[24px] font-bold text-[#374151] mb-3 mt-8">My Lessons Learnt</h3>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>UX research can still <strong className={B}>steer and improve products effectively</strong> even when starting from a non-ideal position, without a clear problem statement.</li>
            <li>Recruiting participants becomes easier when the research is framed as <strong className={B}>showing "something cool"</strong> and asking for feedback on exciting concepts - it significantly increases engagement.</li>
            <li><strong className={B}>Testing AI solutions is valuable even without a final user interface</strong> or polished UX - there's still a lot to learn from the process.</li>
            <li>AI development requires an <strong className={B}>"extra agile" approach</strong>: algorithms and outputs are experimental and constantly changing, which demands intensive coordination with technical and business stakeholders.</li>
            <li>It's critical to test not only whether AI generates correct output, but also <strong className={B}>whether users have the knowledge needed to provide proper input</strong> to the system.</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#FFC133] mb-10 leading-tight">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px]">
            {phases.map((phase) => (
              <div key={phase.id} className="p-6">
                <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" {...ICON} aria-hidden>
                  {phase.icon}
                </svg>
                <p className="text-base text-gray-300 leading-relaxed w-full">
                  <a href={`#${phase.id}`} className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>{phase.title}</strong></a>
                  <br /><br />{phase.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Origins */}
      <section className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <SectionHeading>Project Context and Origins</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            A business owner approached me and my product manager with news that <strong className={B}>within a couple of months we should develop a tool based on generative AI</strong>, as higher-level business stakeholders requested proof that our product could successfully use this type of technology. It was a struggle at the beginning, since we were <strong className={B}>starting with a technology rather than a problem statement</strong> - unlike typical UX research cases, where we know what we're solving for.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            The context was limited to what our product was doing. Our ideas were loosely based on general knowledge about user problems, but we hadn't dug deep - and we knew some kind of solution needed to be delivered. I thought we should <strong className={B}>propose these ideas to people, see which problem resonated the most</strong>, and based on that, determine what made sense to develop.
          </p>

          <div className="mt-12">
            <h3 className="text-[20px] font-bold text-[#374151] mb-6 inline-block border-b-4 border-[#FFC133] pb-1">
              The starting point
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {startingChallenges.map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute inset-0 bg-[#FFC133] transform translate-x-1.5 translate-y-1.5 border-4 border-[#374151]"></div>
                  <div className="relative bg-white border-4 border-[#374151] p-4 h-full flex flex-col">
                    <div className="w-[50px] h-[50px] mb-3">
                      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        {item.svg}
                      </svg>
                    </div>
                    <h4 className="font-bold text-[#374151] text-[14px] mb-1 leading-tight">{item.title}</h4>
                    <p className="text-[12px] text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section id="phase-one" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <SectionHeading>{phases[0].title}</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            The exploration began with <strong className={B}>conversations with AI experts from my network</strong> working within the broader company ecosystem. These discussions, together with <strong className={B}>reviewing the user pain points from our continuous discovery</strong>, led to three distinct ideas.
          </p>

          <div className="mt-10 mb-12">
            <SubHeading>Three concepts</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {concepts.map((c) => (
                <div key={c.label} className="relative">
                  <div className={`absolute inset-0 transform translate-x-2 translate-y-2 border-4 border-[#374151] ${c.winner ? "bg-[#F09065]" : "bg-[#FFC133]"}`}></div>
                  <div className="relative bg-white border-4 border-[#374151] p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className="inline-block bg-[#FFC133] border-2 border-[#374151] px-2 py-0.5 text-[13px] font-bold text-[#374151]">
                        {c.label}
                      </span>
                      {c.winner && (
                        <span className="inline-block bg-[#374151] border-2 border-[#374151] px-2 py-0.5 text-[13px] font-bold text-[#FFC133]">
                          ★ WINNER
                        </span>
                      )}
                    </div>
                    <div className="flex justify-center mb-3">
                      <div className="w-[100px] h-[100px]">
                        <svg viewBox="0 0 130 130" className="w-full h-auto" fill="none" stroke="#374151" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          {c.svg}
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-[#374151] text-[16px] mb-1 leading-tight">{c.title}</h4>
                    <p className="text-[13px] text-gray-600 leading-snug">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            To present these concepts compellingly, I created <strong className={B}>short video explainers</strong> that articulated the user problem, introduced the feature's value proposition, and explained how the solution would address user needs. I recruited participants from environments where people worked on these three problems, inviting them to review what we described as <strong className={B}>"cool concepts" that would benefit from their expertise</strong>.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Each session started with a discovery discussion about participants' current operations and challenges in each area - creating requirements, preparing test scripts, and managing traceability documents. After watching the videos, participants discussed each idea in detail, described step-by-step improvements, and finally <strong className={B}>picked the concept they preferred and explained why</strong>. Through these <strong className={B}>11 interviews and focus groups</strong>, we identified the idea with the highest chance of success.
          </p>
          <ScreenshotPlaceholder label="Visual coming soon - video explainer frames" />
        </div>
      </section>

      {/* Phase 2 */}
      <section id="phase-two" className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <SectionHeading>{phases[1].title}</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            The second phase focused on <strong className={B}>quantifying the idea with a broader group of potential users</strong>. The survey began with a more detailed video explanation, enriched with insights from the first research phase. We wanted to understand the profile of the people who would actually use the product - specifically whether they were more technical or business-driven, as different people held responsibility for these tasks across the organisation.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-10">
            We also invited people to <strong className={B}>sign up for early access</strong>, with the intention of recruiting participants for beta testing of the proof of concept.
          </p>

          <div className="relative mb-10">
            <div className="absolute inset-0 bg-[#FFC133] transform translate-x-2 translate-y-2 border-4 border-[#374151]"></div>
            <div className="relative bg-[#374151] border-4 border-[#374151] p-6">
              <h4 className="text-[#FFC133] font-bold text-[18px] mb-4 inline-block border-b-4 border-[#FFC133] pb-1">
                What the survey explored
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {surveyTopics.map((topic) => (
                  <div key={topic} className="flex items-start gap-3 text-gray-300">
                    <span className="inline-block w-4 h-4 bg-[#FFC133] border-2 border-[#FFC133] shrink-0 mt-1" />
                    <span className="text-[14px] leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            The outcomes proved highly successful - <strong className={B}>many people were interested in the value proposition</strong>, we created a <strong className={B}>feature prioritisation based on preferred inputs</strong>, better understood the user profile, <strong className={B}>boosted the team's confidence</strong>, and recruited numerous volunteers for beta testing.
          </p>
          <ScreenshotPlaceholder label="Visual coming soon - survey results" />
        </div>
      </section>

      {/* Phase 3 */}
      <section id="phase-three" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <SectionHeading>{phases[2].title}</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            In the final research stage we built a proof of concept with a user interface that wasn't the final design, so <strong className={B}>we didn't test usability or interface design</strong>. Instead, we focused on whether <strong className={B}>what the system generated met the quality and standards our users expected</strong> - essentially experimenting to see if test scripts generated from limited user input could be meaningful. This was also an important input for the AI developers, who got more clues on how to improve the system's behaviour.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            I had to focus on another project during this phase, so I <strong className={B}>coordinated the research by preparing scripts, templates and guidance for three contractors</strong> who conducted the sessions on my behalf. Participants brought their own requirements and testing ideas, used the POC interface during moderated sessions to provide input and review the output, and then completed a standard form. <strong className={B}>About 15-16 teams</strong> took part.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-10">
            Before testing, I <strong className={B}>set a 70% success threshold</strong> for each criterion. <strong className={B}>All thresholds were met</strong>, confirming we were ready to proceed with the full version of the system.
          </p>

          <SubHeading>Quality benchmark</SubHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {pocCriteria.map((criterion) => (
              <div key={criterion} className="relative">
                <div className="absolute inset-0 bg-[#FFC133] transform translate-x-1.5 translate-y-1.5 border-4 border-[#374151]"></div>
                <div className="relative bg-white border-4 border-[#374151] p-4 h-full flex flex-col">
                  <span className="text-[28px] font-bold text-[#374151] leading-none mb-2">≥70%</span>
                  <h4 className="font-bold text-[#374151] text-[14px] mb-3 leading-tight flex-1">{criterion}</h4>
                  <span className="inline-flex items-center gap-1.5 w-fit bg-[#FFC133] border-2 border-[#374151] px-2 py-0.5 text-[12px] font-bold text-[#374151]">
                    ✓ MET
                  </span>
                </div>
              </div>
            ))}
          </div>

          <ScreenshotPlaceholder label="Visual coming soon - proof of concept interface" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFF8F0] border-t-4 border-[#374151]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-[#374151] leading-tight inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
              See more cases
            </h2>
          </div>
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: "none", willChange: "scroll-position" }}
            >
              {otherProjects.map((p) => (
                <div key={p.title} className="relative group flex-shrink-0 w-[340px]">
                  <div className="absolute inset-0 bg-[#FFC133] group-hover:bg-[#F09065] transform translate-x-4 translate-y-4 border-4 border-[#374151] transition-colors"></div>
                  <Link to={p.link} className="relative bg-white border-4 border-[#374151] overflow-hidden block">
                    <div className="relative overflow-hidden aspect-[16/12] border-b-4 border-[#374151]">
                      <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      {(p.link === "/projects/ai-validation" || p.link === "/projects/vendors") && (
                        <>
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: "linear-gradient(to right, rgba(107,114,128,1) 0%, rgba(107,114,128,0.95) 20%, rgba(107,114,128,0.55) 50%, rgba(107,114,128,0) 75%)" }}
                          />
                          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 pointer-events-none">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FFFFFF" strokeWidth="2" />
                              <path d="M7 17V7l10 10V7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white font-bold text-[14px] tracking-tight leading-none">NDApp</span>
                          </div>
                        </>
                      )}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-[#FFF8F0] text-[#374151] border-2 border-[#374151] text-sm font-bold">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute top-6 right-6">
                        <div className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] group-hover:bg-[#FF8A5B] transition-colors block shrink-0">
                          <ExternalLink size={20} />
                        </div>
                      </div>
                      <div className="mb-1 pr-16 min-h-[108px]">
                        <h3 className="text-[28px] font-bold text-[#261d08] inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px', whiteSpace: 'pre-line' }}>{p.cardTitle ?? p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll to next case"
              className={`flex absolute top-1/2 right-2 -translate-y-1/2 items-center justify-center w-12 h-12 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-[#374151] text-[#374151] transition-opacity duration-300 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                style={{ backgroundColor: i === activeDot ? '#FF8A5B' : '#D1D5DB' }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
