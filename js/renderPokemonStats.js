const statsBox = document.querySelector('#stats');

export const renderStats = new Chart(statsBox, {
  type: 'radar',
  data: {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'joma'],
    datasets: [{
      data: [9, 6, 4, 2, 6, 8],
      backgroundColor: [
        '#e6e6e6'
      ],
      borderColor: [
        '#e6e6e6'
      ],
      borderWidth: 2
    }],
  },
  options: Chart.defaults.radar
});