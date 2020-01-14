import { Container } from "./Dashboard-Styled-Components";
import Navbar from "../Navbar/Navbar";
import KPICard from "../KPICard/KPICard";
// import ChartTable from "../ChartTable/ChartTable";
import React, { Component} from 'react';
import { MyContext } from "../../context";
import LineChart from "../SellsDayLineChart/SellsDayLineChart";
import BarChart from "../SellsWeeklyBarChart/SellsWeeklyBarChart";


class Dashboard extends Component  {

  state = {
    dailySellslabels: [],
    dailySellsdata: [],
    totalSells:0,
    stockInventoryValue:0,
    topSellProducts:[],
    topSellProductsWeek:[],
    cathegoryData:[],
    sellsPerDay : {
      labels: [],
      datasets: [
        {
          data: []
        }
      ]
    },
    sellsPerWeek : {
      labels: [],
      datasets: [
        {
          data: []
        }
      ]
    }
  }

  getStartOfWeek (date){
    var iDayOfWeek = date.getDay();
    var iDifference = date.getDate() - iDayOfWeek + (iDayOfWeek === 0 ?  -6:1);

    return new Date(date.setDate(iDifference));
  } 

  between(d, ws) {
    return d >= ws && d <= ws+7;
  }

  componentDidMount() {
    //Get the current date
    let today = new Date();
    let ddToday = String(today.getDate()).padStart(2, '0');
    let hhToday = String(today.getHours()).padStart(2, '0');
    console.log(ddToday);
    let weekStart = Number(this.getStartOfWeek(today).toString().split(" ")[2]) + 1;

    this.context.handleGetTransaction().then(({ data: { transactions } }) => {
      const data = transactions.transactions;
      const sells = []
      const dailySellsLabels = [];
      const dailySellsData = [];
      const weeklySellsLabels = [];
      const weeklySellsData = [];
      let dailyCounter = {}; 
      let weeklyCounter = {};
      let revenue = 0;
      
      data.map(({price, product, quantity, createdAt}) => {
        sells.push([product,quantity])
        let date = new Date(createdAt);
        let hh = String(date.getHours()).padStart(2, '0')
        let dd = String(date.getDate()).padStart(2, '0')
        let mm = String(date.getMonth() + 1).padStart(2, '0') 
        let yyyy = date.getFullYear()
        date = yyyy + '-' + mm + '-' + dd
        // console.log(price, product, quantity, createdAt);
        // console.log(hh, dd, mm, yyyy);
        revenue += price*quantity
        //Only add data if it belonggs to the current day 
        if(ddToday===dd && hh ){
          dailyCounter[ hh[0]==='0' ? Number(hh[1]):Number(hh)] = (dailyCounter[hh[0]==='0' ? Number(hh[1]):Number(hh)] || 0)+1; 
        }
  
        weeklyCounter[ dd[0]==='0' ? Number(dd[1]):Number(dd)] = (weeklyCounter[dd[0]==='0' ? Number(dd[1]):Number(dd)] || 0)+1; 
        
      })
      // data for the daily sells plot
      for(let i = 0; i < 24; i++ ){
        console.log(dailyCounter[i])
        if(i <= (hhToday[0]==='0' ? Number(hhToday[1]):Number(hhToday))){
          if(dailyCounter[i]){
            dailySellsData.push(dailyCounter[i])
          } else{
            dailySellsData.push(0)
          }
          dailySellsLabels.push(i)
        }
      }
      //data for weekly plots
      for(let i=0+weekStart; i < 7+weekStart; i++ ){
        console.log(this.between(i, weekStart))
        if(this.between(i, weekStart)){ //We check to  plot only this week data
          if(weeklyCounter[i]){
            console.log("El counter",weeklyCounter[i])
            weeklySellsData.push(weeklyCounter[i])
          } else{
            weeklySellsData.push(0)
          }
          weeklySellsLabels.push(i)
        }
      }
      console.log(weeklySellsLabels)
      console.log(weeklySellsData)
      //Set daily sells
      this.setState({sellsPerDay:{labels:dailySellsLabels}})    
      console.log(typeof this.state.sellsPerDay)
      this.setState(prevState => ({
        ...prevState,
        sellsPerDay: {
            ...prevState.sellsPerDay,
            datasets: [
              {
                label: 'Ventas del dia',
                labelColor:'rgba(75,192,192,1)',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10, 
                data: dailySellsData
              }]
            }
        }))
      //Set weekly sells
      this.setState({sellsPerWeek:{labels:weeklySellsLabels}})    
      this.setState(prevState => ({
        ...prevState,
        sellsPerWeek: {
            ...prevState.sellsPerWeek,
            datasets: [
              {
                label: 'Ventas semanales',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: weeklySellsData
              }]
            }
        }))

      //KPIs  
      //Get yhe top three sell products
      this.setState({topSellProducts: sells.slice(0, 3)});
      this.setState({totalSells: revenue}); //Total money earn
     }).catch(err => console.log(err))
  } 

  render(){

    return (

      <Container id="dashboard">

        {/* static navbar - top */}
          <Navbar/>
        {/* content area start */}
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* row 1 - revenue */}
          <Container className="row">

            <KPICard
              title="Ventas Totales"
              value={this.state.totalSells}
            />

          </Container>

          {/* row 2 - conversion */}
          {/* <Container className="row">
            <KPICard
              title="Product Views"
              value={this.state.productViews}
              views="views"
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
         
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container> */}

          {/* row 3 - orders trend */}
          <Container className="row" style={{ minHeight: "400px" }}>
            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                <LineChart data = {this.state.sellsPerDay}/>
                </Container>
              </Container>
            </Container>

            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                <BarChart data = {this.state.sellsPerWeek}/>
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