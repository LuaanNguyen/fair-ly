import { Settings, X, Flag } from "lucide-react";
export default function Header() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/whitelogo.svg"
          className="w-[50px] aspect-square"
          alt="Logo"
        />
        <h1 className="text-2xl font-semibold">Fair-ly</h1>
      </div>
      <div className="flex gap-3">
        <Flag className="cursor-not-allowed" />
        <Settings className="cursor-not-allowed" />
        <X className="cursor-pointer" onClick={() => window.close()} />
      </div>
    </nav>
  );
}
