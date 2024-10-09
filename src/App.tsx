import { useState } from "react";

import Loader from "./components/Loader";
import Header from "./components/Header";

interface Website {
  name: string;
  riskScore: number;
}

interface AnalysisData {
  riskScore: number;
  riskType: string;
  websites: Website[];
}

function App() {
  const [activeTab, setActiveTab] = useState<"analyze" | "explore">("analyze");
  const [analysisData] = useState<AnalysisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  /* Function to render content based on the active tab */
  const renderContent = () => {
    if (activeTab === "analyze") {
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Analyze</h2>
          {isAnalyzing ? (
            <Loader />
          ) : (
            <button
              className="px-4 py-2 bg-white text-black rounded"
              onClick={() => setIsAnalyzing(true)}
            >
              Start Analysis
            </button>
          )}
        </div>
      );
    } else if (activeTab === "explore") {
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Explore</h2>
          {analysisData ? (
            <ul className="list-disc list-inside">
              {analysisData.websites.map((website) => (
                <li key={website.name}>
                  {website.name} - Risk Score: {website.riskScore}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mx-auto">
              No data to display. Run an analysis first.
            </p>
          )}
        </div>
      );
    }
  };

  return (
    <main className="w-[400px] h-[400px] bg-black border-2 border-white text-white flex flex-col">
      <section className="p-4 flex flex-col flex-grow">
        {/* Header (logo, icons,etc)  */}
        <Header />

        {/* Main stuff to be render (chart, analysis) */}
        <div className="mt-4">{renderContent()}</div>
      </section>

      {/* Toggle Button  */}
      <div className="flex items-center gap-4 my-4 mx-auto">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2">Analyze</span>
          <input
            type="checkbox"
            className="hidden"
            checked={activeTab === "explore"}
            onChange={() =>
              setActiveTab((prev) =>
                prev === "analyze" ? "explore" : "analyze"
              )
            }
          />
          <div className="relative w-12 h-6 bg-gray-700 rounded-full">
            <div
              className={`absolute top-1 left-1 h-4 w-4 bg-white rounded-full transition-transform ${
                activeTab === "explore" ? "translate-x-6" : ""
              }`}
            />
          </div>
          <span className="ml-2">Explore</span>
        </label>
      </div>
    </main>
  );
}

export default App;
