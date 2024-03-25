
import React from 'react';
import { Bar } from 'react-chartjs-2';
import record from './record.json'

const Dashboard = ({ data }) => {
  // Extracting course codes and their corresponding credits
  const courseCodes = [];
  const credits = [];
  data.forEach(course => {
    const { course_code, credits: courseCredits } = course;
    if (!courseCodes.includes(course_code)) {
      courseCodes.push(course_code);
      credits.push(courseCredits);
    }
  });

  // Data for the bar chart
  const record = {
    labels: courseCodes,
    datasets: [
      {
        label: 'Credits',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.75)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: credits
      }
    ]
  };

  return (
    <div>
      <h2>Student Grades Bar Chart</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Bar
          data={record}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;