// import React from 'react';
// import "./Salesreport.css";
// import Navbar from "./Navbar";

// const SalesReport = () => {
//   return (
//     <div className="salesreport">
//     <Navbar/>
//     <div id="salesreport1">
//       <div id="sideMenu">
//         <h1>Sales Report</h1>

//         <ul className="menu">
//           <li>Categories</li>
//           <li>
//             Credit Sales <span className="colorIcon red"></span>
//           </li>
//           <li>
//             Channel Sales <span className="colorIcon orange"></span>
//           </li>
//           <li>
//             Direct Sales <span className="colorIcon green"></span>
//           </li>
//         </ul>
       
//       </div>
//       <div id="content">
        

//         <div className="mainChart">
//           <canvas id="salesData"></canvas>
//           <h2>Total Sales</h2>

//           <div className="clearFix"></div>

//           <div id="totalSales">
//             <div className="col">
//               <div id="creditSales" className="progressBar"></div>
//               <h3>$36,059</h3>
//               <span className="progressTitle">Credit Sales</span>
//             </div>
//             <div className="col">
//               <div id="channelSales" className="progressBar"></div>
//               <h3>$24,834</h3>
//               <span className="progressTitle">Channel Sales</span>
//             </div>
//             <div className="col">
//               <div id="directSales" className="progressBar"></div>
//               <h3>$15,650</h3>
//               <span className="progressTitle">Direct Sales</span>
//             </div>
//           </div>

//           <table>
//             <tr>
//               <th>November Sales</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>

//             <tr>
//               <td>Dallas Oak Dining Chair</td>
//               <td>20</td>
//               <td>$1,342</td>
//             </tr>

//             <tr>
//               <td>Benmore Glass Coffee Table</td>
//               <td>18</td>
//               <td>$1,550</td>
//             </tr>

//             <tr>
//               <td>Aoraki Leather Sofa</td>
//               <td>15</td>
//               <td>$4,170</td>
//             </tr>

//             <tr>
//               <td>Bali Outdoor Wicker Chair</td>
//               <td>25</td>
//               <td>$2,974</td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     </div>
//      </div>
//   );
// };

// export default SalesReport;


import React from 'react';
import Nav from './Navbar';
// import './Salesreport.css'; // Import the CSS file with component styles

const SaleReport = () => {
  return (
    // <div className='repoter'>
    <div id="salesreport1">
     <Nav/>
       <div id="sideMenu">
        <h1>Sales Report</h1>

        <ul className="menu">
           <li>Categories</li>
           <li>
             Credit Sales <span className="colorIcon red"></span>
           </li>
           <li>
             Channel Sales <span className="colorIcon orange"></span>
           </li>
           <li>
             Direct Sales <span className="colorIcon green"></span>
           </li>
         </ul>
       
       </div>
   
    <div className="frame">
    <div className="card">
        <div className="header">
          <span className="title">Weekly Report</span>
          <span className="date">01. Feb - 07. Feb</span>
          <span className="type">Revenue</span>
          <span className="value">$ 3000.00</span>
        </div>
        <div className="parameter">
          <span className="red">Views</span>
          <span className="blue">Purchases</span>
        </div>
        <div className="chart">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="red-data">
            <svg>
              <polyline points="5,60 45,39 90,58 130,20 175,50 220,37 260,60" className="red-line" />
            </svg>
            <div className="points">
              <div className="point red-point-1">
                <div className="tooltip">480</div>
              </div>
              <div className="point red-point-2">
                <div className="tooltip">652</div>
              </div>
              <div className="point red-point-3">
                <div className="tooltip">492</div>
              </div>
              <div className="point red-point-4">
                <div className="tooltip">768</div>
              </div>
              <div className="point red-point-5">
                <div className="tooltip">502</div>
              </div>
              <div className="point red-point-6">
                <div className="tooltip">631</div>
              </div>
              <div className="point red-point-7">
                <div className="tooltip">483</div>
              </div>
            </div>
          </div>
          <div className="blue-data">
            <svg>
              <polyline points="5,88 45,69 90,90 130,77 175,88 220,63 260,82" className="blue-line" />
            </svg> 
            <div className="points">
              <div className="point blue-point-1">
                <div className="tooltip">12</div>
              </div>
              <div className="point blue-point-2">
                <div className="tooltip">34</div>
              </div>
              <div className="point blue-point-3">
                <div className="tooltip">11</div>
              </div>
              <div className="point blue-point-4">
                <div className="tooltip">25</div>
              </div>
              <div className="point blue-point-5">
                <div className="tooltip">15</div>
              </div>
              <div className="point blue-point-6">
                <div className="tooltip">41</div>
              </div>
              <div className="point blue-point-7">
                <div className="tooltip">23</div>
              </div>
            </div>
          </div>
        </div>
        <div className="days">
          <span className="day">mon</span>
          <span className="day">tue</span>
          <span className="day">wed</span>
          <span className="day">thu</span>
          <span className="day">fri</span>
          <span className="day">sat</span>
          <span className="day">sun</span>
        </div>
      </div>    
    </div>
    </div>
  );
};

export default SaleReport;
