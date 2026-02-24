import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import { provinces } from "./data/provinces";
import { regencies } from "./data/regencies";
import { districts } from "./data/districts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: ({ request }) => {
      const url = new URL(request.url);

      const provinceId = Number(url.searchParams.get("provinces"));
      const regencyId = Number(url.searchParams.get("regencies"));
      const districtId = Number(url.searchParams.get("districts"));

      const filteredRegencies = provinceId
        ? regencies.filter(r => r.province_id === provinceId)
        : [];

      const filteredDistricts = regencyId
        ? districts.filter(d => d.regency_id === regencyId)
        : [];

      const selectedProvince = provinces.find(p => p.id === provinceId);
      const selectedRegency = regencies.find(r => r.id === regencyId);
      const selectedDistrict = districts.find(d => d.id === districtId);

      return {
        provinces,
        regencies: filteredRegencies,
        districts: filteredDistricts,
        selected: {
          provinceId,
          regencyId,
          districtId,
          province: selectedProvince?.name,
          regency: selectedRegency?.name,
          district: selectedDistrict?.name
        }
      };
    }
  }
], {
  basename: "/frontend-assestment-sakti", // Add your repo name here
});