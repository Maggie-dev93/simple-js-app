var pokemonList =  [
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
var specialHeight = 10; // You can pick your own value

// Iterate over the pokemonList array
for (var i = 0; i < pokemonList.length; i++) {
  var pokemon = pokemonList[i];
  // Use document.write() to display the Pokémon name and height
  document.write(pokemon.name + " (height: " + pokemon.height);
  
  // Check if the Pokémon's height is above the specialHeight threshold
  if (pokemon.height > specialHeight) {
    document.write(" - Wow, that's big!");
  }
  
  // Add a line break for the next Pokémon
  document.write("<br>");
}
  
