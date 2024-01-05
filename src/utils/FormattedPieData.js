export const formattedPieData = (pieChartData)=> {
    return pieChartData.map((item) => ({
        name: item.name,
        value: item.value
    }));
}