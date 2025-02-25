import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

// src/@types/layout.d.ts
interface NavItem {
  id: string;
  label: string;
  path: string;
  year: number;
}

// src/constants/navigation.ts
export const navItems: NavItem[] = [
  {
    id: "portfolio-2025",
    label: "2025",
    path: "/portfolio/2025",
    year: 2025,
  },
  {
    id: "portfolio-2024",
    label: "2024",
    path: "/portfolio/2024",
    year: 2024,
  },
];

// src/components/domain/layout/Navigation/NavItem.tsx
interface NavItemProps {
  item: NavItem;
  isActive: boolean;
}

export const NavItem = ({ item, isActive }: NavItemProps) => {
  return (
    <Link to={item.path} className={`nav-item ${isActive ? "active" : ""}`}>
      {item.label}
    </Link>
  );
};

// src/components/domain/layout/Navigation/index.tsx
export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Portfolio
          </Link>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} isActive={location.pathname.includes(item.path)} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
