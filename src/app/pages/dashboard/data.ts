import { ChartType } from './dashboard.model';

const madCumulativeGAV: ChartType = {
  series: [{
    name: 'GMV',
    type: 'line',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Target',
    type: 'line',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: 'XYZ - Stock Analysis (2009 - 2016)',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "Operating Cashflow (thousand crores)",
        style: {
          color: '#00E396',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#FEB019'
      },
      labels: {
        style: {
          colors: '#FEB019',
        },
      },
      title: {
        text: "Revenue (thousand crores)",
        style: {
          color: '#FEB019',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
};
//
// const monthlyEarningChart: ChartType = {
//   chart: {
//     height: 200,
//     type: 'radialBar',
//     offsetY: -10
//   },
//   plotOptions: {
//     radialBar: {
//       startAngle: -135,
//       endAngle: 135,
//       dataLabels: {
//         name: {
//           fontSize: '13px',
//           color: undefined,
//           offsetY: 60
//         },
//         value: {
//           offsetY: 22,
//           fontSize: '16px',
//           color: undefined,
//           formatter: (val) => {
//             return val + '%';
//           }
//         }
//       }
//     }
//   },
//   colors: ['#556ee6'],
//   fill: {
//     type: 'gradient',
//     gradient: {
//       shade: 'dark',
//       shadeIntensity: 0.15,
//       inverseColors: false,
//       opacityFrom: 1,
//       opacityTo: 1,
//       stops: [0, 50, 65, 91]
//     },
//   },
//   stroke: {
//     dashArray: 4,
//   },
//   series: [67],
//   labels: ['Series A'],
// };
//
// const monthlyEarningChart: ChartType = {
//   chart: {
//     height: 200,
//     type: 'radialBar',
//     offsetY: -10
//   },
//   plotOptions: {
//     radialBar: {
//       startAngle: -135,
//       endAngle: 135,
//       dataLabels: {
//         name: {
//           fontSize: '13px',
//           color: undefined,
//           offsetY: 60
//         },
//         value: {
//           offsetY: 22,
//           fontSize: '16px',
//           color: undefined,
//           formatter: (val) => {
//             return val + '%';
//           }
//         }
//       }
//     }
//   },
//   colors: ['#556ee6'],
//   fill: {
//     type: 'gradient',
//     gradient: {
//       shade: 'dark',
//       shadeIntensity: 0.15,
//       inverseColors: false,
//       opacityFrom: 1,
//       opacityTo: 1,
//       stops: [0, 50, 65, 91]
//     },
//   },
//   stroke: {
//     dashArray: 4,
//   },
//   series: [67],
//   labels: ['Series A'],
// };
//
// const transactions = [
//   {
//     id: '#SK2540',
//     name: 'Neal Matthews',
//     date: '07 Oct, 2019',
//     total: '$400',
//     status: 'Paid',
//     payment: ['fa-cc-mastercard', 'Mastercard'],
//     index: 1
//   },
//   {
//     id: '#SK2541',
//     name: 'Jamal Burnett',
//     date: '07 Oct, 2019',
//     total: '$380',
//     status: 'Chargeback',
//     payment: ['fa-cc-visa', 'Visa'],
//     index: 2
//   },
//   {
//     id: '#SK2542',
//     name: 'Juan Mitchell',
//     date: '06 Oct, 2019',
//     total: '$384',
//     status: 'Paid',
//     payment: ['fab fa-cc-paypal', 'Paypal'],
//     index: 3
//   },
//   {
//     id: '#SK2543',
//     name: 'Barry Dick',
//     date: '05 Oct, 2019',
//     total: '$412',
//     status: 'Paid',
//     payment: ['fa-cc-mastercard', 'Mastercard'],
//     index: 4
//   },
//   {
//     id: '#SK2544',
//     name: 'Ronald Taylor',
//     date: '04 Oct, 2019',
//     total: '$404',
//     status: 'Refund',
//     payment: ['fa-cc-visa', 'Visa'],
//     index: 5
//   },
//   {
//     id: '#SK2545',
//     name: 'Jacob Hunter',
//     date: '04 Oct, 2019',
//     total: '$392',
//     status: 'Paid',
//     payment: ['fab fa-cc-paypal', 'Paypal'],
//     index: 6
//   }
// ];
//
// const statData = [{
//   icon: 'bx bx-copy-alt',
//   title: 'Orders',
//   value: '1,235'
// }, {
//   icon: 'bx bx-archive-in',
//   title: 'Revenue',
//   value: '$35, 723'
// }, {
//   icon: 'bx bx-purchase-tag-alt',
//   title: 'Average Price',
//   value: '$16.2'
// }];

export { madCumulativeGAV };
