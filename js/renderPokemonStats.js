import {
  getPokemon
} from './getPokemon.js';

import {
  getPokemonStats
} from './getPokemonStats.js';

const statsBox = document.querySelector('#stats');

export const renderPokemonStats = stats => {
  return new Chart(statsBox, {
    type: 'radar',
    data: {
      labels: ['HP', 'Defense', 'Sp. Defense', 'Speed', 'Sp. Attack', 'Attack'],
      datasets: [{
        data: [stats],
        backgroundColor: '#ffffffce',
        borderColor: '#ffffffce',
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
          max: 100,
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