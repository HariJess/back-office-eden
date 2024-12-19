import React, { useState } from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${isItemActive ? "bg-white " : ""} group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white transition-colors duration-500 ease-in-out`}
          style={{
            color: isHovered
              ? isItemActive
                ? "white" // Couleur du texte quand actif et survolé
                : "white" // Couleur du texte seulement survolé
              : isItemActive
                ? "rgba(2, 111, 202, 1)" // Couleur du texte quand actif
                : "white", // Couleur du texte par défaut
            background: isHovered
              ? isItemActive
                ? "linear-gradient(90deg, rgba(1,139,223,1)6%, rgba(1,130,216,1) 66%)" // Dégradé quand actif et survolé
                : "linear-gradient(90deg, rgba(1,139,223,1)6%, rgba(1,130,216,1) 66%)" // Dégradé seulement survolé
              : "", // Fond par défaut
            border: isHovered
              ? "2px solid transparent"
              : "2px solid transparent", // Bordure transparente par défaut
            borderImage: isHovered
              ? "linear-gradient(90deg, rgba(242,20,246,1) 0%, rgba(2,111,202,1) 100%) 1" // Dégradé sur la bordure au survol
              : "", // Pas de dégradé par défaut
            boxShadow: isHovered
              ? "0px 4px 8px rgba(0, 0, 0, 0.2)" // Petite ombre en bas au survol
              : "", // Pas d'ombre par défaut
          }}
        >
          {item.icon}
          <strong style={{ fontFamily: "ADLaM Display, sans-serif" }}>
            {item.label}
          </strong>

          {item.children && (
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                pageName === item.label.toLowerCase() && "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
