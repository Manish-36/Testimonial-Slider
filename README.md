# Testimonial Slider

A clean, auto-rotating testimonial slider web application built with vanilla HTML, CSS, and JavaScript that cycles through user reviews, names, and profile avatars every 10 seconds.

## Preview

### Testimonial View 1
<img width="1903" height="841" alt="Screenshot 2026-11-23 185240" src="https://github.com/user-attachments/assets/01b8b2a9-ac0e-406b-bcbd-a91a36b1d2b5" />

### Testimonial View 2
<img width="1877" height="763" alt="Screenshot 2026-11-23 185259" src="https://github.com/user-attachments/assets/e0534cc2-fd03-4fb3-90c6-b115b4217373" />

## Features

* **Automatic Slide Rotation:** Cycles through testimonials (`John`, `Juliet`, `Lorenzo`) every 10 seconds (`10000ms`) using `setInterval` and modulo index wrapping (`(index + 1) % testimonial.length`).
* **Dynamic Content & Avatar Updates:** Updates the reviewer's name, quote text, and circular profile image dynamically from a JavaScript array of objects[cite: 14, 15].
* **Floating Circular Avatar:** Positions a `100px x 100px` circular user photo overlapping the top edge of the card (`top: -50px`)[cite: 14, 15].
* **Centered Card Layout:** Styled with Flexbox, a `slateblue` card container, soft drop shadow, and `cursive` typography[cite: 14, 15].

---

## Project Structure

```text
├── index.html      # Testimonial card markup with avatar image, quote text, and username
├── style.css       # Flexbox centering, card styling, and overlapping circular avatar layout
├── index.js        # Testimonials array, DOM updates, and interval timer logic
├── preview-1.png   # First testimonial screenshot for the README
└── preview-2.png   # Second testimonial screenshot for the README
