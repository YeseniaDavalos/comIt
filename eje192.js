async function obtenerPokemones() {
    try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    const pokemons = data.results;
    
    pokemons.forEach(pokemon => {
        const nombre = pokemon.name;
        const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.substring(1);
        console.log(`Pokemon: ${nombreCapitalizado}`);
    });
    } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
    document.body.innerHTML = `<p style="color: red;">Error al obtener los datos: ${error.message}</p>`;
    }
}

obtenerPokemones();
