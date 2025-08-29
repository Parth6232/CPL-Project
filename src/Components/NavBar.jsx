import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* 🔹 CHANGED: Added Tailwind navbar styles */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">CPL 2025</h1>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
              }
            >
              News
            </NavLink>
            <NavLink
              to="/pointstable"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
              }
            >
              Points Table
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
