// DOUGHNUT CHART DATA
const doughnutStatusData = {
    labels: ["Successful", "Posted", "Pending", "Posting Failed", "Failed"], 
    datasets: [{
    data: [54, 20, 26, 21, 18],
    backgroundColor: ['#139650', '#9CCF73', '#F6C23E', '#FEE3A2','#E74A3B']
    }]
}
// DOUGHNUT CHART
const doughnutChartStatus = document.getElementById('doughnutChartStatus');
new Chart(doughnutChartStatus, {
type: 'pie',
data: doughnutStatusData,
options: {
    tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: '#dddfeb',
    borderWidth: 2,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
    },
    legend: {
    display: false
    },
    cutoutPercentage: 80,
}
});