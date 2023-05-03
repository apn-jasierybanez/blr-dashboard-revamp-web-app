const doughnutChartMerchantLabel = {
    id: 'doughnutChartMerchantLabel',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        ctx.font = 'bold 24px Poppins San Serif';
        ctx.fillStyle = '#52565E';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middlel';
        ctx.fillText('₱ 520,000', xCoor, yCoor);
        ctx.fillText('total', xCoor, yCoor + 30);

    }
}

var doughnutChartMerchantData = {
    labels: [],
    datasets: [
        {
        label: 'Volume in peso: ',
        data: ['1005000', '797000', '1000000', '415000', '637000'],
        backgroundColor: ['#058240', '#87C159', '#ADCACB', '#FEE3A2', '#F3C301'],
        }]
    };

    const doughnutChartMerchant = new Chart(document.getElementById('doughnutChartMerchant'), {
    type: 'doughnut',
    data: doughnutChartMerchantData,
    options: {
        responsive: true,
        legend: {
        display: false
        }
        
    },
    plugins: [doughnutChartMerchantLabel]
    });

    const doughnutChartTotalDataLabel = {
        id: 'doughnutChartMerchantLabel',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
    
            ctx.save();
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            ctx.font = 'bold 22px Poppins San Serif';
            ctx.fillStyle = '#52565E';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middlel';
            ctx.fillText('3.39%', xCoor, yCoor - 20);
            ctx.fillText('of total', xCoor, yCoor);
            ctx.fillText('transacions', xCoor, yCoor + 20);
        }
    }

var doughnutChartTotalData = {
    labels: ["Current", "Total"],
    datasets: [
        {
        data: [3854, 10000],
        backgroundColor: ["#9CCF73","#ACC9CA"],
        }]
    };

    const doughnutChartTotal = new Chart(document.getElementById('doughnutChartTotal'), {
    type: 'doughnut',
    data: doughnutChartTotalData,
    options: {
        responsive: true,
        legend: {
        display: false
        },
    },
    plugins: [doughnutChartTotalDataLabel]
    });