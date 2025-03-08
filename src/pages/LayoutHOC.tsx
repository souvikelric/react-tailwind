import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <nav className="bg-gray-950 h-[5vh] w-full">Navbar</nav>
      {children}
    </div>
  );
}
