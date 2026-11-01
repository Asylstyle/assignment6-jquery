# Assignment 6 — jQuery Fieldnotes

**Student:** Assylzhan Amangeldi  
**Group:** SE-2526  
**Course:** Web Technologies 1 — Front End

An interactive, responsive website covering jQuery selectors, effects, DOM manipulation, custom animations, and an image gallery. Each part has its own page and is available from the shared navigation bar.

**Live website:** https://asylstyle.github.io/assignment6-jquery/  
**Repository:** https://github.com/Asylstyle/assignment6-jquery

## Run locally

Download the repository and open `index.html` in a browser. An internet connection is needed for the jQuery CDN.

Alternatively, serve the folder with Python:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. There is no build step, package installation, or backend.

## Assignment requirements

| Part | Task                      | Implementation                                                                                           | Page              |
| ---- | ------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------- |
| 1    | 0 — Setup                 | Full jQuery 3.7.1 from the official CDN; `$(document).ready()`; exact console message `jQuery is ready!` | `index.html`      |
| 1    | 1 — Selectors and CSS     | ID, class, and tag selectors; `.text()`, `.html()`, `.css()`; reset button                               | `index.html`      |
| 2    | 2 — Visibility            | Paragraph with Hide, Show, Toggle; `.hide()`, `.show()`, `.toggle()`                                     | `effects.html`    |
| 2    | 3 — Fade                  | Image with `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`                                                    | `effects.html`    |
| 2    | 4 — Slide                 | Collapsible panel with `.slideUp()`, `.slideDown()`, `.slideToggle()`                                    | `effects.html`    |
| 3    | 5 — Add and remove        | List with Add Item, Prepend Item, Remove Item; `.append()`, `.prepend()`, `.remove()`                    | `dom.html`        |
| 3    | 6 — Attributes            | Buttons change an image's `src` and a link's `href` with `.attr()`                                       | `dom.html`        |
| 3    | 7 — Form                  | Name and Email fields; live preview through `input`, `.val()`, `.text()`                                 | `dom.html`        |
| 4    | 8 — Basic animation       | Square grows and changes position using `.animate()`                                                     | `animations.html` |
| 4    | 9 — Sequential animations | Right → down → shrink → return to original state using a chain of `.animate()` calls                     | `animations.html` |
| 4    | 10 — Combined animation   | Opacity, size, and movement in a single `.animate()` call                                                | `animations.html` |
| 5    | 11 — Mini project         | Four-image gallery; thumbnails fade in/out; click to enlarge; next/previous controls                     | `gallery.html`    |

## Project structure

```text
assignment6-jquery/
├── index.html
├── effects.html
├── dom.html
├── animations.html
├── gallery.html
├── assets/
│   ├── css/styles.css
│   ├── js/
│   │   ├── common.js
│   │   ├── basics.js
│   │   ├── effects.js
│   │   ├── dom.js
│   │   ├── animations.js
│   │   └── gallery.js
│   ├── images/             # Four local SVG landscape illustrations
│   └── favicon.svg
├── DEFENSE.md
├── README.md
└── .nojekyll
```

## Code organization

- HTML defines the semantic page content, CSS handles appearance, and each part has a separate JavaScript file.
- `common.js` contains shared initialization and reduced-motion handling. The ready callback logs the required message on every page.
- Variables beginning with `$` contain jQuery objects. Names describe the selected element or action.
- Small named functions handle repeated operations, such as resetting a square or updating the list count.
- Effect handlers use `.stop(true, true)` to prevent a long animation queue after repeated clicks. Custom animations disable Run while active; Reset stops the queue and restores the original square.
- User-entered text goes through `.text()`. `.html()` is demonstrated only with a fixed string.
- The gallery supports Escape, arrow keys, a focus loop, focus restoration, and an inert background. Buttons and form inputs have accessible names and visible keyboard focus.
- Images are local SVG files, so an external image host is not required. jQuery uses the full build because the slim build does not include effects.

## Manual verification

1. Open every navbar link. Confirm exactly one current-page indicator.
2. On Basics, check the ready status and console. Run all three selector actions and Reset.
3. On Effects, try every Hide/Show/Toggle, Fade, and Slide button, including repeated clicks.
4. On DOM, append and prepend items. Remove all items; Remove becomes disabled. Add again. Change both attributes twice. Type and clear both form fields.
5. On Animation, run all three demos. Confirm the sequence returns to its initial position and size. Reset during movement and run again.
6. On Gallery, hide and show thumbnails, enlarge all four images, navigate in both directions, and close with the button, Escape, and the backdrop. Confirm focus returns to the thumbnail.
7. Check the website on desktop and narrow/mobile screens. Test keyboard navigation.

## Deployment

The website is a static GitHub Pages project. In repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save. All internal paths are relative so the site also works under the repository subpath.

## Defense preparation

See [DEFENSE.md](DEFENSE.md) for explanations, practice questions, and small code changes to rehearse. The assignment's implementation criteria total 50%; the remaining 50% is assessed during the student's individual practice-lesson defense.

## References

- [jQuery API documentation](https://api.jquery.com/)
- [jQuery animate](https://api.jquery.com/animate/)
- [Official jQuery CDN](https://releases.jquery.com/jquery/)
- [jQuery Learning Center](https://learn.jquery.com/)
