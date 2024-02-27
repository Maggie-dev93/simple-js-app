// Your pokemonList array
let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
  },
  {
    name: "Charizard",
    height: 17,
    types: ["fire", "flying"]
  },
  {
    name: "Pikachu",
    height: 4,
    types: ["electric"]
  }
];

// Define the height threshold for special Pokémon
let specialHeight = 17; // You can pick your own value

// Get the paragraph element by its id
let paragraph = document.getElementById("pokemonInfo");

// Iterate over the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  // Construct the string to display the Pokémon name and height
  let output = pokemon.name + " (height: " + pokemon.height);
  
  // Check if the Pokémon's height is above the specialHeight threshold
  if (pokemon.height > specialHeight) {
    output += " - Wow, that's big!";
  }
  
  // Add a line break for the next Pokémon
  output += "<br>";
  
  // Append the output string to the paragraph element
  paragraph.innerHTML += output;
  
  // Log the output to the console
  console.log(output);
}

  
