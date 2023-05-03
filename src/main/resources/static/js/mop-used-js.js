// MOP BAR GRAPH DATA
const mopTransacData = {
    labels: ['VISA', 'MasterCard', 'MLhuillier Pay', 'Gcash', 'Paymaya', 'Others', 'Others', 'Others'],
    datasets: [{
        axis: 'y',
        label: 'No. of transactions per MOP used',
        data: ['149', '99', '79', '65', '25', '20', '15', '10', ],
        fill: false,
        backgroundColor: '#39C86A',
        borderRadius: 5,
        borderWidth: 1
        }]
}
// MOP BAR GRAPH
const mopBarGraph = document.getElementById('transacBarGraphYaxis');
new Chart(mopBarGraph, {
type: 'bar',
data: mopTransacData,
options: {
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
        xAxes: [{
            barThickness: 20,
        }]
    }
}
});