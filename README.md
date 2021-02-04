# PokeDex

## What technologies I used

Application project using HTML, JavaScript and CSS. I also used [BEM](https://en.bem.info/), [SCSS](https://sass-lang.com/), [Normalize.css](https://necolas.github.io/normalize.css/), [PokeApi](https://pokeapi.co/) and [ChartJS](https://www.chartjs.org/) for displaying each Pokemon's statistics in form of a radar graph.

## What the app does

You can see Pokemon by a list of 8, search a Pokemon either by its number or name, check a random Pokemon or 4 random Pokemon, you can also save favourite Pokemon using `localstorage`. Each Pokemon card includes more details for each Pokemon (its image, evolutions, type-badges and a graph with its statistics).

## What problems I had encountered

Biggest obstacle for me, while coding this project, was working with many, sometimes nested, async requests. I had a function returning `Promise object` instead of actual expected value, but I managed to make it work.

Another bug I was blocked by, was working with `Array.prototype.map` with async requests inside, luckily I found a great [article](https://zellwk.com/blog/async-await-in-loops/) by Zell Liew and used `Promise.all` what made everything work properly.

I also had an issue with the statistics graphs rendering, when I only had 1 graph active, every new graph rendered made the other graph disappear. I managed to find [this](https://stackoverflow.com/questions/24621810/html5-canvas-reset-when-adding-to-the-body-with-javascript) question at StackOverflow. The culprit turned out to be using `element.innerHTML` to create Pokemon cards.
`element.innerHTML` cleared all the canvas rendered before, when I switched it to `element.insertAdjacentHTML` it fixed the problem.

## Live version

You can find a live version of the app [here](https://tz-fn.github.io/PokeDex/).

## Known issues

Sometimes the Random Pokemon search will throw an error: "Error: Pokemon `number` hasn't been found. Please try again."

This happens because of the fact that some of the Pokemon have different forms (e.g. [Oricorio](<https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)>)) and how the way the API works, searching for `Oricorio` will throw an error but searching for `Oricorio-Baile` will work.
