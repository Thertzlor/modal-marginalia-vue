# Modal Marginalia

This is the repository for [modal-marginalia.com](https://www.modal-marginalia.com), my personal website/blog thingy. This is a vue Site running on a strapi backend using GraphQL.

It also uses [vite-ssg](https://github.com/antfu-collective/vite-ssg) to prerender sites for better SEO.

It's also a very silly website that does a lot of weird and tricky things with vue and while I'm proud of that, there's probably quite a few inefficient if not improper things happening here, so maybe don't use it as an example.

Because I mostly use this site as my little playground to implement random webdesign ideas while I'm off work, none of the code is really designed to be understandable for anyone besides me, although you are welcome to try.

The SCSS for this site is designed to be processed with PostCSS, but the plug-ins and compilation logic isn't part of this repo because so far I just haven't bothered getting a "proper" postCSS workflow working with vue. Maybe someday.

## **TODO:** Things that I plan on implementing at some point.
* nested comments (maybe)
* A better search function than the default Strapi search.
* customaizable parallax effects?
* Fancier inline footnote previews
* dynamically generated stars per SVG instead of canvas