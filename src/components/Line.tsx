import React from 'react';
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
const fetchData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  const data = await response.json();
  return data;
};

const LineChart: React.FC = () => {
  const { data, isLoading, isError } = useQuery('casesData', fetchData);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const chartData = {
    labels: Object.keys(data['cases']),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data['cases']),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div > 
    <h2 className='text-white text-3xl text-center'>Line Graph</h2>
    <Line data={chartData} />
  </div>
  );
};

export default LineChart;
