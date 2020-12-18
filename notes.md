# Werken met apis

Welke onderdelen hebben we nodig

- Async / Await functies (werken met promises)
- Axios (library voor het maken van request)
- useState (data opslaan / updaten, zodat we er iets mee kunnen doen)
- useEffect (1 keer iets doen -> zoals de data uit de api halen)
- JSX (data laten zien aan de gebruiker)

## Als een gebruiker, wil ik de data van een pokemon kunnen bekijken, zodat ik er meer over kan leren

### Stappenplan

Make it work

- [x] we hebben een url nodig (endpoint): https://pokeapi.co/api/v2/pokemon/ditto
- [x] libraries installen, (npm install, npm install axios)
- [x] Ga naar App.js
- [x] importeren useState, useEffect, axios
- [x] Variabelen aanmaken (voor de use state hook)
- [x] useEffect in ons component zetten (gaat 1 keer iets doen)
- [x] Async function maken -> data fetchen, en we moeten hem aanroepen
- [x] De state updaten met de data uit de api
- [x] Data weergeven op de pagina, vanuit de state (JSX)

## Sessie 2

1. Waarom is het zo handig om je app op te delen in componenten?

- Hergebruiken van code!
- Veranderingen kun je op een plek maken
- Overzichtelijk voor je collega, makkelijk te vinden waar je aanpassingen moet doen

2. Hoe kan je in React informatie doorgeven van het ene component naar het andere component?

- Je kan informatie doorgeven aan een "kind" door middel van props

Props doorgeven

Naam van de prop: name
Waarde van de prop: pokemonName ("bulbasaur")

```javascript
function App(){
    const pokemonName = "bulbasaur"
    return <div>
        <PokemonCard name={pokemonName}>
    </div>
}
```

- Later can je ook `context` gebruiken (gaan jullie volgende week leren)

3. Wat is "map" en waarom zou je dat willen gebruiken?

- Stel dat je een array hebt
- Je wil elk element van dat array omzetten in een React component
- Dan kan je daar .map() voor gebruiken

## Als een gebruiker wil ik een lijst zien met 20 pokemon zodat ik mijn favoriete pokemon kan kiezen

Extra doel: zo min mogelijk de code herhalen

Strategie: dynamisch maken van de data de we ophalen

### Stappenplan

Hergebruiken van het kaartje

- [x] Component maken PokemonKaartje (om de code te hergebruiken)
- [x] Prop doorgeven aan elke PokemonKaartje met de naam van de pokemon
- [x] De code voor het maken van een verzoek aan de api overhevelen naar Pokemon card vanuit App.js
- [x] Request naar de api aanpassen zodat er een andere pokemon kan worden opgehaald

Ophalen van 20 pokemon namen ophalen uit api en weergeven,et kaartjes

- [x] We hebben een url nodig (endpoint): even opzoeken: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
- [x] Ga naar App.js
- [x] importeren useState, useEffect, axios
- [x] Variabelen aanmaken (voor de use state hook)
- [x] useEffect in ons component zetten (gaat 1 keer iets doen)
- [x] Async function maken -> data fetchen, en we moeten hem aanroepen
- [x] De state updaten met de data uit de api
- [x] Data weergeven op de pagina, 1 kaartje aan maken voor elke pokemon naam

## Als een gebruiker wil ik volgende en vorige knoppen hebben zodat ik door de pokemon heen kan bladeren

### Stappen plan

Url: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`

Domein: https://pokeapi.co
Api Endpoint: /api/v2/pokemon
QueryString: offset=0&limit=20

- offset: ik wil beginnen bij de eerste pokemon
- limit: geef me twintig stukken data

- [x] State aan maken voor de huidige "pagina" beginwaarde: 0
- [x] url aanpassen (template literal), `offset${pagina}`
- [x] Pagina state aan dependency array van useEffect toegevoegd
- [x] Knopje maken die de pagina verandert met + 20 (volgende)
  - [x] Knopje (<button></button>)
  - [x] onClick (Event listener)
  - [x] state updaten met + 20 -> setPagina(pagina + 20)
- [x] Knopje maken die de pagine verandert met -20 (vorige)

## Stappen plan: Loading feedback

- [x] Wanneer is de data nog niet aanwezig? als pokemons === null
- [x] If statement toevoegen: if(pokemons === null){ return <img /> }

## Stappen plan Error feedback

- [x] State aanmaken voor status van de app
- [x] De beginwaarde van die status is: 'loading'
- [x] Is data aanwezig dan is de status: 'done loading'
- [x] Was er een error dan is status: 'error'
- [x] Status aanpassen op de juiste plek in de app
- [x] De gebruiker laten zien wat er is gebeurd

## Later nog te doen

Vragenlijst

- [x] Stappen plan van vorige keer afwerken
- [x] Volgende / Vorige button
- [x] Vorige knop mag je niet kunnen gebruiken als je op pagina 0 bent

- [x] Loading / Error feedback (try / catch)
- [x] Wat moet je doen met "keys" als je Array.map gebruikt?
- [x] PokemonCard uitbreiden met moves, abilities enzovoorts

## Als een gebruiker wil ik verschillende paginas kunnen bekijken

- [x] Om de hele app moet een Router heen komen
- [ ] Switch, Routes nodig voor de verschillende paginas
- [ ] Links nodig om te navigeren

## Ik wil mijn eigen pokemon verzameling zien (ingelogd zijn)

## Omschrijven useContext

## App een beetje organiseren (atoms, molecules, organisms)

## Github

Make it better

- [] mappenstructuur
- [] Styling -> Per component / importeren?
