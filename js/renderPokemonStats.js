import {
  getPokemon
} from './getPokemon.js';

import {
  getPokemonStats
} from './getPokemonStats.js';


export const renderPokemonStats = (stats, pkmnName) => {
  const statsBox = document.querySelector(`#${pkmnName}-stats`);
  return new Chart(statsBox, {
    type: 'radar',
    data: {
      labels: ['HP', 'Defense', 'Sp. Defense', 'Speed', 'Sp. Attack', 'Attack'],
      datasets: [{
        data: stats,
        backgroundColor: '#ffffffe5',
        borderColor: '#fff',
        borderWidth: 2,
        pointBorderWidth: 3,
        pointBackgroundColor: '#f05a4f',
        pointBorderColor: '#ffffffce',
        pointHoverRadius: 5
      }],
    },
    options: {
      legend: {
        display: false
      },
      scale: {
        gridLines: {
          color: '#ffffffce'
        },
        angleLines: {
          color: '#ffffffce'
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: Math.max(135, Math.max(...stats)),
          stepSize: 20
        },
        pointLabels: {
          fontSize: 12
        }
      },
      tooltips: {
        //Need to use this workaround, because of a bug. See: https://github.com/chartjs/Chart.js/issues/6188
        enabled: true,
        displayColors: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          }
        }
      }
    }
  });
};