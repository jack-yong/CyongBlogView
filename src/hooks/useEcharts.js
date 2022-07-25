const useEcharts = ({ type = '', data = null }) => {

    const buildDate = (pieData) => {
        let rArr = [];
        if (Array.isArray(pieData) && pieData.length > 0) {

            pieData.map(item => {
                let obj = {};
                obj.value = item.articleNum;
                if (item.categoryName) {
                    obj.name = item.categoryName;
                }
                if (item.tagName) {
                    obj.name = item.tagName;
                }


                rArr.push(obj);
            })
            return rArr;
        }
        return rArr;
    }

    return {
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left'
        // },
        series: [
            {
                type: 'pie',
                radius: '88%',
                data: buildDate(data),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    color: "#000",
                    fontSize: 18,
                    fontFamily: 'dengxian'
                }
            }
        ]
    }
}

export default useEcharts