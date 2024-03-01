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
let specialHeight = 10; // You can pick your own value

// Iterate over the pokemonList array using forEach() function
pokemonList.forEach(function(pokemon) {
  // Use document.write to display the Pokémon name on the website's DOM
  document.write(pokemon.name + " (height: " + pokemon.height + ")");
  
  // Check if the Pokémon's height is above the specialHeight threshold
  if (pokemon.height > specialHeight) {
    document.write(" - Wow, that's big!");
  }
  
  // Add a line break for the next Pokémon
  document.write("<br>");
  
  // Use console.log to log the output to the console
  console.log(pokemon.name + " (height: " + pokemon.height + ")");
});


  
  





  
  
  

  
