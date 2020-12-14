const configData = require('../auction/config.json');
const inputData= require(process.argv[2]);
const configSite = configData.sites;
const configBidder = configData.bidders;
let configIndex;
let maxBid = 0;
let highestBidder = {};
let highestBid = [];
let outputBids = [];


/**calculate bid amount of each bidder */
function calculateBidAmount(bids,unit){

    let bidUnits = bids.filter((bid) => bid.unit === unit);
    bidUnits.forEach(element => {
            if(configSite[configIndex].bidders.includes(element.bidder)){
                let bidderData = configBidder.find(({ name }) => name === element.bidder);   
                let adjustedBid = element.bid+(element.bid*bidderData.adjustment);
                if(adjustedBid>=configSite[configIndex].floor){
                    if(adjustedBid>maxBid ){
                        maxBid = adjustedBid;
                        highestBidder = element;
                    }
                }         
            }  
    });

    if(Object.keys(highestBidder).length == 0){
        highestBid.push();    
    }
    else{
        highestBid.push(highestBidder);
        highestBidder = {};
        maxBid = 0;
    }    
}

/**Calculate auction for each units */
function auctionsPerUnit(auctionData){ 

    let auctionUnits = auctionData.units;
    //loop through each unit
    auctionUnits.forEach(auctionUnit => {
        calculateBidAmount(auctionData.bids,auctionUnit);
    });
}


function winningBids(){

    //loop through each auction
    inputData.forEach(auction => {
        highestBid = [];
        configIndex = configSite.findIndex(config=> config.name === auction.site);
        if(configIndex>-1){
            auctionsPerUnit(auction);
            outputBids.push(highestBid);
        }
        else{
           outputBids.push([]);
        }

    });
    console.log(outputBids);
    return outputBids;
}

module.exports = winningBids();

    
   

