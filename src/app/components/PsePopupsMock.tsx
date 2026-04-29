/**
 * Mock recreation of the PSE Innovation nested popups screenshot, translated from Polish to English.
 * Used in the Energy / PSE case study to illustrate UX problems with using too many pop-ups.
 */

const NAVY = "#1d3a6e";
const RED = "#c52727";
const HEADING_RED = "#a8423b";

export default function PsePopupsMock() {
  return (
    <div className="relative w-full bg-white border border-gray-300 text-[11px] text-gray-700 select-none p-4 overflow-hidden">
      {/* --- Background page: Entities list --- */}
      <div className="space-y-2 opacity-90">
        <div className="font-semibold text-[15px]" style={{ color: HEADING_RED }}>
          Entities
        </div>
        <div className="flex items-center gap-2">
          {["Add", "Browse", "Edit", "Delete", "Export"].map((b) => (
            <button
              key={b}
              type="button"
              className="bg-gray-200 text-gray-700 px-3 py-1 text-[11px] border border-gray-300"
            >
              {b}
            </button>
          ))}
          <div className="flex-1" />
          <div className="flex items-center border border-gray-300 bg-white">
            <input
              className="px-2 py-1 text-[11px] outline-none w-44"
              placeholder="Search…"
              readOnly
            />
            <button
              type="button"
              className="text-white px-2 py-1 text-[11px]"
              style={{ background: NAVY }}
            >
              ⌕
            </button>
          </div>
        </div>
        <div className="border border-gray-200 bg-[#f5f6f8] px-3 py-1.5 text-[11px]">
          <span style={{ color: RED }}>▶</span> Additional filters
        </div>
        {/* Faded table placeholder */}
        <div className="h-8 bg-gray-100 border border-gray-200" />
      </div>

      {/* --- Middle popup: "Entity – add" --- */}
      <div
        className="relative mt-4 bg-white border border-gray-300 shadow-md p-4 space-y-3"
        style={{ width: "92%", marginLeft: "4%" }}
      >
        <div className="font-semibold text-[14px]" style={{ color: HEADING_RED }}>
          Entity – add
        </div>

        {/* NIP / ZSZ ID / Status row */}
        <div className="border border-gray-200 bg-[#f5f6f8] p-3 grid grid-cols-12 gap-3 items-center text-[11px]">
          <div className="col-span-1 text-gray-700">Tax ID (NIP)</div>
          <div className="col-span-3">
            <input
              className="w-full h-7 border border-gray-300 bg-gray-100 px-2 text-[11px] text-gray-400"
              placeholder="e.g. PL0000000000"
              readOnly
            />
          </div>
          <div className="col-span-1">
            <button
              type="button"
              className="w-7 h-7 text-white inline-flex items-center justify-center"
              style={{ background: NAVY }}
            >
              ✎
            </button>
          </div>
          <div className="col-span-1 text-gray-700">ZSZ ID</div>
          <div className="col-span-2">
            <input
              className="w-full h-7 border border-gray-300 bg-gray-100 px-2 text-[11px] text-gray-400"
              placeholder="ZSZ ID"
              readOnly
            />
          </div>
          <div className="col-span-1">
            <button
              type="button"
              className="w-7 h-7 text-white inline-flex items-center justify-center"
              style={{ background: NAVY }}
            >
              ✎
            </button>
          </div>
          <div className="col-span-1 text-gray-700">Status</div>
          <div className="col-span-2">
            <div className="h-7 border border-gray-300 bg-white flex items-center justify-between px-2 text-[11px] text-gray-700">
              <span>ACTIVE</span>
              <span className="text-gray-500">▾</span>
            </div>
          </div>
        </div>

        {/* Name / Country / Street / E-mail (faded behind top popup) */}
        <div className="border border-gray-200 bg-[#f5f6f8] p-3 space-y-2 text-[11px]">
          {[
            { label: "* Name" },
            { label: "Country" },
            { label: "Street" },
            { label: "E-mail" },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-1 text-gray-700">{row.label}</div>
              <div className="col-span-5">
                <div className="h-7 border border-gray-300 bg-gray-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Entity-type checkboxes */}
        <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-700 pt-1">
          {[
            "AGR Aggregator",
            "OSDn Distribution System Operator (not connected)",
            "OSDp Distribution System Operator (connected)",
            "OS Network Recipient",
            "WYTn Producer (not connected)",
            "WYTp Producer (connected)",
            "PO Trading Company",
          ].map((label) => (
            <label key={label} className="flex items-center gap-1.5">
              <span className="w-3 h-3 inline-block border border-gray-400 bg-white" />
              <span>{label}</span>
            </label>
          ))}
        </div>

        {/* --- Top popup: "Edit Tax ID / Define SAP linkage" --- */}
        <div
          className="absolute bg-white border border-gray-300 shadow-lg p-4 space-y-3"
          style={{
            top: "30%",
            left: "8%",
            right: "4%",
          }}
        >
          <div className="font-semibold text-[13px]" style={{ color: HEADING_RED }}>
            Edit Tax ID / Define SAP linkage
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-gray-700">Tax ID (NIP)</span>
            <input
              className="h-7 w-44 border border-gray-300 bg-white px-2 text-[11px] text-gray-400"
              placeholder="e.g. PL0000000000"
              readOnly
            />
            <button
              type="button"
              className="h-7 w-7 text-white inline-flex items-center justify-center"
              style={{ background: NAVY }}
            >
              ⌕
            </button>
          </div>

          {/* Mini table */}
          <div className="border border-gray-200">
            <div
              className="grid grid-cols-3 text-white text-[11px] font-semibold"
              style={{ background: NAVY }}
            >
              {["Tax ID (NIP)", "ZSZ ID", "Name"].map((h) => (
                <div
                  key={h}
                  className="px-3 py-1.5 border-r border-white/20 last:border-r-0 flex items-center gap-1"
                >
                  <span>{h}</span>
                  <span className="opacity-70">↕</span>
                </div>
              ))}
            </div>
            <div className="px-3 py-2 text-[11px] text-gray-600 italic">No records</div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              className="text-white px-3 py-1.5 text-[11px]"
              style={{ background: NAVY }}
            >
              Link to SAP
            </button>
            <button
              type="button"
              className="text-white px-3 py-1.5 text-[11px] opacity-70"
              style={{ background: NAVY }}
            >
              Continue without SAP linkage
            </button>
            <button
              type="button"
              className="text-white px-3 py-1.5 text-[11px]"
              style={{ background: NAVY }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
