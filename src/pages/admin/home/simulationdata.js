import * as echarts from 'echarts';
function getVirtulData(year) {
    // year = year || '2022';
    // let date = +echarts.number.parseDate(year + '-01-01');
    // let end = +echarts.number.parseDate(+year + 1 + '-01-01');
    // let dayTime = 3600 * 24 * 1000;
    // let data = [];
    // for (let time = date; time < end; time += dayTime) {
    //     data.push([
    //         echarts.format.formatTime('yyyy-MM-dd', time),
    //         Math.floor(Math.random() * 10)
    //     ]);
    // }
    let data = [['2022-01-01', 2], ['2022-01-02', 3]]
    return data;
}

const simulationdata = {
    categoricalData:
        [
            {
                name: '文章相关',
                data: [
                    { name: '文章数量', num: 59, key: '/admin/article/manager' },
                    { name: '标签数量', num: 109, key: '/admin/tags' },
                    { name: '分类数量', num: 500, key: '/admin/categorys' },

                ]
            },
            {
                name: '用户相关',
                data: [
                    { name: '留言数量', num: 67, key: '/admin/messages' },
                    { name: '用户数量', num: 87, key: '/admin/user/manger' },
                    { name: '友链数量', num: 700, key: '/admin/links' },

                ]

            },
            {
                name: '其他',
                data: [
                    { name: '作品数量', num: 6, key: '/admin/settings' },
                    { name: '开发日志数量', num: 87, key: '/admin/settings' },
                    { name: '说说数量', num: 700, key: '/admin/links' },

                ]

            }
        ],


    overallData: {

        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '88%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
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
    },
    canderdata: {
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
                range: '2022',
                cellSize: ['auto', 15]
            },
        ],
        series: [
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtulData('2022')
            },
        ]
    }

}
export default simulationdata