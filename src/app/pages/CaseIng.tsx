import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const otherProjects = [
  { title: "Ericsson IoT", tags: ["Customer Research", "Iterative Prototyping"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61030d6e7ff1602f83c7a8e2_erikson2.png", link: "#" },
  { title: "UX Research in VR", tags: ["VR", "Usability Tests", "Scientific Research"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317f629928f84e0f3b3f_vrcover.png", link: "#" },
  { title: "AR Navigation", tags: ["UX Research", "AR", "Rapid Prototyping"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e4d5af21060f0c9d3_arcover.jpg", link: "#" },
  { title: "UX & Food Allergy", tags: ["UX Research", "UX+UI Design"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109612e8870c62666a65f78_squirrel.jpg", link: "#" },
  { title: "PSE Innovation", tags: ["UX Audit", "UX+UI Design"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e3e51cbc7dbd228bf_psecover.jpg", link: "#" },
  { title: "Other Projects", tags: ["Commercial", "Non-commercial"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61040d72bf74a0e0f9ca5b4b_others2.jpg", link: "#" },
];

const DOT_COUNT = 5;

export default function CaseIng() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
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
  }
  return (
    <div className="bg-white">
      {/* Hero: title left (5/12) + cover image right (7/12) */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
              <h1 className="text-[60px] font-bold text-[#000000] mb-4 leading-tight">
                Vendor Validation Solution
              </h1>
              <div className="w-fit mb-8">
                <p className="text-[20px] font-semibold text-[#261d08] leading-[20px] whitespace-nowrap">UX-driven Business Transformation</p>
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
            <div className="lg:col-span-7">
              <ImageWithFallback
                src="/UX-Portfolio/ing-cover.png"
                alt="ING Netherlands case study cover"
                className="w-full h-full object-contain min-h-[300px] lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Context */}
      <section className="bg-[#fdf7f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview */}
            <div className="lg:col-span-7">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                The project focused on improving the process of approving vendors in a regulated industry where suppliers need to fulfill a long list of requirements. The old process used off-the-shelf software with poor UX, and required significant manual intervention and review from company employees — which caused the process to be heavily dependent on resources and not scaleable. A new solution needed to handle this process more efficiently, through enabling a 100% self-service approach — and that meant investing heavily in UX so users wouldn't get stuck in the process.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mt-4">
                The solution involved users defining supplier attributes through predefined questions, then reviewing applicable requirements statements based on those attributes. I joined the project at an early stage with evaluation of the pilot experience conducted by an external agency. Once initial conclusions were drawn, I led the design phase — organizing co-design workshops and creating UI designs matching the user journey while keeping stakeholders aligned. I later conducted four research studies, including a usability study of the new user flow prototype and comprehension testing of assessment questions — the part considered riskiest. The final evaluation survey confirmed the project's success.
              </p>
            </div>

            {/* Context */}
            <div className="lg:col-span-5">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Context
              </h2>
              <dl className="space-y-3 text-base">
                {[
                  { label: "Type:", value: "Commercial project, in-house" },
                  { label: "My Contribution:", value: "Research, workshop facilitation, design, stakeholder influence" },
                  { label: "Team composition:", value: "Two platform teams, Process owner team, developers, product managers (in total about 20 people)" },
                  { label: "Duration:", value: "9 months (with evaluation done after 6 months after the implementation)" },
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

      {/* Deliverables */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
            The Main Outcomes
          </h2>
          <h3 className="text-[24px] font-bold text-[#374151] mb-3 mt-2">Business Outcomes</h3>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>Reduced cycle time of the assessment by 40%</li>
            <li>Streamlined the process which allowed the business to collect data, further enabling insights generation</li>
            <li>50% of people reported the new process was faster and 62% had an improved experience</li>
            <li>Users received a self-service process on a single platform, compared to a scattered experience across many different tools dependent on other people's availability</li>
            <li>Received refined questions with additional guidance and improved content that was easier to understand, compared to the older process</li>
          </ul>
          <h3 className="text-[24px] font-bold text-[#374151] mb-3 mt-8">My Lessons Learnt</h3>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>The project taught me the importance of using objective yet simple evidence — like readability assessments — to convince resistant stakeholders. This quantitative data opened the door for further testing and provided specific, actionable feedback that content owners could act upon.</li>
            <li>I learned how to work with user research methods to improve content — for example, that it's usually better to engage experts in the topic rather than beginners.</li>
            <li>How to utilize design to support myself in high-level, abstract discussions with business stakeholders.</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#FFC133] mb-10 leading-tight">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[17px]">
            {/* Phase 1 */}
            <div className="p-6">
              <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" fill="none" stroke="#FFC133" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {/* Magnifying glass — survey/evaluation */}
                <circle cx="54" cy="54" r="30" />
                <line x1="76" y1="76" x2="110" y2="110" />
                <line x1="42" y1="50" x2="66" y2="50" />
                <line x1="42" y1="60" x2="60" y2="60" />
              </svg>
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-one" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Early Pilot Evaluation</strong></a>
                <br />Surveyed 10 people who went through a pilot exercise to gather feedback on the process and take decision about used platform
              </p>
            </div>
            {/* Phase 2 */}
            <div className="p-6">
              <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" fill="none" stroke="#FFC133" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {/* Crazy 8 — grid of 8 sketch frames + pencil */}
                <rect x="14" y="22" width="78" height="62" rx="2" />
                <line x1="14" y1="42" x2="92" y2="42" />
                <line x1="14" y1="62" x2="92" y2="62" />
                <line x1="40" y1="22" x2="40" y2="84" />
                <line x1="66" y1="22" x2="66" y2="84" />
                {/* Pencil */}
                <path d="M78 96 L112 62 L120 70 L86 104 Z" />
                <line x1="78" y1="96" x2="86" y2="104" />
                <path d="M78 96 L70 112 L86 104" />
              </svg>
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-two" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Co-Design Workshop</strong></a>
                <br />Used Crazy 8 technique with stakeholders to rapidly sketch flows and interface ideas
              </p>
            </div>
            {/* Phase 3 */}
            <div className="p-6">
              <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" fill="none" stroke="#FFC133" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {/* Phone wireframe with cursor */}
                <rect x="28" y="14" width="58" height="94" rx="6" />
                <line x1="28" y1="30" x2="86" y2="30" />
                <line x1="28" y1="94" x2="86" y2="94" />
                <rect x="36" y="38" width="42" height="10" />
                <line x1="36" y1="58" x2="78" y2="58" />
                <line x1="36" y1="68" x2="70" y2="68" />
                <line x1="36" y1="78" x2="62" y2="78" />
                {/* Cursor arrow */}
                <path d="M80 80 L104 104 L96 106 L102 118 L96 120 L90 108 L82 112 Z" />
              </svg>
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-three" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Prototyping and usability testing</strong></a>
                <br />Designed an interface, tested the flow with users
              </p>
            </div>
            {/* Phase 4 */}
            <div className="p-6">
              <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" fill="none" stroke="#FFC133" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {/* Chat bubbles with question marks */}
                <path d="M14 28 h60 a6 6 0 0 1 6 6 v34 a6 6 0 0 1 -6 6 H34 L20 86 V74 H14 a6 6 0 0 1 -6 -6 V34 a6 6 0 0 1 6 -6 Z" />
                <path d="M36 44 a8 8 0 1 1 8 10 v4" />
                <circle cx="44" cy="64" r="1.5" fill="#FFC133" stroke="none" />
                <path d="M116 56 h-40 a6 6 0 0 0 -6 6 v24 a6 6 0 0 0 6 6 h24 l14 12 V92 h2 a6 6 0 0 0 6 -6 V62 a6 6 0 0 0 -6 -6 Z" />
                <line x1="82" y1="72" x2="110" y2="72" />
                <line x1="82" y1="82" x2="104" y2="82" />
              </svg>
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-four" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Comprehension Testing</strong></a>
                <br />Conducted a study which aimed to evaluate and improve the experience of answering the assessment questions
              </p>
            </div>
            {/* Phase 5 */}
            <div className="p-6">
              <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" fill="none" stroke="#FFC133" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {/* Rocket launch with gauge */}
                <path d="M65 10 C82 28 86 48 86 66 L44 66 C44 48 48 28 65 10 Z" />
                <circle cx="65" cy="40" r="7" />
                <path d="M44 60 L30 74 L44 74 Z" />
                <path d="M86 60 L100 74 L86 74 Z" />
                <path d="M52 66 L52 82 L58 76 L65 86 L72 76 L78 82 L78 66" />
                {/* Flames */}
                <path d="M56 92 L60 108" />
                <path d="M65 94 L65 114" />
                <path d="M74 92 L70 108" />
                {/* Ground line */}
                <line x1="14" y1="120" x2="116" y2="120" />
              </svg>
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-five" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Launch & Measurement</strong></a>
                <br />Tracking the performance of the new solution with analytics and survey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section id="phase-one" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Early Pilot Evaluation
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <strong>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</strong> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae. <strong>Itaque earum rerum hic tenetur a sapiente delectus.</strong>
          </p>
        </div>
      </section>

      {/* Phase 2 */}
      <section id="phase-two" className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Co-Design Workshop
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Phase 3 */}
      <section id="phase-three" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Prototyping and usability testing
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Phase 4 */}
      <section id="phase-four" className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Comprehension Testing
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Phase 5 */}
      <section id="phase-five" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Launch & Measurement
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            The outcomes
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFF8F0] border-t-4 border-[#374151]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="text-[48px] font-bold text-[#374151] leading-tight inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
              See more cases
            </h2>
          </div>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", willChange: "scroll-position" }}
          >
            {otherProjects.map((p) => (
              <div key={p.title} className="relative group flex-shrink-0 w-[340px]">
                <div className="absolute inset-0 bg-[#FFC133] group-hover:bg-[#F09065] transform translate-x-4 translate-y-4 border-4 border-[#374151] transition-colors"></div>
                <div className="relative bg-white border-4 border-[#374151] overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/12] border-b-4 border-[#374151]">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#FFF8F0] text-[#374151] border-2 border-[#374151] text-sm font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-6 right-6">
                      <Link
                        to={p.link}
                        className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] hover:bg-[#FF8A5B] group-hover:bg-[#FF8A5B] transition-colors block shrink-0"
                        aria-label="View project"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </div>
                    <div className="mb-1 pr-16">
                      <h3 className="text-[28px] font-bold text-[#261d08] inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>{p.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
