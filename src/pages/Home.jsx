import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import RegionContent from "../components/RegionContent.jsx";

export default function Home() {
  const data = useLoaderData();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar {...data} />
      <main className="flex-1 flex flex-col">
        <div className="w-full bg-white px-10 py-6 border-b">
          <Breadcrumb selected={data.selected} />
        </div>
        <div className="flex-1 p-10">
          <RegionContent selected={data.selected} />
        </div>
      </main>
    </div>
  );
}