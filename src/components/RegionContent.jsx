import { FaArrowDown } from "react-icons/fa6";

export default function RegionContent({ selected }) {
  return (
    <div>
      {selected.province && (
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase mb-4">Provinsi</p>
          <h1 className="text-7xl font-bold text-black">{selected.province}</h1>
        </div>
      )}
      {selected.regency && (
        <>
          <div className="flex justify-center my-8">
            <FaArrowDown className="w-6 h-6 text-gray-400" />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-blue-400 uppercase mb-4">Kota / Kabupaten</p>
            <h2 className="text-7xl font-bold text-black">{selected.regency}</h2>
          </div>
        </>
      )}
      {selected.district && (
        <>
          <div className="flex justify-center my-8">
            <FaArrowDown className="w-6 h-6 text-gray-400" />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-blue-400 uppercase mb-4">Kecamatan</p>
            <h3 className="text-7xl font-bold text-black">{selected.district}</h3>
          </div>
        </>
      )}
    </div>
  );
}