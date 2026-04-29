/**
 * Mock recreation of the PSE Innovation form screenshot, translated from Polish to English.
 * Used in the Energy / PSE case study to illustrate UX problems with confirmation buttons.
 */
type Variant = "buttons" | "deletion";

type Props = {
  variant?: Variant;
  highlight?: boolean;
};

export default function PseFormMock({ variant = "buttons", highlight = true }: Props) {
  return (
    <div className="w-full bg-white border border-gray-300 text-[11px] text-gray-700 select-none">
      {/* Title bar */}
      <div className="bg-[#1d3a6e] text-white px-3 py-2 font-semibold text-[12px]">
        Unit JF/15201564E3/2324
      </div>

      <div className="p-3 grid grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="space-y-2">
          <Field label="STORM unit code:" value="JF/15201564E3/2324" />
          <Field label="Physical unit name:" value="12" />
          <Field label="Unit address:" value="12-140 12, Poland" />
          <Field label="Unit type:" value="Existing physical generation unit" valueClass="text-[#c45c2a]" />
          <FieldBox label="Additional unit information" />
          <FieldBox label="Comments" />
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <Field label="A 1-1 code:" value="" />
          <Field label="Owner:" value="12" />
          <Field label="Owner address:" value="12-120 12 12, Poland" />
          <FieldBox label="Additional owner information" />
        </div>

        {/* Column 3 — technical parameters */}
        <div className="border-l border-gray-300 pl-4 space-y-1.5">
          <div className="font-semibold text-gray-800 mb-2">JF Technical parameters</div>
          <Field label="Available net power" value="12 MW" inline />
          <Field label="Available gross power" value="12 MW" inline />
          <Field label="Planned total available power" value="" inline />
          <Field label="Function" value="Electricity producer" inline valueClass="text-[#c45c2a]" />
          <Field label="Technology" value="electrochemical battery" inline valueClass="text-[#c45c2a]" />
          <Field label="Primary energy source" value="remaining biogas" inline valueClass="text-[#c45c2a]" />
          <Field label="Additional energy source" value="" inline />
        </div>
      </div>

      {/* Action buttons (bottom right) */}
      <div className="px-3 pb-3 flex justify-end">
        <div
          className={
            highlight
              ? "border-2 border-red-500 p-2 flex gap-2"
              : "p-2 flex gap-2"
          }
        >
          {variant === "buttons" ? (
            <>
              <button className="bg-gray-100 border border-gray-300 px-3 py-1.5 text-[11px] text-gray-800 hover:bg-gray-200" type="button">
                Confirm verification
              </button>
              <button className="bg-gray-100 border border-gray-300 px-3 py-1.5 text-[11px] text-gray-800 hover:bg-gray-200" type="button">
                Reject verification
              </button>
              <button className="bg-[#c52727] text-white px-3 py-1.5 text-[11px] hover:bg-[#a51e1e]" type="button">
                Cancel
              </button>
            </>
          ) : (
            <button className="bg-[#c52727] text-white px-3 py-1.5 text-[11px] hover:bg-[#a51e1e]" type="button">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  inline,
  valueClass,
}: {
  label: string;
  value: string;
  inline?: boolean;
  valueClass?: string;
}) {
  if (inline) {
    return (
      <div className="flex justify-between gap-2 text-[11px]">
        <span className="text-gray-700">{label}</span>
        <span className={`text-right ${valueClass ?? "text-gray-900"}`}>{value || " "}</span>
      </div>
    );
  }
  return (
    <div className="flex gap-2 text-[11px]">
      <span className="font-semibold text-gray-700 shrink-0">{label}</span>
      <span className={valueClass ?? "text-gray-900"}>{value || " "}</span>
    </div>
  );
}

function FieldBox({ label }: { label: string }) {
  return (
    <div className="border border-gray-300 rounded-sm px-2 py-2 text-[10px] text-gray-500 bg-white">
      <span className="bg-white px-1 -mt-3 inline-block relative -top-3 text-gray-500">
        {label}
      </span>
    </div>
  );
}
