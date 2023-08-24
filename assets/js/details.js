const botaoVoltar = document.getElementById('btn_voltar')
botaoVoltar.addEventListener("click", () => history.back() )
const pokemonImage = document.getElementsByClassName('pokemon_image')
pokemonImage.src = pokemon.photo

function exibirDetalhes(pokemon) {
    const detalhesContainer = document.getElementById('cardPokemon')

    const detalhes = document.createElement('div')
    detalhes.classList.add('detalhes')
    detalhes.innerHTML = '<h1>AQUI É VASCO!</h1>'

    return detalhesContainer.appendChild(detalhes)
}

//pegar as infos da classe pokemon já criada e criar uma função para exibição na página detail.html
// com foto, nome e os status, com background na cor referente ao seu tipo.