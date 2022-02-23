/**
 * Create element with class
 *
 * @param   {Object} ele - Element tag
 * @param   {String} classname - Class to attribute
 * @returns {Object}
 */
export const createElem = (ele, classname) => {
  let spanElem = document.createElement(ele);
  spanElem.classList.add(...classname);

  return spanElem;
};

/**
 * Detect Mobile & Tablet devices
 *
 * @returns {Boolean}
 */
export const detectMob = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};
