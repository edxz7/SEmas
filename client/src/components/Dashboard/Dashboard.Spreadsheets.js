const spreadSheets = {
  apiKey: 'AIzaSyCLokupXEFstciM_1WFUvdu2-bepFhwfbo',
  inventory: {
    spreadsheetId: '1bgDFWPMvQoZYUye73LQyf0XQvojFYHSp4JeNeO6vb8Y'
  },
  sells: {
    spreadsheetId: '1Raqi1NSEZvtWn8PGXSok6QiRz21wZsULDQbPOnj5OFM'
  },
  demo: {
    spreadsheetId: '1sCgmzBIq2K9jUckLuYSWbDq4CuNUfdtuE6a5xI3I5Hw'
  }
}

const url = {
  inventory: `https://sheets.googleapis.com/v4/spreadsheets/${
    spreadSheets.inventory.spreadsheetId
    }/values:batchGet?ranges=Inventario&majorDimension=ROWS&key=${spreadSheets.apiKey}`,
  sells: `https://sheets.googleapis.com/v4/spreadsheets/${
    spreadSheets.sells.spreadsheetId
    }/values:batchGet?ranges=Ventas&majorDimension=ROWS&key=${spreadSheets.apiKey}`,
  demo: `https://sheets.googleapis.com/v4/spreadsheets/${
    spreadSheets.demo.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${spreadSheets.apiKey}`
}

export default url;