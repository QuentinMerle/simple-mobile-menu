import { createElem } from "./helpers.js";

export const simpleMenuMobile = (options = {}) => {
  const defaultOptions = {
    menuMobileButton: ".menu-mobile__button",
    menuMobile: ".menu-mobile",
    menuMobileItemHasChildren: ".menu-mobile__item--has-children",
    menuMobileSubMenu: ".menu-mobile__sub-menu",
    menuMobileBackLabel: "Retour",
    menuMobileBackClass: "menu-mobile__item",
  };

  options = Object.keys(options).length !== 0 ? options : defaultOptions;

  const menuMobileButton = document.querySelector(options.menuMobileButton);
  const menuMobile = document.querySelector(options.menuMobile);

  let openMenuMobile = () => {
    if (menuMobile.classList.contains("active")) {
      document.body.style.overflow = "";
      menuMobileButton.classList.remove("active");
      menuMobile.classList.remove("active");
    } else {
      document.body.style.overflow = "hidden";
      menuMobileButton.classList.add("active");
      menuMobile.classList.add("active");
    }
  };

  let ceateMenuMobile = () => {
    let itemHasChildren = menuMobile.querySelectorAll(
      options.menuMobileItemHasChildren
    );

    for (const item of itemHasChildren) {
      const spanNext = createElem("span", ["menu-mobile__arrow-right"]);
      const spanBack = createElem("li", [
        "menu-mobile__back",
        options.menuMobileBackClass,
      ]);
      spanBack.innerHTML = options.menuMobileBackLabel;

      item.appendChild(spanNext);
      item.querySelector(options.menuMobileSubMenu).prepend(spanBack);

      spanNext.addEventListener("click", (e) => {
        e.target.previousElementSibling.classList.add("active");
      });

      spanBack.addEventListener("click", (e) => {
        e.target.parentElement.classList.remove("active");
      });
    }
  };

  let init = () => {
    ceateMenuMobile();
    menuMobileButton.addEventListener("click", () => {
      openMenuMobile();
    });
  };

  if (menuMobileButton) {
    init();
  }
};
