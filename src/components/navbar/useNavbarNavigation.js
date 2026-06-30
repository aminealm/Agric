import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function scrollToPageTop(behavior = "auto") {
  window.scrollTo({ top: 0, behavior });
}

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

  const goToRouteTop = useCallback(
    (pathname) => {
      onNavigate?.();

      if (location.pathname === pathname) {
        scrollToPageTop("smooth");
        return;
      }

      navigate(pathname);

      setTimeout(() => {
        scrollToPageTop("auto");
      }, 0);
    },
    [location.pathname, navigate, onNavigate]
  );

  const navItems = useMemo(
    () => [
      {
        label: "À propos de nous",
        onClick: () => goToRouteTop("/about"),
        active: location.pathname === "/about",
      },
      {
        label: "Secteurs",
        onClick: () => goToRouteTop("/secteurs"),
        active: location.pathname === "/secteurs",
      },
      {
        label: "Références",
        onClick: () => goToRouteTop("/references"),
        active: location.pathname === "/references",
      },
      {
        label: "Contact",
        onClick: () => scrollToSection("contact", -90),
      },
    ],
    [goToRouteTop, location.pathname, scrollToSection]
  );

  return {
    isInnerPage: location.pathname !== "/",
    isScrolled,
    navItems,
    scrollToSection,
  };
}


