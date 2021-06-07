const values = require('./values');
const path = require('path');
class Tables {
  constructor() {
    this.value = new values();
  }

  async addTitleHeader() {
    const dict = {
      style: 'tableExample',
      color: '#444',
      'table': {
        widths: [60, 80, 100, 100, 100],
        headerRows: 2,
        body: [
          [{
            image: path.resolve(__dirname,'../Picture 1.png'),
            width: 50,
            height: 40,
            rowSpan: 2,
            alignment: 'center',
            border: [false, false, false, false]
          },{text:'', border: [false, false, false, false]}, {
            text: 'M/S PREMIX CONCRETE SOLUTIONS',
            style: 'tableHeader',
            colSpan: 3,
            alignment: 'center',
            bold: true,
            border: [true, true, true, true],
            fontSize: 16,
          },{},{text:'', border: [false, false, false, false]}],
          [{}, {
            text: 'Report Title:',
            bold: true,
            fontSize: 14,
            alignment: 'left',
            border: [false, false, false, false]
          }, {
            text: 'Batch Sheet',
            bold: true,
            fontSize: 14,
            alignment: 'right',
            border: [false, false, false, false]
          }, {
            text: 'Plant Sl.No:',
            bold: true,
            fontSize: 14,
            alignment: 'right',
            border: [false, false, false, false]
          }, {
            text: '420',
            fontSize: 14,
            bold: true,
            alignment: 'left',
            border: [false, false, false, false]
          }]
        ]
      },
    }
    return dict;
  }

