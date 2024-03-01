let pokemonRepository = (function() {
  // Define pokemonList array inside the IIFE to avoid accidental global access
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

  // Return an object with public functions
  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(pokemon) {
      // Check if the argument is an object and has required properties
      if (typeof pokemon === 'object' && pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('height') && pokemon.hasOwnProperty('types')) {
        pokemonList.push(pokemon);
      } else {
        console.error('Invalid Pokemon object. Expected { name: "Name", height: <number>, types: ["Type1", "Type2", ...] }');
      }
    }
  };
})();

// Iterate over each Pokémon in the repository using forEach() loop
pokemonRepository.getAll().forEach(function(pokemon) {
  // Use document.write to display the Pokémon name on the website's DOM
  document.write(pokemon.name + " (height: " + pokemon.height + ")");
  
  // Check if the Pokémon's height is above the specialHeight threshold
  if (pokemon.height > pokemonRepository.specialHeight) {
    document.write(" - Wow, that's big!");
  }
  
  // Add a line break for the next Pokémon
  document.write("<br>");
  
  // Use console.log to log the output to the console
  console.log(pokemon.name + " (height: " + pokemon.height + ")");
});






  
  
  

  
