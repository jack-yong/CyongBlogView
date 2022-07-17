const useCanlder = ({ canData = [], year = '' }) => {

    const getData = (mydata) => {
        let formateCanlder = [];
        if (Array.isArray(mydata) && mydata.length > 0) {
            mydata.map(item => {
                const { commitNum, blogCreateDay } = item;
                let objArr = []
                objArr.push(blogCreateDay);
                objArr.push(commitNum)
                formateCanlder.push(objArr);
            })
        }
        return formateCanlder;
    }
    return {
        tooltip: {
            position: 'top'
        },
        visualMap: {
            min: 0,
            max: 5,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            top: 'top',
            inRange: {
                color: ['#ebedf0', '#216e39']
            },
        },
        calendar: [
            {
                range: year,
                cellSize: ['auto', 15]
            },
        ],
        series: [
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getData(canData)
            },
        ]
    }
}

export default useCanlder;