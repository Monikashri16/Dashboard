import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PropTypes from "prop-types";

const Barchart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.xvalue,
        datasets: [
          {
            label: "Semester",
            data: data.yvalue,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderColor: "rgba(0,0,0)",
            borderWidth: 2, 
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max:10,
          },
        },
      },
    //   elements: {
    //     bar: {
    //       barThickness: 10, // Set the width of each bar in pixels
    //     },
    //   },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

Barchart.propTypes = {
  data: PropTypes.shape({
    xvalue: PropTypes.arrayOf(PropTypes.string).isRequired,
    yvalue: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default Barchart;