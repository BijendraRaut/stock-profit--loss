const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector(".output-message");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = initialPrice.value;
  var qty = stockQuantity.value;
  var curr = currentPrice.value;
  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = ((loss / current) * 100).toFixed(2);
    showOutput(
      `Hey the loss is ${loss} 😢 and the percent is ${lossPercentage}%`
    );
    outputBox.style.color = "red";
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = ((profit / initial) * 100).toFixed(2);
    showOutput(
      `Hey the profit is ${profit} 🥳 and the percent is ${profitPercentage}%`
    );
    outputBox.style.color = "green";
  } else {
    showOutput("No pain no gain, no gain no pain");
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}
