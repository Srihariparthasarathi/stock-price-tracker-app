// OM NAMASIVAYA
import {data} from './script-modules/data.js';
import displayGraph from './script-modules/graph.js'
import summaryUpdate from './script-modules/summary.js'
// elements
const displayContiner = document.getElementById('display');

// graph btn
const oneMonBtn = document.getElementById('one-mon');
const threeMonBtn = document.getElementById('three-mon');
const oneYerBtn = document.getElementById('one-yer');
const fiveYerBtn = document.getElementById('five-yer');
 
// stock data
const stocks =['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'PYPL', 'TSLA', 'JPM', 'NVDA', 'NFLX', 'DIS'];

// to get the graph value if the key change we can change here
const graphDataHed = {
    "one-mon" :"1mo",
    "three-mon": "3mo",
    "one-yer": "1y",
    "five-yer": "5y"
}

async function main(){
    // to store the json data to use future
    const{getStockData, getStockSummary, getGraphData} = data;

    const dataList = await getStockData();
    const stockSummList = await getStockSummary();
    const stockGraphData = await getGraphData();
    
    let currentShare = Object.keys(dataList[0])[0]; //current share as first item
     //uptdate the selected share

    function displayDataInCon(dataList){
        /** to display the shate item in the container and adding event listner for the btn */
        for(let key in dataList){
            if(stocks.includes(key)){
                //div
                const disItem = document.createElement('div');
                disItem.classList.add('dis-item');
    
                //button
                const disButton = document.createElement('button');
                disButton.textContent = key.trim();
                disButton.addEventListener('click', (event) => disButtonEvent(event));
    
                // p element
                const bookValEl = document.createElement('p');
                bookValEl.textContent = `$${(dataList[key].bookValue).toFixed(3)}`;
                
                const profitPerEl = document.createElement('p');
                profitPerEl.textContent = `${(dataList[key].profit).toFixed(2)}%`

                if((dataList[key].profit) > 0){
                    profitPerEl.style.color = 'green';
                }else{ 
                     profitPerEl.style.color = 'red'; 
                    };
    
                disItem.append(disButton, bookValEl, profitPerEl);
                displayContiner.appendChild(disItem);
            }
        }
    
    }

    // display in the display column
    displayDataInCon(dataList[0]);

    function disButtonEvent(event){
        // event listner for the share button
        currentShare = event.target.textContent; //current share change based on the button click
        showCurShareData();
    }
    
    function showCurShareData(){
        /** to populate the value of the share for summary cloumn and graph*/
        const valueData = dataList[0][currentShare];
        const summData =  stockSummList[0][currentShare].summary;
        const graphData = stockGraphData[currentShare];
        
        summaryUpdate(valueData, summData, currentShare);
        displayGraph(graphData,graphDataHed["one-mon"]);
    }
    

    // graph btn time piroder
    oneMonBtn.addEventListener('click',(event) => displayGraph(stockGraphData[currentShare], graphDataHed[ event.target.id]) );

    threeMonBtn.addEventListener('click',(event) => displayGraph(stockGraphData[currentShare], graphDataHed[ event.target.id]) );

    oneYerBtn.addEventListener('click',(event) => displayGraph(stockGraphData[currentShare], graphDataHed[ event.target.id]) );

    fiveYerBtn.addEventListener('click',(event) => displayGraph(stockGraphData[currentShare], graphDataHed[ event.target.id]) );

    showCurShareData(); // to fix default
}


main();

