// TRANSAC BAR DATA
const transacData = {
    labels: ['US', 'RUSSIA', 'UKRAINE', 'INDIA', 'PAKISTAN'],
    datasets: [
        {
            label: 'No. of transactions per country',
            data: ['50', '10', '15', '26', '50'],
            backgroundColor: '#39C86A',
            borderRadius: 5,
            borderWidth: 1
        }
    ]
}
// TRANSAC BAR CHART
const transacBarGraph = document.getElementById('transacBarGraph');
new Chart(transacBarGraph, {
type: 'bar',
data: transacData,
options: {
    maintainAspectRatio: false
}
});