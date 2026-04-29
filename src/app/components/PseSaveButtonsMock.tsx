/**
 * Mock recreation of the PSE Innovation "many save buttons on the same screen" screenshot,
 * translated from Polish to English.
 * Used in the Energy / PSE case study to illustrate UX problems with using too many "save" buttons.
 */

const NAVY = "#1d3a6e";
const RED = "#c52727";

export default function PseSaveButtonsMock() {
  return (
    <div className="w-full bg-white border border-gray-300 text-[12px] text-gray-700 select-none p-5 space-y-4">
      {/* Two small input fields (tail of a previous form section) */}
      <div className="flex gap-3">
        <div className="w-32 h-9 border border-gray-300 bg-white flex items-center px-2 text-gray-700">
          2
        </div>
        <div className="w-64 h-9 border border-gray-300 bg-white flex items-center px-2 text-gray-700">
          W
        </div>
      </div>

      {/* Headquarters address */}
      <div className="flex gap-6 items-baseline">
        <div className="w-44 text-gray-800">Headquarters address</div>
        <div className="text-gray-700">
          44-343 Wrocław, Kosmonautów St. 448a apt. 4, Poland
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Entity code - capacity provider with search + Save codes */}
      <div className="flex items-center gap-3">
        <div className="w-44 text-gray-800">
          Entity code – capacity provider<span style={{ color: RED }}>*</span>
        </div>
        <div className="flex flex-1 max-w-[420px] border border-gray-300">
          <input
            className="flex-1 h-9 px-2 text-[12px] outline-none"
            defaultValue="223"
            readOnly
          />
          <button
            type="button"
            className="h-9 w-10 text-white flex items-center justify-center"
            style={{ background: NAVY }}
          >
            ⌕
          </button>
        </div>
        <button
          type="button"
          className="h-9 px-4 text-white text-[12px] font-medium"
          style={{ background: NAVY }}
        >
          Save codes
        </button>
      </div>

      {/* The four bottom-right buttons that illustrate the problem */}
      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          className="h-9 px-4 text-white text-[12px] font-medium"
          style={{ background: NAVY }}
        >
          Save changes
        </button>
        <button
          type="button"
          className="h-9 px-4 text-white text-[12px] font-medium"
          style={{ background: NAVY }}
        >
          Confirm verification
        </button>
        <button
          type="button"
          className="h-9 px-4 text-white text-[12px] font-medium"
          style={{ background: NAVY }}
        >
          Submit verification comments
        </button>
        <button
          type="button"
          className="h-9 px-4 text-white text-[12px] font-medium"
          style={{ background: RED }}
        >
          Cancel
        </button>
      </div>

      {/* Collapsed section header */}
      <div className="bg-[#dde2eb] text-gray-800 px-3 py-2 text-[12px] font-medium flex items-center gap-2">
        <span style={{ color: RED }}>▶</span>
        <span>Capacity market unit parameter verification</span>
      </div>
    </div>
  );
}
