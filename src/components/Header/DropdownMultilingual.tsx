import { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Assurez-vous d'importer Image de Next.js pour optimiser les images
import eu from "../../../public/images/logo/eu.png";
import fr from "../../../public/images/logo/fr.png";

const DropdownMultilingual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        onClick={handleToggle}
        className="flex h-8 w-35 cursor-pointer items-center justify-between bg-secondary p-2 text-white"
      >
        <div className="flex items-center">
          <Image
            src={selectedLanguage === "en" ? eu : fr}
            alt={selectedLanguage === "en" ? "English flag" : "French flag"}
          />
          <strong>
            <span className="ml-2 text-sm">
              {selectedLanguage === "en" ? "English" : "Français"}
            </span>
          </strong>
        </div>
        <svg
          className={`absolute right-2 top-1/2 -translate-y-1/2 fill-current`}
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
            fill="white"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full shadow-lg">
          <div
            onClick={() => handleSelect("fr")}
            className=" flex h-8 cursor-pointer items-center bg-white p-2 text-secondary hover:bg-secondary hover:text-white"
          >
            <Image src={fr} alt="French flag" />
            <strong>
              <span className="ml-2 text-sm">Français</span>
            </strong>
          </div>

          <div
            onClick={() => handleSelect("en")}
            className=" flex h-8 cursor-pointer items-center bg-white p-2 text-secondary hover:bg-secondary hover:text-white"
          >
            <Image src={eu} alt="English flag" />
            <strong>
              <span className="ml-2 text-sm">English</span>
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMultilingual;