  async requirements(values) {
    let dict = {
      table: {
        heights: 10,
        widths: [90, 90, 100, 80, 90, '*'],
        //widths: ['16.6%', '16.6%', '16.6%', '16.6%', '16.6%', '16.6%'],

        bold: true,
        body: [
          [{
            text: 'Batch Date',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.batchDate}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Batch Start Time',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.batchStartTime}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Batch End Time',
            fontSize: 10,
            bold: true
          }, {
            text: ":09:09:23",
            fontSize: 10,
            colSpan: 1
          }],
          [{
            text: 'Batch Number',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.batchNumber}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Recipe Code',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.recipeCode}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Ordered Qty',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.orderQty}`,
            fontSize: 10,
            colSpan: 1
          }],
          [{
            text: 'Batcher Name',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.batcherName}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Recipe Name',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.recipeCode}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Production Qty',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.productionQty}`,
            fontSize: 10,
            colSpan: 1
          }],
          [{
            text: 'Order Name',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.recipeCode}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Truck Number',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.truckNumber}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Adj/Manual Qty',
            fontSize: 10,
            bold: true
          }, {
            text: ": 0.00",
            fontSize: 10,
            colSpan: 1
          }],
          [{
            text: 'Customer Name',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.customer}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Truck Driver',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.truckDriver}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'With This Load',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.withLoad}`,
            fontSize: 10,
            colSpan: 1
          }],
          [{
            text: 'Site',
            fontSize: 10,
            bold: true
          }, {
            text: `: ${values.site}`,
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Batch Size',
            fontSize: 10,
            bold: true
          }, {
            text: ": 1.00",
            fontSize: 10,
            colSpan: 1
          }, {
            text: 'Mixer Capacity',
            fontSize: 10,
            bold: true
          }, {
            text: ":1.00",
            fontSize: 10,
            colSpan: 1
          }],
        ]
      },
      layout: 'noBorders',
      styles: {
        bold: true
      }
    }
    return dict;
  }
  async addMargin() {
    let dict = {
      'table': {
        body: [
          [{
            stack: []
          }]
        ]
      },
      layout: {
        //set custom borders size and color
        hLineWidth: function (i, node) {
          return (i === 0 || i === node.table.body.length) ? 2 : 1;
        },
        vLineWidth: function (i, node) {
          return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        },
        hLineColor: function (i, node) {
          return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
        },
        vLineColor: function (i, node) {
          return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
        }
      }
    }
    return dict;
  }

  async tableSubHeaders() {
    let dict = {
      'table': {
        widths: [120, 140, 100, 80, 83 ],
        body: [
          [{
              text: 'Aggregate',
              bold: true,
              alignment: 'right'
            },
            {
              text: 'Cement',
              bold: true,
              alignment: 'right'
            },
            {
              text: 'Water/Ice',
              bold: true,
              alignment: 'right'
            },
            {
              text: 'Admixture',
              bold: true,
              alignment: 'right'
            },
            {
              text: 'Silica',
              bold: true,
              alignment: 'right'
            }
          ],
        ]
      },
      layout: 'noBorders',
    }
    return dict;
  }
  async mainTable(values) {
    let dict = {
      'alignment':'center',
      'table': {
        widths: [20, 20, 30, 30, 20, 20, 20, 15, 20, 15, 15,20, 20, 20, 20, 20, 20, 20, 22],
        body: [
          ['MS', 'MS', '20MM', '12MM', 'Ag5', 'Ag6', 'C1', 'C2', 'C3', 'C4', 'C5', 'W1', 'W2', 'W3', 'Ad1', 'Ad2', 'Ad3', 'Ad4', 'Silica'],
          values,
        ]
      },
      layout: {
        hLineColor: 'gray',
        vLineColor: 'gray'
      }
    }
    return dict;
  }

  async addMassRecipe( values) {
    const total = await this.value.getMassRecipeTotal( values);
    const dict = {
      'table': {
        widths: [475, 64],
        body: [
          [{
            text: 'Mass of Recipe Targets in Kgs.',
            bold: true,
            alignment: 'right'
          }, {
            text: total,
            bold: true,
            alignment: 'center',
            borderColor: ['#080808', '#080808', '#080808', '#080808'],
          }],
        ]
      },
      layout: {
        hLineColor: 'gray',
        vLineColor: 'gray'
      }
    }
    return dict;
  }

  async productionTable(values) {
    let dict ={}
    try {
       dict = {
        'alignment':'center',
        table: {
          widths: [20, 20, 30, 30, 20, 20, 20, 15, 20, 15, 15,20, 20, 20, 20, 20, 20, 20, 22],
          body: [
            await this.value.randomValues(values,1),
            await this.value.randomValues(values,2),
            ['0.00', '0.00', '0.00','0.00','0.00','0.00','0','0','0','0','0','0','0','','0.00','0.00','0.00','0.00','0'],
            ['0.00', '0.00', '0.00','0.00','0.00','0.00','','','','','','','','','','','','',''],
          ]
        },
        layout: {
          hLineColor: 'gray',
          vLineColor: 'gray'
        }
      }
    } catch (error) {
      console.log(error);
    }
    
    return dict;
  }

  async targetValueHeader() {
    const dict = {
      text: 'Target and Actual Value with moisture correction/absorption in % and other Corrections in Kgs.',
      bold: true
    }
    return dict;
  }

 async totalWeightHeader(name) {
    let dict = {
      text: `Total ${name} Weight in Kgs.`,
      bold: true
    }
    return dict;
  }
 async totalWeightTable(index) {
   let totalArray ;
  if(index===1){
    totalArray = await this.value.firstRow;
  }else totalArray = await this.value.secondRow;
    let dict = {
      'table': {
        widths: [20, 25,  25, 25, 20, 20, 25, 20, 25, 15, 15,20, 20, 20, 20, 20, 20, 20, 13],
        alignment: 'center',
        body: [totalArray]
      },
      layout: {
        hLineColor: 'gray',
        vLineColor: 'gray'
      }
    }
    return dict;
  }

  async diffInPercentageHeader(){
    return { text: 'Difference in Percentage',bold: true};
  }
  async diffInPercenntage(){
    let arr =[];
    for(let index=0; index<this.value.firstRow.length;index++){
      const first = parseFloat(this.value.firstRow[index]);
      const second = parseFloat(this.value.secondRow[index])
      if(first!==0)
      arr[index] = (((first - second)/second)*100).toFixed(2).toString()
      else arr[index]=0;
    }
    let dict = {
   table: {
        widths: [20, 25,  25, 25, 20, 20, 25, 20, 25, 15,15, 25, 20, 20, 20, 20, 20, 20, 10],
      alignment: 'center',
     body: [arr]
   },layout :{hLineColor:'gray',vLineColor:'gray'}
 }
 return dict;
}
  
  async totalWeightFooter(index) {
    let total ;
    if(index===1) total = parseFloat( this.value.firstTotal).toFixed(2).toString();
    else total = parseFloat(this.value.secondTotal).toFixed(2).toString();
    let dict = {
      'table': {
        widths: [475, 66],
        body: [
          [{
            text: 'Mass of Total Set Weight in Kgs.',
            bold: true,
            alignment: 'right'
          }, {
            text: total,
            bold: true,
            alignment: 'center',
            borderColor: ['#080808', '#080808', '#080808', '#080808'],
          }],

        ]
      },
      layout: {
        hLineColor: 'gray',
        vLineColor: 'gray'
      }
    }
    return dict;
  }
}
module.exports = Tables;