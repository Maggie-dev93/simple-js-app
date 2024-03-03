let pokemonRepository = (function() {
  // Define pokemonList array inside the IIFE to avoid accidental global access
  let repository = [
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

   function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

function showDetails(pokemon) {
  console.log(pokemon);
}
function addListItem(pokemon) {
  // Create a list item element
  let listItem = document.createElement('li');

  // Create a button element
  let button = document.createElement('button');
  button.innerText = pokemon.name;

  // Add event listener to the button
  button.addEventListener('click', function() {
    showDetails(button.innertext);
  });

  // Append the button to the list item
  listItem.appendChild(button);

  // Append the list item to the document body or another parent element
  document.body.appendChild(listItem);
}

