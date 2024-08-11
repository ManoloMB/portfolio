'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import data from '@/components/dataGraficaRN.json';

export default function GraficaRedNeuronal() {

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            formatter: function (params) {
                let tooltipText = `<div></div>`;
                params.forEach(param => {
                    tooltipText += `
                        <div style="display: flex; align-items: center;">
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: ${param.color}; margin-right: 5px;"></div>
                            <div style="margin-right: 5px">${param.seriesName}:</div><b>${param.value.toFixed(2)}</b>
                        </div>
                    `;
                });
                return tooltipText;
            },
            backgroundColor: '#fff',
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            textStyle: {
                color: '#333'
            }
        },
        xAxis: {
            type: 'category',
            name: 'Umbral',
            nameLocation: 'middle',
            data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            nameTextStyle: {
                color: "#FFFFFF",
                padding: [20, 0, 0, 0],
            },
        },
        yAxis: {
            name: 'Value',
            min: 0.55,
            max: 1.0,
            interval: 0.05,
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            nameTextStyle: {
                color: "#FFFFFF"
            },
            
        },
        series: [
            {
                type: 'line',
                name: 'Precision',
                data: data.map(item => item.Precision),
                smooth: true
            },
            {
                type: 'line',
                name: 'Recall',
                data: data.map(item => item.Recall),
                smooth: true
            },
            {
                type: 'line',
                name: 'F1 Score',
                data: data.map(item => item['F1 Score']),
                smooth: true
            }
        ]
    };

    return <ReactECharts option={option} style={{ height: '60vh', width: '100%' }} />;
}