import { Settings, X, Flag } from "lucide-react";
import Loader from "./components/Loader";

function App() {
  return (
    <main className="w-[400px] h-[400px] bg-black border-2 border-white text-white ">
      <section className="p-4 flex flex-col">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/whitelogo.svg" className="w-[50px] aspect-square"></img>
            <h1 className="text-2xl font-semibold">Bias Analyzer</h1>
          </div>
          <div className="flex gap-3">
            <Flag className="cursor-not-allowed" />
            <Settings className="cursor-not-allowed " />
            <X className="cursor-pointer" onClick={() => window.close()} />
          </div>
        </nav>
        <Loader />
      </section>
    </main>
  );
}

export default App;
