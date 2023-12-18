function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const gstPercentage = document.getElementById("gst").value;
  console.log(amount);

  console.log(gstPercentage);
  const total = amount + amount * (gstPercentage / 100);
  console.log(total);
  const result = document.getElementById("result");
  result.innerHTML = "Total Amount ₹" + total;

  const xValues = ["Amount", "GST"];
  const yValues = [amount, total];
  const barColors = ["#4CAF50", "#2196F3"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "GST CALCULATOR",
      },
    },
  });
}
