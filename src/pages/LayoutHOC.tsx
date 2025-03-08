import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray h-full">
      <nav className="bg-gray-950 h-[5vh] w-full text-white p-7 flex items-center">
        <NavLink to="/">Home</NavLink>
      </nav>
      {children}
    </div>
  );
}
