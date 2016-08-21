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
## [Can I use ...?](http://caniuse.com/)
= Jaké technologie lze použít pro různé verze prohlížečů.

---
## Prefixy
    background: black; /* fallback */
    background: -webkit-linear-gradient(top, black 0%, white 100%); /* Chrome10-25,Safari5.1-6 */
    background:    -moz-linear-gradient(top, black 0%, white 100%); /* FF3.6-15 */
    background:         linear-gradient(to bottom, black 0%, white 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#ffffff', GradientType=0); /* IE6-9 */

---
## Polyfilly, Shimy
= Dovolují používat jednotné API napříč prohlížeči.

- [HTML5 Shiv](https://github.com/aFarkas/html5shiv) (HTML5 v IE6-9)
- [MathJax](https://www.mathjax.org/) (MathML v nonFF)

---
## [Modernizr](https://modernizr.com/)
- Detekuje podporu technologií (CSS třídy + JS objekt).
- Media query v JS.

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/modernizr`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# SASS

---
= CSS preprocesor
<p class="fragment">`styles.scss` → **kompilace** → `styles.css`</p>

---
## Proměnné
Opakují se barvy, rozměry, ...?

**1. definice**
<!-- .element: class="fragment" data-fragment-index="1" -->

```scss
$brand-primary: #ffff00;
$large-space: 20px;
```
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. použití**
<!-- .element: class="fragment" data-fragment-index="2" -->

```scss
background-color: $brand-primary;
padding: 0 $large-space;
```
<!-- .element: class="fragment" data-fragment-index="2" -->


---
## Import
= Skládání souborů při kompilaci.
<p class="fragment" data-fragment-index="1">≠ Importy v CSS (HTTP požadavky).</p>

```scss
@import 'header';
```
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## Vnořování
Opakují se selektory? Přehlednost?

```scss
ul.menu {
    list-style-type: none;
    &, li {
        padding: 0;
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```css
/* zkompilované CSS */
ul.menu {
    list-style-type: none;
}
ul.menu, ul.menu li {
    padding: 0;
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## Mixiny
Opakují se kousky kódu?

**1. definice**
<!-- .element: class="fragment" data-fragment-index="1" -->

```scss
@mixin list-inline {
    list-style-type: none;
    &, & li {
        margin: 0;
        padding: 0;
        display: inline;
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. použití**
<!-- .element: class="fragment" data-fragment-index="2" -->

```scss
ul.menu {
    @include list-inline;
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## Dědičnost
Jeden prvek vychází z druhého?

**1. rodič**
<!-- .element: class="fragment" data-fragment-index="1" -->

```scss
.message {
    padding: 20px;
    border: 2px solid #ccc;
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

**2. potomek**
<!-- .element: class="fragment" data-fragment-index="2" -->

```scss
.error {
    @extends .message;
    border-color: red;
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## Matematika
= Někdy je lepší zapsat výpočet, než výsledek.

```scss
.left {
    width: 5/12 * 100%;
}
.right {
    width: 7/12 * 100%;
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```css
/* zkompilované CSS */
.left {
    width: 41.66667%;
}
.right {
    width: 58.33333%;
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

---
## [Funkce](http://sass-lang.com/documentation/Sass/Script/Functions.html)
= Transformují parametry.

```scss
.error {
    background-color: fade-out(desaturate(red, 50%), 0.2);
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```css
/* zkompilované CSS */
.error {
    background-color: rgba(191, 64, 64, 0.8);
}
```
<!-- .element: class="fragment" data-fragment-index="2" -->

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/sass`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# Gulp

---
= Automatizace opakujících se úkolů.
<ul class="fragment">
    <li>kompilace SASS</li>
    <li>prefixování</li>
    <li>minifikace a spojování JS</li>
    <li>kopírování souborů sem tam</li>
</ul>

---
## Co nabízí Gulp?
- `gulp.task(name, deps, fn)` – vytvoří úkol
- `gulp.src(globs)` – vytvoří rouru
- `gulp.dest(path)` – zapíše výsledek
- `gulp.watch(globs, task)` – při změně spustí úkol

---
## `gulpfile.js`
```js
var gulp = require('gulp');

gulp.task('default', [], function () {
    // do something cool
});
```

```bash
$ gulp
$ gulp default
```
<!-- .element: class="fragment" data-fragment-index="1" -->

---
## Pluginy
= NPM balíčky, používají se jako JS funkce (*v rouře - pipe*).

- `gulp-sass`
- `gulp-autoprefixer`
- `gulp-concat`
- `gulp-uglify`
- `gulp-sourcemaps`
- `browser-sync`

```bash
$ npm install --save-dev gulp-sass
```
<!-- .element: class="fragment" data-fragment-index="1" -->

---
## Kompilace SASS
```js
var gulp = require('gulp');
var sass = require('gulp-sass');   // load plugin
```
```js
gulp.task('css', [], function () {
    gulp.src('styles.scss')        // get source
        .pipe(sass())              // pipe to plugin
        .pipe(gulp.dest('out'));   // pipe to output
});
```
<!-- .element: class="fragment" data-fragment-index="1" -->
```js
gulp.task('watch', ['css'], function () {
    gulp.watch('*.scss', 'css');   // run "css" task on file change
});
```
<!-- .element: class="fragment" data-fragment-index="2" -->

```bash
$ gulp watch
```
<!-- .element: class="fragment" data-fragment-index="3" -->

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/gulp`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# HTML5

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/svg`

=== <!-- .slide: data-background="rgb(40, 220, 220)" -->
# Bootstrap

--- <!-- .slide: data-background="rgb(80, 40, 160)" -->
# Hands-on!
`examples/bootstrap`

===
# Zdroje obrázků
- http://www.telerik.com/blogs/announcing-the-beta-release-of-the-telerik-mobile-cloud-testing-platform
