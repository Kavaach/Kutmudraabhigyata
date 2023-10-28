
// Scroll to Search Bar
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('GetStarted');

  button.addEventListener('click', function () {
    // Select the target section you want to scroll to (e.g., section2)
    var targetSection = document.getElementById('SearchBar');

    // Use the scrollIntoView() method to scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});









// // Making the Search Bar Run
// function identifyCryptocurrency(inputString) {
//   // Define a dictionary of known cryptocurrency symbols
//   const cryptocurrencySymbols = {
//     BTC: 'Bitcoin',
//     ETH: 'Ethereum',
//     ADA: 'Cardano',
//     XRP: 'Ripple',
//     LTC: 'Litecoin',
//     BCH: 'Bitcoin Cash',
//     XLM: 'Stellar',
//     DOT: 'Polkadot',
//     DOGE: 'Dogecoin',
//     USDT: 'Tether',
//     LINK: 'Chainlink',
//     UNI: 'Uniswap',
//     BNB: 'Binance Coin',
//     // Add more cryptocurrency symbols and their names here
//   };

//   // Use a regular expression to find potential cryptocurrency symbols
//   const regex = /\b\w{3,6}\b/g; // Assumes symbols are 3 to 6 alphanumeric characters

//   const matches = inputString.match(regex);

//   if (!matches) {
//     return "Cryptocurrency not found in input string.";
//   }

//   for (const match of matches) {
//     const symbol = match.toUpperCase();
//     if (cryptocurrencySymbols[symbol]) {
//       return `Identified cryptocurrency: ${cryptocurrencySymbols[symbol]} (${symbol})`;
//     }
//   }

//   return "Cryptocurrency not found in input string.";
// }

// // Example usage
// const inputString = "I just bought some BTC and ETH.";
// const result = identifyCryptocurrency(inputString);
// console.log(result);



// document.addEventListener('DOMContentLoaded', function () {
//   const inputStringElement = document.getElementById('inputString');
//   const identifyButton = document.getElementById('identifyButton');
//   const resultElement = document.getElementById('result');

//   identifyButton.addEventListener('click', function () {
//     const inputString = inputStringElement.value;
//     const result = identifyCryptocurrency(inputString);
//     resultElement.textContent = result;
//   });

//   function identifyCryptocurrency(inputString) {
//     // Your cryptocurrency identification code here (same as in the previous response)
//     // ...
//   }
// });