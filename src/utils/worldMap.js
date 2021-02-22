var echarts = require('echarts');
export function createMap(dom) {
    var myChart = echarts.init(dom);
    var data = [{
            "time": 2020,
            "data": [{
                    "name": "美国",
                    "value": [1025000, 31.222, "美国"]
                },
                {
                    "name": "俄国",
                    "value": [433412, 13.202, "俄国"]
                },
                {
                    "name": "Japan",
                    "value": [209071, 6.369, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [208867, 6.362, "德国"]
                },
                {
                    "name": "France",
                    "value": [146982, 4.477, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [124970, 3.807, "英国"]
                },
                {
                    "name": "Italy",
                    "value": [109260, 3.328, "意大利"]
                },
                {
                    "name": "China",
                    "value": [91506, 2.787, "中国"]
                },
                {
                    "name": "Canada",
                    "value": [86303, 2.629, "加拿大"]
                },
                {
                    "name": "India",
                    "value": [61470, 1.873, "印度"]
                }
            ]
        },
        {
            "time": 2019,
            "data": [{
                    "name": "United States of America",
                    "value": [2768900, 23.337, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [1086988, 9.027, "日本"]
                },
                {
                    "name": "Russia",
                    "value": [940038, 7.923, "俄国"]
                },
                {
                    "name": "Germany",
                    "value": [919651, 6.253, "德国"]
                },
                {
                    "name": "France",
                    "value": [691157, 5.825, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [541917, 4.567, "英国"]
                },
                {
                    "name": "Italy",
                    "value": [459811, 3.875, "意大利"]
                },
                {
                    "name": "China",
                    "value": [306520, 2.583, "中国"]
                },
                {
                    "name": "Canada",
                    "value": [268889, 2.266, "加拿大"]
                },
                {
                    "name": "Mexico",
                    "value": [227664, 1.919, "墨西哥"]
                }
            ]
        },
        {
            "time": 2018,
            "data": [{
                    "name": "United States of America",
                    "value": [5754800, 25.921, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [3103698, 13.774, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [1714447, 7.722, "德国"]
                },
                {
                    "name": "France",
                    "value": [1244419, 5.605, "法国"]
                },
                {
                    "name": "Italy",
                    "value": [1133465, 5.105, "意大利"]
                },
                {
                    "name": "United Kingdom",
                    "value": [1012617, 4.561, "英国"]
                },
                {
                    "name": "Russia",
                    "value": [775810, 3.501, "俄国"]
                },
                {
                    "name": "Canada",
                    "value": [582735, 2.625, "加拿大"]
                },
                {
                    "name": "Spain",
                    "value": [520938, 2.346, "西班牙"]
                },
                {
                    "name": "China",
                    "value": [404494, 1.822, "中国"]
                }
            ]
        },
        {
            "time": 2017,
            "data": [{
                    "name": "United States of America",
                    "value": [9898800, 30.659, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [4731199, 14.456, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [1886400, 5.843, "德国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [1477132, 4.575, "英国"]
                },
                {
                    "name": "France",
                    "value": [1326333, 4.108, "法国"]
                },
                {
                    "name": "China",
                    "value": [1192836, 3.695, "中国"]
                },
                {
                    "name": "Italy",
                    "value": [1097343, 3.399, "意大利"]
                },
                {
                    "name": "Canada",
                    "value": [724914, 2.245, "加拿大"]
                },
                {
                    "name": "Brazil",
                    "value": [644729, 1.997, "巴西"]
                },
                {
                    "name": "Mexico",
                    "value": [636731, 1.972, "墨西哥"]
                }
            ]
        },
        {
            "time": 2016,
            "data": [{
                    "name": "United States of America",
                    "value": [14419600, 22.679, "美国"]
                },
                {
                    "name": "China",
                    "value": [5951462, 9.360, "中国"]
                },
                {
                    "name": "Japan",
                    "value": [5488424, 8.632, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [3306028, 5.200, "德国"]
                },
                {
                    "name": "France",
                    "value": [2565755, 4.035, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [2266049, 3.564, "英国"]
                },
                {
                    "name": "Brazil",
                    "value": [2143035, 3.371, "巴西"]
                },
                {
                    "name": "Italy",
                    "value": [2056941, 3.235, "意大利"]
                },
                {
                    "name": "India",
                    "value": [1678297, 2.640, "印度"]
                },
                {
                    "name": "Canada",
                    "value": [1577040, 2.480, "加拿大"]
                }
            ]
        }
    ]


    var option = {
        baseOption: {
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut',
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 2000,
                left: null,
                right: 5,
                top: 20,
                bottom: 20,
                width: 46,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 1
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: data.map(function(ele) {
                    return ele.time
                })
            },
            backgroundColor: '#404a59',
            title: {
                text: '互动营销中心 -- 全球销售量',
                subtext: '单位: 亿元',
                left: 'center',
                top: '50px',
                textStyle: {
                    fontSize: 25,
                    color: 'rgba(255,255,255, 0.9)'
                }
            },
            tooltip: {
                formatter: function(params) {
                    if ('value' in params.data) {
                        return params.data.value[2] + ': ' + params.data.value[0];
                    }
                }
            },
            grid: {
                left: '12%',
                right: '45%',
                top: '70%',
                bottom: 20
            },
            xAxis: {},
            yAxis: {},
            series: [{
                id: 'map',
                type: 'map',
                mapType: 'world',
                top: '10%',
                bottom: '25%',
                left: 10,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        areaColor: 'rgba(255,255,255, 0.5)'
                    }
                },
                data: []
            }, {
                id: 'bar',
                type: 'bar',
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ddd'
                        }
                    }
                },
                data: []
            }, {
                id: 'pie',
                type: 'pie',
                radius: ['8%', '20%'],
                center: ['75%', '85%'],
                roseType: 'radius',
                tooltip: {
                    formatter: '{b} {d}%'
                },
                data: [],
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0,0,0,0.3)',
                        borderSize: 1
                    }
                }
            }]
        },
        options: []
    }

    for (var i = 0; i < data.length; i++) {
        var restPercent = 100;
        var restValue = 0;
        data[i].data.forEach(function(ele) {
            restPercent = restPercent - ele.value[1];
        });
        restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
        option.options.push({
            visualMap: [{
                dimension: 0,
                left: 10,
                itemWidth: 12,
                min: data[i].data[9].value[0],
                max: data[i].data[0].value[0],
                text: ['High', 'Low'],
                textStyle: {
                    color: '#ddd'
                },
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered', 'red']
                }
            }],
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.1],
                axisLabel: {
                    show: false,
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                data: data[i].data.map(function(ele) {
                    return ele.value[2]
                }).reverse()
            },
            series: [{
                id: 'map',
                data: data[i].data
            }, {
                id: 'bar',
                data: data[i].data.map(function(ele) {
                    return ele.value[0]
                }).sort(function(a, b) {
                    return a > b
                })
            }, {
                id: 'pie',
                data: data[i].data.map(function(ele) {
                    return {
                        name: ele.value[2],
                        value: ele.value
                    }
                }).concat({
                    name: '其他国家',
                    value: restValue
                }),
            }]
        })
    }

    myChart.setOption(option);
}