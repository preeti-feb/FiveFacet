# TraitLens

A Big Five (OCEAN) personality self-assessment tool. I built this to explore how a proper psychometric framework — not a generic internet quiz — can be translated into a working, interactive web app.

## What It Does

- Presents a series of self-written statements measuring the Openness trait from the Big Five personality model
- Captures responses on a 5-point agreement scale (Strongly Disagree to Strongly Agree)
- Calculates a trait score, correctly handling reverse-scored items
- Displays the result as an animated score bar, a numeric score, and a written trait description
- Lets the user go back and change previous answers before finishing
- Lets the user retake the assessment at any time

## Why I Built This

Most online personality quizzes are pseudoscience dressed up as entertainment. I wanted to build something closer to a real psychometric instrument: I wrote my own set of statements based on the actual sub-facets of the Openness trait (imagination, intellectual curiosity, aesthetic appreciation, adventurousness, unconventionality, and variety-seeking), rather than using a generic template or an existing question bank.

## Features

- One-question-at-a-time interactive flow with a progress indicator
- Back/Next navigation that preserves previously selected answers
- Custom-styled answer selection (no default browser radio buttons)
- Reverse-score handling in the scoring algorithm
- Animated results: a filling progress bar and a counting score display
- Retake flow that fully resets the assessment state

## Technologies Used

- HTML5
- CSS3 (custom properties, gradients, transitions)
- Vanilla JavaScript (DOM manipulation, event handling, array/object data structures)

## How to Run

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. No build step, dependencies, or server required

## Project Structure

- `index.html` — page structure (intro, question, and results screens)
- `style.css` — all styling, including the dark/violet visual theme
- `script.js` — question data, scoring logic, and interactive behavior


## Author
Preeti Kumari
