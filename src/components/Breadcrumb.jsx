import { MdChevronRight } from "react-icons/md";

export default function Breadcrumb({ selected }) {
  return (
    <div className="text-sm flex items-center">
      <span className="text-black">Indonesia</span>
      {selected.province && (
        <>
          <MdChevronRight className="w-5 h-5 mx-1 text-black" />
          <span className={selected.regency ? "text-black" : "text-blue-500 font-semibold"}>
            {selected.province}
          </span>
        </>
      )}
      {selected.regency && (
        <>
          <MdChevronRight className="w-5 h-5 mx-1 text-black" />
          <span className={selected.district ? "text-black" : "text-blue-500 font-semibold"}>
            {selected.regency}
          </span>
        </>
      )}
      {selected.district && (
        <>
          <MdChevronRight className="w-5 h-5 mx-1 text-black" />
          <span className="text-blue-500 font-semibold">{selected.district}</span>
        </>
      )}
    </div>
  );
}