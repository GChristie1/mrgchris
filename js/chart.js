zingchart.THEME="classic";
var myConfig = {
    "graphset": [
        {
            "type": "hbar3d",
            "background-color": "#43577c",
            "stacked": true,
            "3d-aspect": {
                "true3d": false,
                "y-angle": 10,
                "depth": 115
            },
            "title": {
                "text": "My Knowlegde",
                "background-color": "#17202A",
                "font-color": "#F4F6F7",
                "font-weight": "normal"
            },
            "legend": {
                "layout": "float",
                "margin":"12% auto auto auto",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "toggle-action": "remove",
                "marker": {
                    "border-color": "#fff"
                },
                "item": {
                    "font-color": "#acbad0"
                }
            },
            "tooltip": {
                "text": "%t / %k = %v<br>%k Total = %total",
                "font-color": "#000000",
                "border-width": "1px",
                "border-color": "#ffffff"
            },
            "plot": {
                "bar-width": 25,
                "alpha": 0.9
            },
            "plotarea": {
                "background-color": "#4f678e",
                "margin": "10% 5% 20% 20%"
            },
            "scale-x": {
                "values": [
                    "React.js",
                    "Angular.js",
                    "JQuery",
                    "PHP",
                    "Javascript",
                    "HMTL",
                    "CSS",
                    "Sass",
                    "Less",
                    "AJAX",
                    "HTML Canvas"
                ],
                "background-color": "#4F678E",
                "guide": {
                    "line-color": "#fff"
                },
                "tick": {
                    "line-color": "#6e82a1"
                },
                "item": {
                    "font-color": "#acbad0",
                    "offset-x": "-5%"
                }
            },
            "scale-y": {
                "background-color": "#43577c #4F678E",
                "label": {
                    "text": "Scale of knowlegdge according to percetage",
                    "font-color": "#acbad0",
                    "font-weight": "normal",
                    "offset-y": "5%"
                },
                "guide": {
                    "line-color": "#fff"
                },
                "tick": {
                    "line-color": "#6e82a1"
                },
                "item": {
                    "font-color": "#fff"
                }
            },
            "series": [
                {
                    "values": [
                        16.25,
                        13,
                        23,
                        19,
                        23,
                        25,
                        24,
                        15,
                        15,
                        15,
                        16
                    ],
                    "background-color": "#7D7B6E",
                    "text": ""
                },
                {
                    "values": [
                        16.25,
                        13,
                        23,
                        19,
                        23,
                        25,
                        24,
                        15,
                        15,
                        15,
                        16
                    ],
                    "background-color": "#A3A090",
                    "text": ""
                },
                {
                    "values": [
                        16.25,
                        13,
                        23,
                        19,
                        23,
                        25,
                        24,
                        15,
                        15,
                        15,
                        16
                    ],
                    "background-color": "#BDB9A6",
                    "text": ""
                },
                {
                    "values": [
                       16.25,
                        13,
                        23,
                        19,
                        23,
                        25,
                        24,
                        15,
                        15,
                        15,
                        16
                    ],
                    "background-color": "#D7D3BD",
                    "text": ""
                }
            ]
        }
    ]
};

zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 500, 
	width: 1025 
});