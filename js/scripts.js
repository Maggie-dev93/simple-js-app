


  
//trial

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

  // Function to add list item for a Pokemon
  function addListItem(pokemon) {
    // Create an li element
    let listItem = document.createElement('li');

    // Create a button element
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    // Add event listener to the button
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    // Append the button to the list item
    listItem.appendChild(button);

    // Append the list item to the unordered list
    pokemonListElement.appendChild(listItem);
  }

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
    },
    addListItem: addListItem
  };
})();

// Select the unordered list element
let pokemonListElement = document.querySelector('.pokemon-list');

// Iterate over each Pokémon in the repository using forEach() loop
pokemonRepository.getAll().forEach(function(pokemon) {
  // Call addListItem() and pass the Pokémon
  pokemonRepository.addListItem(pokemon);
});






  
  
  

  
