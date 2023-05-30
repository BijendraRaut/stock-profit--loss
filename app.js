const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function calculateStocks() {
  if (initialPrice.value > currentPrice.value) {
    var loss = (initialPrice.value - currentPrice.value) * stockQuantity.value;
    var lossPercentage = (loss / currentPrice.value) * 100;
    console.log("loss is " + loss, lossPercentage);
  } else if (initialPrice.value < currentPrice.value) {
    var profit =
      (currentPrice.value - initialPrice.value) * stockQuantity.value;
    var profitPercentage = (profit / initialPrice.value) * 100;
    console.log("profit is " + profit, profitPercentage);
  } else {
    console.log("No Pain NO Gain");
  }
});
