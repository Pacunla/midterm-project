import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="w-full bg-grNav px-6 py-4 shadow-xl drop-shadow-xl flex justify-between items-center">

            <div className="font-bold">
              <h2 className="text-xl text-vistBlue">Virtualization Country Information</h2>
              <p className="text-sm font-mono text-white">By Jhanrel Pacunla</p>
            </div>
            
        <ul className="flex gap-6 text-xl text-vistBlue font-mono font-bold">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-vistBlue" }>
                Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-vistBlue" }>
                About
            </NavLink>
          </li>

          <li>
            <NavLink to="/about-api" className={({ isActive }) => isActive ? "text-white" : "text-vistBlue"}>
                API
            </NavLink>
          </li>

        </ul>
      </nav>
    </>
  );
}
