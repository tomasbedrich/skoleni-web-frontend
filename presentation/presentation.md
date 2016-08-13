# Moderní webový frontend

---
## Tomáš Bedřich
[tbedrich.cz](https://tbedrich.cz)  
[@tbedrich](https://twitter.com/tbedrich)

===

# Responzivita

---
## Dříve
> Optimalizováno pro rozlišení 1024x768 pixelů,  
> testováno v MS Internet Explorer 6 - © 2002

---
## Dnes
![mobile device](img/mobile-devices.jpg)

---
## Viewport
= Co uživatel vidí.
<p class="fragment">A když se stránka nevejde na obrazovku?</p>

---
```
<meta
 name="viewport"
 content="width=device-width, initial-scale=1.0">
 ```

---
## Device Pixel Ratio (DPR)
= Poměr mezi HW a pracovním rozlišením.

--- <!-- .slide: data-background="rgb(255, 180, 180)" -->
# NE
- konkrétní velikost viewportu
- absolutně zadané šířky
- mobilní "verze"

--- <!-- .slide: data-background="rgb(180, 255, 180)" -->
# ANO
- "přeskládávání" prvků
- skrývání nepodstatného
- uživatelské zvyklosti

--- <!-- .slide: data-background="rgb(180, 255, 180)" -->
# ANO
## Nebude to všude stejné!

---
## Nejčastější bolest = obrázky
- SVG
- `<picture>`
- chytré CSS

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/chrome-dev-tools`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# CSS(3)

---
## Media queries
= Aplikují CSS podmínečně.

    @media (min-width: 400px) {
        /* CSS */
    }

    @media screen and (min-width: 400px) and (max-width: 800px) {
        /* CSS */
    }

    @media (min-device-pixel-ratio: 2) {
        /* Retina CSS */
    }
<!-- .element: class="fragment" -->

---
## Selektory

---
### Sousedské
- `elem1+elem2` – bezprostředně následující soused
- `elem1~elem2` – následující soused

---
### Atributové
- `[attribute]` – má atribut
- `[attribute=value]` – je rovno
- `[attribute^=value]` – začíná
- `[attribute$=value]` – končí
- `[attribute*=value]` – obsahuje

```
a[href$='.pdf'] {
    /* CSS */
}
```

---
### Pseudo-třídy
- `:not(selector)` – vše nevybrané selektorem
- `:first-child` – první potomek
- `:last-child` – poslední potomek
- `:nth-child(n)` – N-tý potomek
- `:first-of-type` – první svého druhu v rodiči

```
table tr:nth-of-type(2n+1) td {
    /* CSS */
}
```

---
### Pseudo-elementy
- `::before` – před elementem
- `::after` – za elementem
- `::selection` – vybráno kurzorem

```
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

---
## Transformace
= 2D/3D škálování, rotace, posun – *až po vykreslení*.

    transform: scale(1.2);

<ul>
    <li>`scale(1.4)` – zoom (X + Y)</li>
    <li>`scale(1.1, 1.5)` – zoom (X, Y)</li>
    <li>`rotate(20deg)` </li>
    <li>`translate(10px, -20px)` – posun (X, Y)</li>
    <li>`rotateZ(20deg)` – 3D rotace (Z)</li>
</ul><!-- .element: class="fragment" data-fragment-index="1" -->

---
## Přechody
= Animace CSS vlastností, pokud dojde ke změně (jakkoliv).

```
a {
    transition: all 2s ease-in-out;
    color: blue;
}
a:hover {
    color: red;
}
```

---
## Animace
= Nejsou vázané na jiné změny.

**1. vytvoření**
<!-- .element: class="fragment" data-fragment-index="1" -->

    @keyframes example {
        0%   { background-color: red; }
        25%  { background-color: yellow; }
        50%  { background-color: blue; }
        100% { background-color: green; }
    }
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. použití**
<!-- .element: class="fragment" data-fragment-index="2" -->

    button {
        animation: example 5s linear 2s infinite alternate;
    }
<!-- .element: class="fragment" data-fragment-index="2" -->

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/css-transitions`

---
## Sloupce
= Text automaticky ve sloupcích pomocí CSS!

    p {
        column-count: 3;
        column-gap: 30px;
    }

---
## Fonty
= Lze používat fonty, které uživatel nemá.

**1. inicializace**
<!-- .element: class="fragment" data-fragment-index="1" -->

    @font-face {
        font-family: 'PT Sans';
        // font-style: normal;
        // font-weight: 400;
        src: local('PT Sans'),
             local('PTSans-Regular'),
             url('https://xx.com/ptsans.woff') format('woff'),
             url('https://xx.com/ptsans.ttf') format('truetype');
    }
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. použití**
<!-- .element: class="fragment" data-fragment-index="2" -->

    font-family: 'PT Sans', sans-serif;
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## Flexbox
= Řeší klasické layoutové problémy.

**1. flex kontejner**
<!-- .element: class="fragment" data-fragment-index="1" -->

    display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. flex položka**
<!-- .element: class="fragment" data-fragment-index="2" -->

    flex-grow: 1;
    // flex-shrink: 1;
    // flex-basis: 30%;
    // order: 4;
<!-- .element: class="fragment" data-fragment-index="2" -->

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/css-flexbox`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# Mezistupně

---

- `` – item
- `` – item
- `` – item
- `` – item

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/modernizr`

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/sass`

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/gulp`

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/svg`

=== <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/bootstrap`

===

# Zdroje obrázků
- http://www.telerik.com/blogs/announcing-the-beta-release-of-the-telerik-mobile-cloud-testing-platform
