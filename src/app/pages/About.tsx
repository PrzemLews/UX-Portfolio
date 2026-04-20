import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Target, Briefcase } from "lucide-react";
import Chip from "../../imports/Chip-76-20";
import profilePhoto from "/jabiureczko-1.png";

export default function About() {
  const skills = [
    { name: "User Research", level: 95 },
    { name: "Wireframing & Prototyping", level: 92 },
    { name: "UI Design", level: 90 },
    { name: "Usability Testing", level: 88 },
    { name: "Design Systems", level: 85 },
    { name: "Information Architecture", level: 90 },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Miro",
    "Maze",
    "Hotjar",
    "Principle",
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every decision is guided by user needs and feedback",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving measurable business objectives",
    },
    {
      icon: Award,
      title: "Quality-Driven",
      description: "Committed to delivering pixel-perfect designs",
    },
    {
      icon: Briefcase,
      title: "Collaborative",
      description: "Working seamlessly with cross-functional teams",
    },
  ];

  const experience = [
    {
      role: "Settling in Prague",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: "After my master's degree in HCI and gaining UX experience in Poland by working in an agency, I moved to Prague.",
    },
    {
      role: "Human-Computer Interaction studies",
      company: "Digital Innovations",
      period: "2019-2021",
      description: "During my studies in Madrid and Stockholm, I took courses about programming, user context discovery, interface testing, business development, innovation modeling, interaction design, and accessibility. I experienced designing and evaluating for Mobile, Wearable, Augmented Reality, Virtual Reality, Conversational/Robotic, physical IoT, and desktop interfaces. My thesis work, \"Investigating a Decision Support Tool for Designing the Internet of Things Solutions\" was graded with the best possible mark (A).",
    },
    {
      role: "Software Testing, UX Postgraduate studies",
      company: "Creative Studio",
      period: "2016-2017",
      description: "During this period, I had my first IT job as a software tester, which gave me knowledge on how to collaborate with PMs and developers, and how to work in Scrum. I also got interested in UX, and quite quickly signed up for User Experience Design studies. There I learned in practice the end-to-end double diamond process, but also about formulating business models.",
    },
    {
      role: "Technical University and AIESEC Member",
      company: "Design Lab",
      period: "2012-2016",
      description: "During my bachelor's/engineering studies, I gained confidence in acquiring technical knowledge. I had some programming classes there, including website engineering. But what made that period more interesting was my membership in the student association AIESEC. In that organisation, I was responsible for promoting AIESEC student exchange programs and providing customer service for students who decided to participate in them.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
            <div className="order-1">
              <h1 className="text-[60px] font-bold text-[#261d08] mb-6 leading-[60px]">
                More About Me
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                My full name is Przemyslaw Lewandowski, but you can call me Pshemek (or Přemek).
              </p>
            </div>
            <div className="relative order-2 lg:row-span-2">
              <div className="absolute inset-0 bg-[#FFC133] transform translate-x-6 translate-y-6 border-4 border-[#374151]"></div>
              <div className="relative border-4 border-[#374151] overflow-hidden">
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Workspace"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="order-3">
              <p className="text-lg text-gray-600 mb-6">I put real effort into the <strong>early stages</strong> of working with someone. Because <strong>understanding everyone's real goals</strong> makes me a <strong>better partner</strong> and produces <strong>better outcomes</strong>. I also tend to <strong>pull stakeholders into the design process early and often</strong>. In my experience, people who feel heard and involved <strong>become advocates for the work</strong> - and that momentum is what actually <strong>moves projects forward</strong>. I like working on <strong>long-term projects</strong>, as taking the best decisions comes with <strong>experience within the field</strong>. Speaking of the type of projects I have been working on:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Chip label="Compliance" />
                <Chip label="ERP systems" />
                <Chip label="AI solutions" />
                <Chip label="Developer Experience" />
                <Chip label="Banking" />
                <Chip label="Pharma Business" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-20 bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[48px] font-bold text-[#FFC133] mb-8 inline-block border-b-8 border-[#FFC133] pb-2">
            Fun fact
          </h2>
          <p className="text-xl text-white leading-relaxed mt-4">
            Apart from work, I like to spend my time pursuing my hobbies: Making electronic music, gym, psychology, painting, RPG games.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-[#261d08] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">My Career Journey</h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 border-l-6 border-[#FFC133]"
              >
                <div className="absolute left-[-14px] top-0 w-6 h-6 bg-[#FFC133] border-4 border-[#374151]"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFC133] transform translate-x-4 translate-y-4 border-4 border-[#374151]"></div>
                  <div className="relative p-8 bg-white border-4 border-[#374151]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-4">
                      <h3 className="font-bold text-[#261d08] inline text-[36px]" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
                        {exp.role}
                      </h3>
                      <div className="shrink-0 flex flex-col gap-2">
                        <Chip label={exp.period} />
                        {exp.extraPeriod && <Chip label={exp.extraPeriod} />}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}