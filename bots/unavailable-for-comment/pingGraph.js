/*const config = {
    type: 'line',
    data: data,
    options: {}
};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);*/

// <block:setup:1>
const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
// </block:setup>

// <block:config:0>
const config = {
  type: 'line',
  data: data,
};
// </block:config>

module.exports = {
  actions: [],
  config: config,
};