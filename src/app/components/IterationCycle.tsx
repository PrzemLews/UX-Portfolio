import { ArrowRight, RotateCw } from "lucide-react";

type Step = { title: string };

type Props = {
  focus?: string;
  steps: Step[];
  iterations?: string; // e.g. "6 iterations"
  caption?: string;
};

export default function IterationCycle({ focus, steps, iterations, caption }: Props) {
  return (
    <figure className="my-8">
      {/* Header row: focus + iterations */}
      {(focus || iterations) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {focus && (
            <h3 className="text-[20px] font-bold text-[#374151] inline-block border-b-4 border-[#FFC133] pb-1 self-start">
              Focus: {focus}
            </h3>
          )}
          {iterations && (
            <div className="inline-flex items-center gap-2 self-start sm:self-auto">
              <RotateCw size={18} className="text-[#374151]" strokeWidth={3} />
              <span className="font-bold text-[#374151] text-[14px]">
                {iterations}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="absolute inset-0 bg-[#FFC133] transform translate-x-1.5 translate-y-1.5 border-4 border-[#374151]" />
            <div className="relative bg-white border-4 border-[#374151] p-4 h-full flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="shrink-0 w-7 h-7 bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center font-bold text-[12px] text-[#374151]">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-[#374151] ml-auto hidden lg:block"
                    strokeWidth={3}
                  />
                )}
              </div>
              <h4 className="font-bold text-[#374151] text-[14px] leading-tight">
                {step.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {caption && (
        <figcaption
          className="mt-3 text-sm text-gray-500 italic leading-relaxed"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  );
}
