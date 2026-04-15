import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function CaseIng() {
  return (
    <div className="bg-white">
      {/* Hero: title left (5/12) + cover image right (7/12) */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
              <h1 className="text-5xl lg:text-6xl font-black text-[#374151] mb-4 tracking-tight">
                ING Netherlands
              </h1>
              <p className="text-lg uppercase tracking-widest text-gray-500 font-semibold mb-8">
                Is "??? for flats" a good idea?
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-gray-500 hover:text-[#374151] transition-colors text-sm font-medium"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to all cases
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317ef70f2c3a950cf279_ingcover.jpg"
                alt="ING Netherlands case study cover"
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview (6/12) + Context (5/12) side by side, with icon gutter (1/12) */}
      <section className="bg-[#fdf7f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Icon column */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-2">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png"
                alt=""
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Overview */}
            <div className="lg:col-span-6">
              <h2 className="text-sm uppercase tracking-widest font-bold text-[#374151] mb-6">
                Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                The purpose of the project was to validate the given example of a business model (in fintech-real
                estates industry) by a series of experiments and alternatively steer a new, pivoted model. My team
                realized the project in ING Innovation Studio in Amsterdam and it was conducted in authorial lean
                startup methodology. The role of mine was to plan, prepare, and conduct validation experiments. So
                far it was my the most intensive learning experience, thanks to my teammates, who were senior
                specialists.
              </p>
            </div>

            {/* Context */}
            <div className="lg:col-span-5">
              <h2 className="text-sm uppercase tracking-widest font-bold text-[#374151] mb-6">
                Context
              </h2>
              <dl className="space-y-3 text-base">
                {[
                  { label: "Contribution:", value: "UX research, Business research" },
                  { label: "Context:", value: "Commercial project, 6-months duration" },
                  { label: "Team size:", value: "5-7 people (other roles: business lead, customer lead, tech lead, experiment leads)" },
                  { label: "Dates:", value: "09.2017 \u2013 02.2018" },
                  { label: "Tools:", value: "Instapages (landing page generator), Google AdWords" },
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
        <div className="max-w-3xl mx-auto px-8 sm:px-12 py-16">
          <h2 className="text-sm uppercase tracking-widest font-bold text-[#374151] mb-6">
            The main deliverables/learning points
          </h2>
          <div className="text-base text-gray-600 leading-relaxed space-y-2">
            <p>&ndash; Understanding and practising PACE framework (lean-startup methodology framework designed by ING) for business model validation</p>
            <p>&ndash; The pivot of the original idea, changing focus from renting service to maintenance service, the change based on research insight</p>
            <p>&ndash; Quantitative measurements of interest by using smoke tests (landing pages) shown which country are the best markets to obtain customers</p>
            <p>&ndash; Understanding the usage of analytics to conduct online experiments</p>
          </div>
          <p className="text-base text-gray-600 leading-relaxed mt-6">
            As a team, we obtained substantial knowledge about the problems and needs of the real estate market
            and in qualitative research. The final prototype of the solution was rated positively by test
            participants, quantitative tests in the Netherlands shown a good potential of the idea.
          </p>
        </div>
      </section>

      {/* Process: two phase columns with icons */}
      <section className="bg-[#374151] border-b-8 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-sm uppercase tracking-widest font-bold text-[#FFC133] mb-10">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="border-4 border-[#FFC133] p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png"
                alt=""
                className="w-12 h-12 object-contain mb-4"
              />
              <p className="text-base text-gray-300 leading-relaxed">
                <strong className="text-[#FFC133]">Product \u2013 Customer fit phase</strong>
                <br />Individual interviews
                <br />Advert tests
                <br />5 second tests
                <br />Hypothesis canvas
                <br />Ideation workshop
                <br />Fake door tests
              </p>
            </div>
            {/* Phase 2 */}
            <div className="border-4 border-[#FFC133] p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png"
                alt=""
                className="w-12 h-12 object-contain mb-4"
              />
              <p className="text-base text-gray-300 leading-relaxed">
                <strong className="text-[#FFC133]">Product \u2013 Market fit phase</strong>
                <br />Surveys
                <br />Hypothesis canvas
                <br />Fake door tests
              </p>
            </div>
            {/* Empty third column like original */}
            <div />
          </div>
        </div>
      </section>

      {/* Case body: centered rich-text column */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-8 sm:px-12">
          {/* Product - Customer fit phase */}
          <h2 className="text-2xl font-bold text-[#374151] mb-6">
            Product \u2013 Customer fit phase
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            The starting point of our project was receiving a draft of a business model. Our goal was to check
            whatever proposed BM is based on accurate assumptions. The original idea was subscription-based
            service for tenants, who often change the place where they live. By paying a fixed amount of money
            per month, they could change their long-term accommodation across different countries. The business
            model also assumed that landlords might have a problem with 100% utilisation of their properties.
            We were conscious that mentioned assumptions could be false or positive depending on different
            countries.
          </p>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106831943afc0e194b33ca1_ing1.png"
              alt="Classification of assumptions"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              From the very beginning, we were working with hypothesis canvas, according to ING PACE methodology.
            </figcaption>
          </figure>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            So our first test, which I conducted was a test of general interest in{" "}
            <strong>different value propositions in 3 countries \u2013 the Netherlands, France and Germany.</strong>{" "}
            A tool that was used was Google Ads \u2013 We posted 3 different ads emphasising on 3 different
            aspects of the value proposition (for the tenant side) \u2013 safety looking for a flat, finding a
            flat quickly, moving abroad services. The biggest CTR in all countries was related to the trust
            aspect, that gave us preliminary feeling about the main value for tenants.
          </p>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610683cb6dcf0e5846cbdeb6_ing2.png"
              alt="Visualization of adverts"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              One type of advert, that was used to compare interest in different issues among set of countries
            </figcaption>
          </figure>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Yet the biggest role in research played individual interviews \u2013{" "}
            <strong>we conducted 32 interviews</strong> both with tenants and landlords (Dutch people). Based on
            them we discovered that tenants don't want to think about moving when they just find a flat \u2013 they
            didn't really see a value in subscription housing service. Mostly their problems were related to
            finding a flat at all. On the other side,{" "}
            <strong>landlords didn't complain about breaks in rents</strong> and surprisingly{" "}
            <strong>the biggest problem was a maintenance part.</strong> Landlords were not satisfied with the
            current market situation with handymen \u2013 according to the landlord's opinion craftsmen are
            difficult to reach also, often not trustworthy.
          </p>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610684b01d53d1bd3d07201d_ing3.png"
              alt="Pains and needs from a landlord's perspective"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Pains and needs from a landlord's perspective
            </figcaption>
          </figure>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61068522b1dafe255c67ca64_ing4.png"
              alt="Generation of ideas"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Generation of ideas
            </figcaption>
          </figure>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Based on those insights we decided to pivot proposed business models to tools for landlords, which
            would help with a maintenance property. To help ourselves to formulate a business idea in a better
            way, we organized <strong>an ideation workshop.</strong>
          </p>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Still, the new idea required quantitative validation. For that,{" "}
            <strong>we used fake door tests.</strong> We created a website which promoted service as it would
            already exist, asking users for leaving their contact data if they would like to participate in beta
            tests. From our perspective, such registration could be proof of value proposition appreciation. To
            make sure that the website is understandable and present the value proposition as good as it is
            possible, <strong>I conducted a session of 5-second tests.</strong>
          </p>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106879769245430119343ce_ing6.png"
              alt="Fragment of landing page addressed for the Dutch market"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Fragment of landing page addressed for the Dutch market
            </figcaption>
          </figure>

          <p className="text-base text-gray-600 leading-relaxed mb-16">
            The results of smoke tests went slightly below the expected conversion rate (around 2% comparing to
            2,5%). Fake door tests for a side of handymen went above the expected conversion rate. The tests
            were performed on the Dutch market. The result classified the team to move to the next stage of the
            validation process \u2013 market fit.
          </p>

          {/* Product - Market fit phase */}
          <h2 className="text-2xl font-bold text-[#374151] mb-6">
            Product \u2013 Market fit phase
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            According to our business research German market was more promising than explored Dutch market.
            Therefore we moved our all tests there. To explore the needs of german landlords and handymen we
            hired German UX research agency, which conducted qualitative research connected with prototype
            testing \u2013 we just had to analyse the results.
          </p>

          <figure className="mb-10">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610688dc46a51142e21c3ca0_ing7.png"
              alt="Exemplary screens of the app prototype tested with the German users"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Exemplary screens of the app prototype tested with the German users
            </figcaption>
          </figure>

          <p className="text-base text-gray-600 leading-relaxed mb-4">
            We also needed quantitative validation \u2013 so we wanted do develop another landing page, for the
            German market. However this time, we also decided to conduct a survey addressed for craftsmen \u2013 to
            adjust value proposition to that market.{" "}
            <strong>In total, we got around 50 responses and main conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed mb-8 list-disc pl-6 space-y-1">
            <li>Payment of time is sometimes an issue</li>
            <li>Suppliers don't like lead generation \u2013 they prefer to get assured jobs</li>
            <li>Suppliers believe that current bidding systems contribute to worse quality of jobs</li>
          </ul>

          <figure className="mb-16">
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610689d0be8cd0614356aa26_ingscreens.jpg"
              alt="Screens of German landing page"
              className="w-full"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Screens of German landing page \u2013 state before fixing copywriting/visual issues
            </figcaption>
          </figure>

          {/* Outcomes */}
          <h2 className="text-2xl font-bold text-[#374151] mb-6">
            The outcomes
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Thanks to this complex research project I had an opportunity to learn how to mix different research
            methods and how to cooperate in lean methodology. I could understand how to design more difficult
            research methods like fake door tests. Finally, we bring a lot of knowledge to the organization
            (ING) in the area of real estates, which could be used in similar projects.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF8F0] border-t-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-8 border-[#374151] p-12 bg-white">
            <h2 className="text-4xl font-bold text-[#374151] mb-6 border-b-8 border-[#FFC133] inline-block pb-2">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <p className="text-xl text-gray-600 mb-8 mt-6">
              I'm always open to discussing new projects and creative opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC133] text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all hover:translate-y-[-4px] font-bold"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
