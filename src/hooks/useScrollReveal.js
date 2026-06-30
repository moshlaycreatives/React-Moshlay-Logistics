import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
            delete en.target.dataset.revealObserved;
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    function observeNew() {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => {
        if (!el.dataset.revealObserved) {
          el.dataset.revealObserved = "1";
          io.observe(el);
        }
      });
    }

    els.forEach((el) => {
      el.classList.remove("is-in");
      delete el.dataset.revealObserved;
    });

    observeNew();

    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}
