https://codepen.io/mahsa-sadeghpour/pen/azdEvgm?editors=0012


/*
  ResponsiveAds - Coding Question 1 (JavaScript)
  ------------------------------------------------
 What I did:
  - Parsed the provided Pokémon dataset.
  - Implemented filtering logic using array methods:
      • Problem 1: Filter Pokémon by a single type (e.g., "grass")
      • Problem 2 (OR): Return Pokémon that have at least one of the given types
      • Problem 2 (AND): Return Pokémon that have all of the given types
  - Used Array.prototype.filter(), some(), every(), and map() to ensure scalability
    (works for any number of types from 1–99).
  - Logged results to the console for verification.

  This solution focuses on readability, scalability, and use of clean functional JavaScript.
*/

// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1–99 (not always 1–2)
const pokes = getPokes();
console.log("Pokes", pokes);

// ---------------------------
// Problem 1: Filter by type
// ---------------------------
const type = "grass";
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

// ---------------------------
// Problem 2: Filter by types (AND / OR)
// ---------------------------
const types = ["bug", "poison"];

const answer2Or = pokes
  .filter(poke => poke.types.some(t => types.includes(t)))
  .map(poke => poke.name);

const answer2And = pokes
  .filter(poke => types.every(t => poke.types.includes(t)))
  .map(poke => poke.name);

// ---------------------------
// Output results
// ---------------------------
console.log("Answer 1 (Type: grass)", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------
// Provided utility function
// --------------------------------
function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
