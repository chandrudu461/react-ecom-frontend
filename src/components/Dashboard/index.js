import React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";
import historyProducts from '../HistoryPage/data/historyProducts';
import Header from '../Header';
import './index.css'

const Dashboard = () => {

    const categoryNames = {
        1: 'Clothing',
        2: 'Electronics',
        3: 'Appliances',
        4: 'Grocery',
        5: 'Toys',
    };

    // Create data for the pie chart
    const brands = historyProducts.map(product => product.brand);
    const brandCounts = brands.reduce((acc, brand) => {
        acc[brand] = (acc[brand] || 0) + 1;
        return acc;
    }, {});

    console.log(brands)
    console.log(brandCounts)

    const categoriesData = historyProducts.map(product => product.categoryId);
    const categoryCounts = categoriesData.reduce((acc, categoryId) => {
        acc[categoryId] = (acc[categoryId] || 0) + 1;
        return acc;
    }, {});

    // Initialize an array to store available numbers
const availableNumbers = Array.from({ length: 20 }, (_, index) => index );

// Function to select a random number and remove it from the availableNumbers array
function selectRandomNumber() {
  if (availableNumbers.length === 0) {
    return 9;
  }

  // Generate a random index within the availableNumbers array
  const randomIndex = Math.floor(Math.random() * availableNumbers.length);

  // Get the random number from the array
  const randomNumber = availableNumbers[randomIndex];

  // Remove the selected number from availableNumbers
  availableNumbers.splice(randomIndex, 1);

  return randomNumber;
}

    //   const data = {
    //     labels: Object.keys(brandCounts),
    //     datasets: [
    //       {
    //         data: Object.values(brandCounts),
    //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71'], // You can add more colors if needed
    //       },
    //     ],
    //   };
    const getColor = (index) => {
        const colors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#FF00FF',
            '#FF5733', '#FFB433', '#33FF9D', '#336BFF', '#FF33D6',
            '#FF335D', '#C233FF', '#84FF33', '#6BFF33', '#33FFC2',
            '#33FFF3', '#FF3365', '#33B0FF', '#FF336A', '#33FFD6'
        ];
        return colors[index % colors.length];
    };
    const data = Object.keys(brandCounts).map(brand => ({
        name: brand,
        value: brandCounts[brand],
        fill: getColor(selectRandomNumber()),
    }));

    const dataCategories = Object.keys(categoryCounts).map(categoryId => ({
        name: categoryNames[categoryId] || categoryId,
        value: categoryCounts[categoryId],
        fill: getColor(categoryId)
    }));

    return (
        <div className="dashboard">
            <div className="chart-container">
                <Header/>
                <h1>Product Analytics</h1>
                <div className="pie-chart-holder">
                <div className='pie-details'>
                <h2>Brand Analytics</h2>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />  
                    <Tooltip />
                </PieChart>
                </div>
                <div className='pie-details'>
                    <h2>Category Analytics</h2>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dataCategories}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;