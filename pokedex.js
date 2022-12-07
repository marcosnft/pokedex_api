var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
})
pegaPokemons(2);
function pegaPokemons(quantidade) {
   
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((val) => {


                fetch(val.url).then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default });


                        if (pokemons.length == quantidade) {
                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";
                            //finalizamos nossas requisições.
                            pokemons.map(function (val) {
                                pokemonBoxes.innerHTML += `
                            
                            
                            <div class="pokemon-box">
                            
                            <p>`+ val.nome + ` <img src="`+ val.imagem + `"></p>
                            </div> <!-- /.pokemon-box -->
                        
                            `
                            })

                        }
                    })


            })

        });

}




