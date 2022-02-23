# Simple Mobile Menu

A small (~1kb compressed), easy and simple menu mobile function

Please, feel free to use and improve it! 🤘

See [demo](https://codepen.io/oim/pen/rNYKdGy)

## 💾 Installation

Download this `menu-mobile` folder

It contains `simple-menu-mobile.js` and `helpers.js` functions

```js
import { simpleMenuMobile } from "./simple-mobile-menu/simple-mobile-menu.js";
```

### 🖌️ Scss include

If needed, there's a `.scss` file for quick skin `_simple-menu-mobile.scss` with use of variable and possibility to change selector.

Once you define your selector, just use [BEM](http://getbem.com/) methodology

- #{selector}
- &\_\_button
- &\_\_menu
- &\_\_item
- &\_\_arrow-right
- &\_\_back
- &\_\_sub-menu

Or feel free to do it your way

## 🔌 Usage

Simply call the `simpleMenuMobile()` and define `options` value

```js
simpleMenuMobile({
  menuMobileButton: ".menu-mobile__button", // Menu button
  menuMobile: ".menu-mobile", // Menu container
  menuMobileItemHasChildren: ".menu-mobile__item--has-children", // Item with sub-menu
  menuMobileSubMenu: ".menu-mobile__sub-menu", // sub-menu element
  menuMobileBackLabel: "Retour", // Label for back button
  menuMobileBackClass: "menu-mobile__item", // Class for back button
});
```

If needed, their's a `detectMob` functions in `helpers.js` that detect useragent

```js
return navigator.userAgent.match(toMatchItem);
```

Use if you want to run the function only for mobile/tablet devices:

```js
import { detectMob } from "./simple-mobile-menu/helpers.js";
if (detectMob()) {
  simpleMenuMobile();
}
```

## 🔖 Note

This feature works actually with `Font Awesome` for navigation icons (you have to include it), note that you can change this inside your `.scss`

## 📝 Markup

```html
<header>
  ...
  <button class="menu-mobile__button">...</button>
</header>
<nav class="menu-mobile" role="navigation">
  <ul class="menu-mobile__menu">
    ...
    <li class="menu-mobile__item">Elementum mauris sed</li>
    <li class="menu-mobile__item menu-mobile__item--has-children">
      Cras malesuada
      <ul class="menu-mobile__sub-menu">
        <li class="menu-mobile__item menu-mobile__item--has-children">
          Duis sagittis
          <ul class="menu-mobile__sub-menu">
            <li class="menu-mobile__item">Vestibulum ut justo</li>
            <li class="menu-mobile__item">Etiam dictum</li>
            ...
          </ul>
        </li>
        ...
      </ul>
      ...
    </li>
  </ul>
</nav>
...
```

## Browser Support

Supports all modern browsers.
