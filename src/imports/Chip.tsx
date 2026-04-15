export default function Chip({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#fbe3d8] content-stretch flex items-center justify-center px-[8px] py-[5px] relative"} data-name="chip">
      <div aria-hidden="true" className="absolute border-2 border-[#f09065] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f09065] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Chip_label_example</p>
      </div>
    </div>
  );
}