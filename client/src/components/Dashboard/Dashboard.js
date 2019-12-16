import React, { Component } from "react";
import { Container } from "./Dashboard-Styled-Components";
import Navbar from "../Navbar/Navbar";
import KPICard from "../KPICard/KPICard";
import url from "./Dashboard.Spreadsheets";
// fusioncharts
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./charts-theme";
import formatNum from "./format-number";

// import UserImg from "../assets/images/user-img-placeholder.jpeg";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

class Dashboard extends Component {

  state = {
    items: [],
    total:null,
    itemsDemo: [],
    dropdownOptions: [],
    selectedValue: null,
    amRevenue: null,
    ebRevenue: null,
    etRevenue: null,
    totalRevenue: null,
    productViews: null,
    purchaseRate: " ",
    checkoutRate: " ",
    abandonedRate: " ",
    ordersTrendStore: []
  };

  getData = arg => {
    // google sheets data
    const arr = this.state.items;
    const arrLen = arr.length;
    // kpi's
    let total = 0;
    // ---------------
    const countsPerTransaction = arr.reduce((acc, value) => ({ ...acc,
      [value.Transaction]: (acc[value.Transaction] || 0) + 1
      }), {});
      console.log(countsPerTransaction)

    // arr.map();
    for (let i = 0; i < arrLen; i++) {
      if (arg === arr[i]["DateTime"]) {
          total += parseInt(arr[i].revenue);
          // ordersTrendStore.push({
          //   label: "Amazon",
          //   value: arr[i].orders,
          //   displayValue: `${arr[i].orders} orders`
          // });

        // productViews += parseInt(arr[i].product_views);
        // purchaseRate += parseInt(arr[i].purchase_rate / 3);
      }
    }

    // totalRevenue = 0;
    // selectedValue = arg;

    // setting state
    this.setState({
      // totalRevenue: formatNum(totalRevenue),
    });
  };

  updateDashboard = event => {
    this.getData(event.value);
    this.setState({ selectedValue: event.value });
  };

  componentDidMount() {
    fetch(url.sells)
      .then(response => response.json())
      .then(data => {
        let batchRowValues = data.valueRanges[0].values;
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }
        // dropdown options
        let dropdownOptions = [];
        for (let i = 0; i < rows.length; i++) {
          dropdownOptions.push(rows[i].month);
        }
        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
        console.log(rows)
        this.setState(
          {
            items: rows,
            // dropdownOptions: dropdownOptions,
            // selectedValue: "Jan 2019"
          },
          () => this.getData("Jan 2019")
        );
      })
  }

  render() {
    return (

      <Container id="dashboard">
        {/* static navbar - top */}
          <Navbar
            options={this.state.dropdownOptions}
            onChange={this.updateDashboard}
            value={this.state.selectedValue}
          />
        {/* content area start */}
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* row 1 - revenue */}
          <Container className="row">
            <KPICard
              title="Total Revenue"
              // value={this.state.totalRevenue}
            />
            <KPICard
              title="Revenue from Amazon"
              // value={this.state.amRevenue}
            />

            <KPICard
              title="Revenue from Ebay"
              // value={this.state.ebRevenue}
            />

            <KPICard
              title="Revenue from Etsy"
              // value={this.state.etRevenue}
            />
          </Container>

          {/* row 2 - conversion */}
          <Container className="row">
            <KPICard
              title="Product Views"
              // value={this.state.productViews}
              views="views"
            />

            <Container className="col-md-8 col-lg-9 is-light-text mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="row full-height">
                  <Container className="col-sm-4 full height">
                    <Container className="chart-container full-height">
                      <ReactFC
                        {...{
            
                        }}
                      />
                    </Container>
                  </Container>
                  <Container className="col-sm-4 full-height border-left border-right">
                    <Container className="chart-container full-height">
                      <ReactFC
                        {...{
                   
                        }}
                      />
                    </Container>
                  </Container>
                  <Container className="col-sm-4 full-height">
                    <Container className="chart-container full-height">
                      <ReactFC
                        {...{
                   
                        }}
                      />
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
                  <ReactFC
                    {...{
                      // type: "bar2d",
                      // width: "100%",
                      // height: "100%",
                      // dataFormat: "json",
                      // containerBackgroundOpacity: "0",
                      // dataEmptyMessage: "Loading Data...",
                      // dataSource: {
                      //   chart: {
                      //     theme: "crece+",
                      //     caption: "Orders Trend",
                      //     subCaption: "By Stores"
                      //   },
                      //   data: this.state.ordersTrendStore
                      // }
                    }}
                  />
                </Container>
              </Container>
            </Container>

            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                  <ReactFC
           
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

export default Dashboard;