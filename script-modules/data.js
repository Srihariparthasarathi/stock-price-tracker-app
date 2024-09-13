// OM NAMASIVAYA

const bookValueProfitUrl = 'https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata';

const stockSummaryUrl = 'https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata';

const graphDataUrl ='https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata';


export const data =   (function() {
    return {
        getStockData: async function(){
            try{
                const response = await fetch(bookValueProfitUrl);
                if(!response.ok){
                    throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
                }
                const data = await response.json();
                return data.stocksStatsData
            }catch(errorMsg){
                console.error(errorMsg);
            }
        },

        getStockSummary: async function () {
            /** get the summary of the stock from https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata*/
            try{
                const response = await fetch(stockSummaryUrl);
                if(!response.ok){
                    throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
                }
                const data = await response.json();
                
                return data.stocksProfileData
        
            }catch(errorMsg){
                console.error(errorMsg);
            }
        },

        getGraphData: async function(){
            /**get he graph data from https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata*/
            try{
                const response = await fetch(graphDataUrl);
                if(!response.ok){
                    throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
                }
                const data = await response.json();
                return data.stocksData[0];
            }catch(errorMsg){
                console.error(errorMsg);
            }
        
        }

    }
})();


async function getData() {
    const{getStockData, getStockSummary, getGraphData} = data;
    const dataList = await getStockData();
    const stockSummList = await getStockSummary();
    const stockGraphData = await getGraphData();

    return [dataList, stockSummList, stockGraphData]
}




// async function getStockData(){
//     /** get the book value and the profite data from  https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata*/
//     try{
//         const response = await fetch(bookValueProfitUrl);
//         if(!response.ok){
//             throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
//         }
//         const data = await response.json();
//         return data.stocksStatsData
//     }catch(errorMsg){
//         console.error(errorMsg);
//     }
// }

// async function getStockSummary(){
//     /** get the summary of the stock from https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata*/
//     try{
//         const response = await fetch(stockSummaryUrl);
//         if(!response.ok){
//             throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
//         }
//         const data = await response.json();
        
//         return data.stocksProfileData

//     }catch(errorMsg){
//         console.error(errorMsg);
//     }
// }

// async function getGraphData(){
//     /**get he graph data from https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata*/
//     try{
//         const response = await fetch(graphDataUrl);
//         if(!response.ok){
//             throw new Error(`status code - ${response.status}, Error message - ${response.statusText}`);
//         }
//         const data = await response.json();
//         return data.stocksData[0];
//     }catch(errorMsg){
//         console.error(errorMsg);
//     }

// }