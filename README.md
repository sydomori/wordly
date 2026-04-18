# wordly
# 📖 Wordly – Dictionary Web App

## 📝 Description

**Wordly** is a simple and interactive dictionary web application that allows users to search for English words and view their meanings, parts of speech, and pronunciation audio. The app fetches real-time data from a public dictionary API and presents it in a clean, user-friendly interface. This serves as the phase-0 capstone project for my moringa school course

---

## ✨ Features

* 🔍 Search for any English word
* 📚 Display multiple meanings and definitions
* 🏷️ Show parts of speech (noun, verb, etc.)
* 🔊 Play pronunciation audio (when available)
* ⚠️ Error handling for invalid or missing words
* 🎨 Custom styled UI with a consistent color theme
* 🧭 Scrollable content area for long definitions
* 💡 Responsive and clean layout using modern CSS

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS** – Styling, layout (Flexbox), and custom UI
* **JavaScript** – Logic, DOM manipulation, API handling
* **Bootstrap 5** – Base styling and UI components
* **Dictionary API** – Data source for word meanings

---

## 🚧 Challenges Faced

### 1. Handling Multiple Definitions

* Initially, only the first meaning and definition were displayed.
* The API returns nested arrays (`meanings → definitions`), which required:

  * Using `.map()` to loop through meanings
  * Nested mapping for definitions
* Solution: Dynamically render all meanings and definitions using template literals.

---

### 2. UI Cluttering from Data Structure

* Early implementation stored results in an array, causing multiple word cards to stack.
* This made the UI cluttered and hard to read.
* Solution: Removed unnecessary array storage and displayed only the current search result.

---

### 3. CSS Overflow & Layout Issues

* Using **CSS Grid with fixed rows (`repeat(3, 1fr)`)** caused:

  * Content overflow
  * Hidden elements (like the word title)
* Scrollbars were not appearing correctly.

#### Fix:

* Switched from **Grid → Flexbox**
* Introduced a dedicated scroll container (`.word-content`)
* Applied:

  * `flex: 1`
  * `min-height: 0`
  * `overflow-y: auto`

---

### 4. Scroll Not Working

* Attempted to make `.word-card` scrollable directly.
* Issue: Flexbox prevented proper overflow behavior.

#### Fix:

* Moved scrolling to the parent container (`.word-content`)
* Applied correct flex constraints

---


### 5. API Error Handling

* When a word was not found, the API returned an error object instead of an array.
* This caused crashes when accessing `data[0]`.

#### Fix:

* Checked `response.ok`
* Displayed a custom error message:

  * “Word not found, please try again”

---

## 🎨 Design Choices

* Warm, muted color palette:

  * Background: `#a47171`
  * Card: `#885d5d`
  * Container: `#f3e9e9`
* Focused on readability and minimalism
* Scrollable content to handle large data gracefully

---


## 📌 Conclusion

This project helped reinforce key frontend concepts such as:

* Working with APIs
* Handling asynchronous JavaScript
* Managing dynamic DOM rendering
* Solving real-world layout issues with CSS

---

## 🙌 Author

Sydney Omori
