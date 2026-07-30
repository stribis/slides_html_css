---
marp: true
theme: gaia
class: invert gaia
paginate: true
---

<!--
_class: lead gaia
-->
# HTML & CSS 

Martin Hutchings 

![width:200px](https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/SAE_Institute_logo_black_no_space.svg/1200px-SAE_Institute_logo_black_no_space.svg.png)

---

# Day Six

* Images
* Background
* CSS Sprites
* Favicon

---

<!--
_class: lead gaia
-->
# Image Formats

![Foo](https://c.tenor.com/Hg05HElMqTgAAAAC/pokemon-gif.gif)

---

### Name the 4 big image formats in web
* JPG / JPEG
* PNG
* GIF
* SVG

### What are they used for? 

---

# Next-gen formats

### WebP

* Developed by Google
* Smaller file size for the same quality
* Same file size for more quality
* Initial release in 2018 (very new format)
* Supported in around 94% of all browsers
* [Caniuse](https://caniuse.com/webp)

---

# The `<picture>` tag

```html
<picture>
  <source srcset="img/awesomeWebPImage.webp" type="image/webp">
  <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg"> 
  <img src="img/creakyOldJPEG.jpg" alt="Alt Text!">
</picture>
```

* [Check out this article for more info](https://css-tricks.com/using-webp-images/)

---
<!--
_class: lead gaia
-->
# Box Shadow Exercise

Checkout the `box-shadow` ducumentation in MDN
Try to recreate this example using any image you want

![Bilderstapel](images/sc13.png)

---
<!--
_class: lead gaia
-->
# Background Image
![Bilderstapel](https://c.tenor.com/fuiG0_pco2wAAAAC/confused-john-travolta.gif)

---

## Syntax

```css
.foo {
  background-image: url('images/myimage.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
} 
```

|Advantages|Disadvantages|
|---|---|
|Access to `cover`|Do not have an `alt` attribute|
|Easy to work with|Separation of Concerns|
|Very flexible|Can't have multiple fallbacks like with `picture`|


---

## CSS Sprites

Demo using CSS Sprites
![CSS SPRITES](images/dw-logo-sprite.jpg)

```css
  .foo {
    width: 191px;
    height: 150px;
    background: url('images/dw-logo-sprite.jpg');
  }
  .foo:hover {
    background-position: 191px 0;
  }
```

---

# Favicon

* We use `<link>` to link favicons
* There are lots of possible favicons. Use a generator when possible.
* I use favicon.io

---
<!--
_class: lead gaia
-->
# Homework