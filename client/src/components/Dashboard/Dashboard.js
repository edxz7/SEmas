import { Container } from "./Dashboard-Styled-Components";
import Navbar from "../Navbar/Navbar";
import KPICard from "../KPICard/KPICard";
import React, { Component} from 'react';
import { MyContext } from "../../context";

import BarChart from "../BarChart/BarChart";
import LineChart from "../BarChart/BarChart";



class Dashboard extends Component  {
  // state = {
  //   labels: [],
  //   data: [],
  //   totalSells:0,
  //   topSellProducts:[],
  //   topSellProductsWeek:[],
  //   cathegoryData:[]
  // }

 getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for(var i = 0; i < numItems; i++) {
      data.push({
        label: names[i],
        value: Math.round(20 + 80 * Math.random())
      });
    }
    return data;
  }
  
  getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(20 + 80 * Math.random())
      });
    }
    console.log(data)
    return data;
  }
  
  getData() {
    let feeds = [];
    feeds.push({
      title: 'Visits',
      data: this.getRandomDateArray(150)
    });
    feeds.push({
      title: 'Categories',
      data: this.getRandomArray(20)
    });
    feeds.push({
      title: 'Categories',
      data: this.getRandomArray(10)
    });
    feeds.push({
      title: 'Data 4',
      data: this.getRandomArray(6)
    });
    return feeds;
  }


  state = {
    data: this.getData()
  };


  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: this.getData()
      })
    }, 5000)
  }


//   componentDidMount() {
//     this.context.handleGetTransaction().then(({ data: { transactions } }) => {
//       const data = transactions.transactions;
//       this.setState({data})
//     }).catch(err => console.log(err))
// }
  // parseData() {
  //   this.state.data.map(({price, product, quantity, createdAt}) => {
  //     let date = new Date(createdAt);
  //     console.log(price, product, quantity, createdAt);
  //     console.log(date);
  //   })
  // }

  render(){
    const { data } = this.state;
    // this.parseData()

    return (

      <Container id="dashboard">

        {/* static navbar - top */}
          <Navbar
            // options={this.state.dropdownOptions}
            // onChange={this.updateDashboard}
            // value={this.state.selectedValue}
          />
        {/* content area start */}
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* row 1 - revenue */}
          <Container className="row">
            <KPICard
              // title="Total Revenue"
              // value={this.state.totalRevenue}
            />
            <KPICard
              // title="Revenue from Amazon"
              // value={this.state.amRevenue}
            />

            <KPICard
              // title="Revenue from Ebay"
              // value={this.state.ebRevenue}
            />

            <KPICard
              // title="Revenue from Etsy"
              // value={this.state.etRevenue}
            />
          </Container>

          {/* row 2 - conversion */}
          <Container className="row">
            <KPICard
              // title="Product Views"
              // value={this.state.productViews}
              // views="views"
            />

            <Container className="col-md-8 col-lg-9 is-light-text mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="row full-height">
                  <Container className="col-sm-4 full height">
                    <Container className="chart-container full-height">

                    </Container>
                  </Container>
                  <Container className="col-sm-4 full-height border-left border-right">
                    <Container className="chart-container full-height">

                    </Container>
                  </Container>
                  <Container className="col-sm-4 full-height">
                    <Container className="chart-container full-height">
                      {/* <ReactFC
                        {...{
                          type: "doughnut2d",
                          width: "100%",
                          height: "100%",
                          dataFormat: "json",
                          containerBackgroundOpacity: "0",
                          dataSource: {
                            chart: {
                              caption: "Abandoned Cart Rate",
                              theme: "crece+",
                              defaultCenterLabel: `${
                                this.state.abandonedRate
                                }%`,
                              paletteColors: "#EDF8B1, #000000"
                            },
                            data: [
                              {
                                label: "active",
                                value: `${this.state.abandonedRate}`
                              },
                              {
                                label: "inactive",
                                alpha: 5,
                                value: `${100 - this.state.abandonedRate}`
                              }
                            ]
                          }
                        }}

                      /> */}
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>

          {/* row 3 - orders trend */}
          <Container className="row" style={{ minHeight: "400px" }}>
            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                <BarChart
                        data={this.state.data[1].data}
                        title={this.state.data[1].title}
                        color="#70CAD1"
                      />
                </Container>
              </Container>
            </Container>

            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                      <LineChart
                        data={this.state.data[0].data}
                        title={this.state.data[0].title}
                        color="#3E517A"
                      />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        {/* content area end */}
      </Container>
    );
  }  
}
Dashboard.contextType = MyContext;
export default Dashboard;