import { Form } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdDomain, MdApartment, MdLocationOn } from "react-icons/md";

export default function Sidebar({
  provinces,
  regencies,
  districts,
  selected
}) {
  return (
    <aside className="w-80 bg-white p-6 border-r">
      <div className="flex items-center gap-3 mb-12">
        <FaGlobeAmericas className="text-blue-500 w-6 h-6" />
        <h1 className="text-xl font-bold">Frontend Assessment</h1>
      </div>
      
      <Form method="get" className="space-y-8">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-4">Filter Wilayah</p>
        </div>

        {/* Province */}
        <div>
          <label className="text-xs font-semibold text-gray-700 uppercase block mb-2">Provinsi</label>
          <div className="relative">
            <MdDomain className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
              name="provinces"
              defaultValue={selected.provinceId || ""}
              className="w-full border border-gray-300 p-3 pl-10 rounded-xl focus:outline-none focus:border-blue-500"
              onChange={(e) => e.currentTarget.form.submit()}
            >
              <option value="">Pilih Provinsi</option>
              {provinces.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Regency or Kabupate */}
        <div>
          <label className="text-xs font-semibold text-gray-700 uppercase block mb-2">Kota/Kabupaten</label>
          <div className="relative">
            <MdApartment className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
              name="regencies"
              defaultValue={selected.regencyId || ""}
              disabled={!selected.provinceId}
              className="w-full border border-gray-300 p-3 pl-10 rounded-xl focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
              onChange={(e) => e.currentTarget.form.submit()}
            >
              <option value="">Pilih Kota</option>
              {regencies.map(r => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* District or Kecamatan */}
        <div>
          <label className="text-xs font-semibold text-gray-700 uppercase block mb-2">Kecamatan</label>
          <div className="relative">
            <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
              name="districts"
              defaultValue={selected.districtId || ""}
              disabled={!selected.regencyId}
              className="w-full border border-gray-300 p-3 pl-10 rounded-xl focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
              onChange={(e) => e.currentTarget.form.submit()}
            >
              <option value="">Pilih Kecamatan</option>
              {districts.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset */}
        <a
          href="/"
          className="block text-center border border-blue-500 text-blue-500 p-3 rounded-xl mt-8 font-semibold hover:bg-blue-50"
        >
          Reset
        </a>

      </Form>
    </aside>
  );
}