function Text() {
  return <div className="bg-[#ffc133] h-[5.112px] w-[168.3px]" data-name="Text" />;
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[20px] left-px top-0 w-[106px]" data-name="heading/h6">
        <p className="absolute font-['montserrat:semibold',sans-serif] inset-0 leading-[20px] not-italic text-[#261d08] text-[20px] whitespace-nowrap">Based in Prague</p>
      </div>
      <div className="absolute flex h-[5px] items-center justify-center left-0 top-[24px] w-[169.362px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-skew-x-12 flex-none scale-y-98">
          <Text />
        </div>
      </div>
    </div>
  );
}