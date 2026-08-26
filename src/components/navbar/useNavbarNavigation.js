import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useNavbarNavigation({ onNavigate, sectionOffset = -90 } = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = useCallback(
    (sectionId, offset = sectionOffset) => {
      onNavigate?.();

      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);

        if (section) {
          const top =
            section.getBoundingClientRect().top + window.pageYOffset + offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }

        return;
      }

      navigate("/", {
        state: {
          scrollTo: sectionId,
          offset,
        },
      });
    },
    [location.pathname, navigate, onNavigate, sectionOffset]
  );

  const handleHomeClick = useCallback(
    (event) => {
      if (location.pathname === "/") {
        event.preventDefault();
        scrollToSection("home", sectionOffset);
        return;
      }

      onNavigate?.();
    },
    [location.pathname, onNavigate, scrollToSection, sectionOffset]
  );

  const navItems = useMemo(
    () => [
      {
        label: "À propos de nous",
        to: "/about",
        onClick: onNavigate,
        active: location.pathname === "/about",
      },
      {
        label: "Secteurs",
        to: "/secteurs",
        onClick: onNavigate,
        active: location.pathname === "/secteurs",
      },
      {
        label: "Références",
        to: "/references",
        onClick: onNavigate,
        active: location.pathname.startsWith("/references"),
      },
      {
        label: "Contact",
        to: "/",
        state: { scrollTo: "contact", offset: -90 },
        onClick: (event) => {
          if (location.pathname === "/") {
            event.preventDefault();
            scrollToSection("contact", -90);
            return;
          }

          onNavigate?.();
        },
      },
    ],
    [location.pathname, onNavigate, scrollToSection]
  );

  return {
    isInnerPage: location.pathname !== "/",
    isScrolled,
    handleHomeClick,
    navItems,
    scrollToSection,
  };
}


