import React, { Component } from "react";

class Inventory extends Component {
    state = {

      };

    componentDidMount(){
        fetch(url.inventory)
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
          this.setState(
            {
              items: rows,
            },
            () => this.getData("Jan 2019")
          );
        })
    }
}

export default Inventory