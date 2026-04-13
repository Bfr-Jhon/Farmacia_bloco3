import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="w-full flex items-center px-8 py-4"
      style={{
        backgroundColor: "#44475A",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/home"
          className="text-lg font-semibold"
          style={{ color: "#F8F8F2", letterSpacing: "-0.03em", textDecoration: "none" }}
        >
          Farma<span style={{ color: "#50FA7B" }}>System</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          <li>
            <Link
              to="/home"
              style={{ color: "#F8F8F2", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#50FA7B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F8F8F2")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categorias"
              style={{ color: "#F8F8F2", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#50FA7B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F8F8F2")}
            >
              Categorias
            </Link>
          </li>
          <li>
            <Link
              to="/categorias/novo"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "#50FA7B", color: "#282A36", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              + Nova Categoria
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
