const quoteText = document.querySelector('.quote'),
quoteBtn = document.querySelector('button');

function randomQuote() {
    // console.log("Clicked")
    fetch("https://api.quotable.io/random").then(res => 
        res.json()).then(result => {
            
        })
}

quoteBtn.addEventListener('click' , randomQuote)