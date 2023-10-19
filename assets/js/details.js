const botaoVoltar = document.getElementById('btn_voltar')
botaoVoltar.addEventListener("click", () => history.back())

const pokeName = document.getElementsByClassName('poke__name')
const pokeNumber = document.getElementsByClassName('poke__number')
const pokeImage = document.getElementsByClassName('poke__image')

const fetchPokemon = async (pokeDetails) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeDetails}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
  
    const data = await fetchPokemon(pokemon);
  
    if (data) {
      pokemonImage.style.display = 'block';
      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
}

//pegar as infos da classe pokemon já criada e criar uma função para exibição na página detail.html
// com foto, nome e os status, com background na cor referente ao seu tipo.