# PokeDex

## What I used
Application project using HTML, JavaScript and CSS. I also used [BEM](https://en.bem.info/), [SCSS](https://sass-lang.com/), [Normalize.css](https://necolas.github.io/normalize.css/), [PokeApi](https://pokeapi.co/) and [ChartJS](https://www.chartjs.org/) for displaying each Pokemon statistics in form of a radar graph.

## What the app does
You can see Pokemons by a list of 8, search Pokemon either by its number or name, check a random Pokemon or 8 random Pokemons, you can also save favourite Pokemons to localstorage. Each Pokemon card includes more details for each Pokemon (its image, evolutions, type-badges and a graph with its statistics).

## What problems I had encountered
Biggest obstacles for me, while coding this project, was working with many, sometimes nested, async requests. I had a function returning `Promise object` instead of actual expected value.
Another bug I was blocked by, was working with `Array.prototype.map` with async requests inside, luckily I found a good article and used `Promise.all` what made everything working.
I also had an issue with the statistics graphs rendering, when I only had 1 graph active, every new graph rendered made the other graph disappear. The culprit turned out to be using `element.innerHTML` to created Pokemon cards.
`element.innerHTML` cleared all the canvas rendered before, when switching it to `element.insertAdjacentHTML` fixed the problem.

## Live version
You can find a live version of the app [here](https://tz-fn.github.io/PokeDex/).
