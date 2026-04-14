export default function Button() {
  return (
    <div className="bg-[#fbe3d8] content-stretch flex gap-[5px] items-center justify-center px-[20px] py-[10px] relative size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#f09065] border-solid inset-0 pointer-events-none" />
      <p className="font-['montserrat:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f09065] text-[16px] whitespace-nowrap">Button</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_left">
        <div className="absolute inset-[29.17%_41.67%_29.17%_37.5%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
            <path d="M5 10L0 5L5 0V10Z" fill="var(--fill-0, #F09065)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}