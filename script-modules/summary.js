//  OM NAMASIVAYA

const summaryHeadContainer = document.getElementById('summ-head-Container');
const summaryBodyContainer =  document.getElementById('summ-body');

export default function summaryUpdate(valData, summData, currentShare){
    /** to update the summary column */
    summaryHeadContainer.textContent = "";
    summaryBodyContainer.textContent ="";
    // header
    const comNameEl = document.createElement('p');
    comNameEl.textContent = currentShare;

    const profitEl = document.createElement('p');
    profitEl.textContent = `${valData.profit}%`

    if((valData.profit) > 0){
        profitEl.style.color = 'green';
    }else{ 
        profitEl.style.color = 'red'; 
        };

    const priceEl = document.createElement('p');
    priceEl.textContent = `$${valData.bookValue}`;

    summaryHeadContainer.append(comNameEl, profitEl,priceEl);
    summaryBodyContainer.textContent = summData;
}