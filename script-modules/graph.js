// OM NAMASIVAYA

// graph table div
const maxDateItm = document.getElementById('max-date');
const minDateItm = document.getElementById('min-date');
const maxPriceItm = document.getElementById('max-price');
const minPriceItm = document.getElementById('min-price');

export default function displayGraph(graphData, id){
    /** ploty.js module */
    const perGraphData = graphData[id];
    const timeStamp = perGraphData.timeStamp.map((timeStamp) => new Date(timeStamp * 1000).toLocaleDateString());
    const price = perGraphData.value;

    const trace = {
        x: timeStamp,
        y: price,
        type: 'scatter',
        mode: 'lines',
        line: {
            width: 4,
            color: 'green',
        }
    };

    const layout = {
        title:false,
        margin: {l: 0, r: 0, b: 0, t: 0 },
          xaxis: {
            showgrid: false
        },
        yaxis: {
            showgrid: false,
            showline: false
        },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        hovermode: 'x unified', 
        hoverlabel: {
            bgcolor: "white", 
            bordercolor: "black", 
            font: {size: 10} 
        },
      };
    
    // Rendering the plot
    Plotly.newPlot('graph', [trace], layout);
    minMaxDis(timeStamp, price);
    
}

function minMaxDis(timeStamp, price){
    /** show min and max price of the selected period time */
    let minPrice = Math.min(...price);
    let maxPrice = Math.max(...price);

    minPriceItm.textContent = `$${minPrice.toFixed(3)}`;
    minPriceItm.style.color ='red';

    maxPriceItm.textContent = `$${maxPrice.toFixed(3)}`;
    maxPriceItm.style.color ='green';

    minDateItm.textContent = timeStamp[price.indexOf(minPrice)];
    maxDateItm.textContent = timeStamp[price.indexOf(maxPrice)]; 
}
