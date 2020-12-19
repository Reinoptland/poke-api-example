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
- [] Data weergeven op de pagina, vanuit de state (JSX)

Make it better

- [] try / catch
- [] mappenstructuur
- [] Styling
- [] Maak het mogelijk om een andere pokemon van de api op te halen niet alleen ditto
