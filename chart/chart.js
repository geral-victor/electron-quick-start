// const Chart = require('chart.js');
import { Chart, registerables } from './node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

const canvas = document.getElementById("chart");

window.safeApi.onBuildImages((event, configs) => {
    let images = [];
    configs.forEach(config => {
        let chart = new Chart(canvas, config);  
        images.push(chart.toBase64Image().substring(0, 100));
        chart.destroy();
    });
    
    event.sender.send('chart-images', images);
});

