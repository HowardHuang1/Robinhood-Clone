import React, { useEffect, useState, useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false
  },
  elements: {
    line: {
      tension: 0
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: false,
        }
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

function LineGraph({ visible, stock, casesType, stocksData }) {
  const [data, setData] = useState([]);
  const [i, setI] = useState(0);
  const ref = useRef()
  useEffect(() => {
    console.log(data)
    let d = data
    let value = 50;
    let date = new Date();
    date.setHours(0,0,0,0);
    date.setDate(i);
    setI(i+1)
    value = stocksData[stock].price
    d.push({x: date, y: value});
    console.log("line graph", d)
    setData(d)
    if (ref.current && ref.current.chartInstance)
        ref.current.chartInstance.update()
  }, [ref, data, stock, stocksData]);

  return (
    <div>
      {visible && data?.length > 0 && (
        <Line
        ref={ref}
          data={{
            datasets: [
              {
                type: 'line',
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#5AC53B',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
