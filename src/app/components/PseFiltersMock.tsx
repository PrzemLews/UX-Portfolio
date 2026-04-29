/**
 * Mock recreation of the PSE Innovation filters/table screenshot, translated from Polish to English.
 * Used in the Energy / PSE case study to illustrate UX problems with the records filtration mechanism.
 */

const NAVY = "#1d3a6e";
const RED = "#c52727";

export default function PseFiltersMock() {
  return (
    <div className="w-full bg-white border border-gray-300 text-[11px] text-gray-700 select-none space-y-3 p-3">
      {/* --- Top section: contracts table --- */}
      <div className="border border-gray-200">
        {/* Toolbar */}
        <div className="flex items-stretch gap-px bg-gray-200">
          <ToolbarBtn icon="+" label="Add guaranteed" />
          <ToolbarBtn icon="+" label="Add current" />
          <ToolbarBtn icon="✎" label="Edit" />
          <ToolbarBtn label="Browse" />
          <ToolbarBtn icon="−" label="Delete" />
          <div className="flex-1 bg-white" />
          <button
            type="button"
            className="bg-white border border-gray-300 px-3 py-1.5 text-[11px] flex items-center gap-1.5"
          >
            <span style={{ color: RED }}>▶</span>
            <span className="text-gray-800">Close filters</span>
          </button>
        </div>

        {/* Filter row */}
        <div className="bg-[#f5f6f8] px-3 py-3 grid grid-cols-12 gap-3 items-center">
          <div className="col-span-2 text-[11px] text-gray-700 space-y-3">
            <div>Tender package</div>
            <div>Contract period — date range</div>
          </div>
          <div className="col-span-3 space-y-2">
            <SelectInput />
            <div className="flex gap-2 text-[11px] items-center">
              <span>Date from:</span>
              <DateInput />
              <span>Date to:</span>
              <DateInput />
            </div>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2 text-right text-[11px] text-gray-700 self-start pt-1">
            Program type:
          </div>
          <div className="col-span-2 space-y-1 text-[11px]">
            <Checkbox checked label="guaranteed" />
            <Checkbox checked label="current" />
          </div>
          <div className="col-span-2 flex gap-2 justify-end">
            <button type="button" className="bg-white border border-gray-300 px-3 py-1.5 text-[11px]">
              Clear
            </button>
            <button
              type="button"
              className="text-white px-3 py-1.5 text-[11px] flex items-center gap-1"
              style={{ background: RED }}
            >
              <span>▼</span> Filter
            </button>
          </div>
        </div>

        {/* Table header */}
        <div
          className="grid grid-cols-6 text-white text-[11px] font-semibold"
          style={{ background: NAVY }}
        >
          {[
            "Contract number",
            "Contractor",
            "Program",
            "Package",
            "Contract date from",
            "Contract date to",
          ].map((h, i) => (
            <div
              key={i}
              className="px-3 py-2.5 border-r border-white/20 last:border-r-0 flex items-center justify-between"
            >
              <span>{h}</span>
              <span className="opacity-70">↕</span>
            </div>
          ))}
        </div>
        {/* Filter inputs row under header */}
        <div className="grid grid-cols-6 bg-white border-b border-gray-200">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="px-2 py-2 border-r border-gray-200 last:border-r-0">
              <div className="h-5 border border-gray-300 bg-white" />
            </div>
          ))}
        </div>
        {/* Empty data row */}
        <div className="px-3 py-3 text-[11px] text-gray-400 italic">CMC Poland S…</div>
      </div>

      {/* --- Bottom section: applications table --- */}
      <div className="border border-gray-200">
        {/* "Filters" header bar */}
        <div className="text-white px-3 py-1.5 text-[11px] font-semibold" style={{ background: NAVY }}>
          Filters
        </div>
        <div className="bg-[#f5f6f8] px-3 py-3 grid grid-cols-12 gap-3 items-end">
          {[
            "Auction year:",
            "Username:",
            "Owner name:",
            "Agent name:",
            "Unit name:",
          ].map((label, i) => (
            <div key={i} className="col-span-2">
              <div className="text-[11px] text-gray-700 mb-1">{label}</div>
              <SelectInput />
            </div>
          ))}
          <div className="col-span-2 flex gap-2 justify-end">
            <button type="button" className="bg-white border border-gray-300 px-3 py-1.5 text-[11px]">
              Clear
            </button>
            <button
              type="button"
              className="text-white px-3 py-1.5 text-[11px] flex items-center gap-1"
              style={{ background: RED }}
            >
              <span>▼</span> Filter
            </button>
          </div>
        </div>

        {/* Section bar */}
        <div className="text-white px-3 py-1.5 text-[11px] font-semibold" style={{ background: NAVY }}>
          Applications for auction certification
        </div>

        {/* Header row with many columns */}
        <div
          className="grid text-white text-[10.5px] font-semibold"
          style={{ background: NAVY, gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
        >
          {[
            "Number of physical units",
            "Application number",
            "Unit type",
            "Submission date",
            "Formal-legal verification",
            "JRM parameters verification",
            "Schedule and attachments verification",
            "Responsible person",
            "Application approval status",
            "Approval date",
          ].map((h, i) => (
            <div
              key={i}
              className="px-2 py-2 border-r border-white/20 last:border-r-0 flex items-center justify-between gap-1 leading-tight"
            >
              <span>{h}</span>
              <span className="opacity-70">↕</span>
            </div>
          ))}
        </div>

        {/* Filter inputs row */}
        <div
          className="grid bg-white border-b border-gray-200"
          style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
        >
          {[
            { kind: "input" },
            { kind: "input" },
            { kind: "select", value: "all" },
            { kind: "date" },
            { kind: "select", value: "all" },
            { kind: "select", value: "all" },
            { kind: "select", value: "all" },
            { kind: "input" },
            { kind: "select", value: "all", check: true },
            { kind: "date" },
          ].map((c, i) => (
            <div key={i} className="px-1.5 py-2 border-r border-gray-200 last:border-r-0">
              {c.kind === "select" ? (
                <div className="h-5 border border-gray-300 bg-white flex items-center justify-between px-1 text-[10px] text-gray-700">
                  <span className="flex items-center gap-1">
                    {c.check && <span className="inline-block w-2.5 h-2.5 border border-gray-400" />}
                    {c.value}
                  </span>
                  <span className="text-gray-500">▾</span>
                </div>
              ) : c.kind === "date" ? (
                <div className="h-5 border border-gray-300 bg-white flex items-center justify-between px-1 text-[10px] text-gray-500">
                  <span>dd-mm-yy</span>
                  <span style={{ color: RED }}>📅</span>
                </div>
              ) : (
                <div className="h-5 border border-gray-300 bg-white" />
              )}
            </div>
          ))}
        </div>

        {/* Highlighted data row (mimicking the yellow rows in the original) */}
        <div
          className="grid text-[10.5px] text-gray-800"
          style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))", background: "#fff8d6" }}
        >
          {[
            "1",
            "855/2021/01",
            "existing market unit",
            "2018-07-03 09:19",
            "+ 2018-07-03 09:19",
            "+ 2018-07-03 09:19",
            "+ 2018-07-03 09:19",
            "Paweł Kowalski",
            "submitted",
            "",
          ].map((v, i) => (
            <div key={i} className="px-2 py-1.5 border-r border-white last:border-r-0 truncate">
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolbarBtn({ icon, label }: { icon?: string; label: string }) {
  return (
    <button
      type="button"
      className="text-white px-3 py-1.5 text-[11px] flex items-center gap-1.5 font-medium"
      style={{ background: NAVY }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
}

function SelectInput() {
  return (
    <div className="h-6 border border-gray-300 bg-white flex items-center justify-end px-2 text-[10px] text-gray-500">
      <span style={{ color: RED }}>▾</span>
    </div>
  );
}

function DateInput() {
  return (
    <div className="h-6 border border-gray-300 bg-white flex items-center justify-between px-2 text-[10px] text-gray-500 flex-1 min-w-0">
      <span>rrrr-mm-dd</span>
      <span className="text-gray-400">×</span>
      <span style={{ color: RED }}>📅</span>
    </div>
  );
}

function Checkbox({ checked, label }: { checked?: boolean; label: string }) {
  return (
    <label className="flex items-center gap-1.5">
      <span
        className="w-3 h-3 inline-flex items-center justify-center text-[10px] text-white"
        style={{ background: checked ? NAVY : "#fff", border: `1px solid ${checked ? NAVY : "#9ca3af"}` }}
      >
        {checked ? "✓" : ""}
      </span>
      <span>{label}</span>
    </label>
  );
}
