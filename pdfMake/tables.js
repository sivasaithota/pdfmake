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
        widths: [50, 100, 100, 100, 100],
        headerRows: 2,
        body: [
          [{
            image: path.resolve('/Users/sivasaithota/Downloads/pdfmake/Picture 1.png'),
            width: 50,
            height: 40,
            rowSpan: 2,
            border: [false, false, false, false]
          }, {
            text: 'M/S PREMIX CONCRETE SOLUTIONS',
            style: 'tableHeader',
            colSpan: 4,
            alignment: 'center',
            bold: true,
            border: [true, true, true, true],
            fontSize: 16,
          }, {}, {}, {}],
          [{}, {
            text: 'Report Title',
            bold: true,
            border: [false, false, false, false]
          }, {
            text: 'Batch Sheet',
            bold: true,
            alignment: 'left',
            border: [false, false, false, false]
          }, {
            text: 'Plant Sl.No',
            bold: true,
            alignment: 'right',
            border: [false, false, false, false]
          }, {
            text: '420',
            bold: true,
            alignment: 'left',
            border: [false, false, false, false]
          }]
        ]
      },
    }
    return dict;
  }

  async requirements() {
    let dict = {
      table: {
        heights: 10,
        widths: [90, 90, 100, 80, 90, '*'],
        //widths: ['16.6%', '16.6%', '16.6%', '16.6%', '16.6%', '16.6%'],

        bold: true,
        body: [
          [{
            text: 'Batch Date',
            bold: true
          }, {
            text: ": 29/03/2020",
            colSpan: 1
          }, {
            text: 'Batch Start Time',
            bold: true
          }, {
            text: ": 09.09.23",
            colSpan: 1
          }, {
            text: 'Batch End Time',
            bold: true
          }, {
            text: ":09:09:23",
            colSpan: 1
          }],
          [{
            text: 'Batch Number',
            bold: true
          }, {
            text: ": 721.0",
            colSpan: 1
          }, {
            text: 'Recipe Code',
            bold: true
          }, {
            text: ": M35 PILE",
            colSpan: 1
          }, {
            text: 'Ordered Qty',
            bold: true
          }, {
            text: ": 6.00",
            colSpan: 1
          }],
          [{
            text: 'Batcher Name',
            bold: true
          }, {
            text: ": PremixT",
            colSpan: 1
          }, {
            text: 'Recipe Name',
            bold: true
          }, {
            text: ": M35 PILE",
            colSpan: 1
          }, {
            text: 'Production Qty',
            bold: true
          }, {
            text: ": 4.00",
            colSpan: 1
          }],
          [{
            text: 'Order Name',
            bold: true
          }, {
            text: ": M35 PILE",
            colSpan: 1
          }, {
            text: 'Truck Numbere',
            bold: true
          }, {
            text: ": TN12 R 8636",
            colSpan: 1
          }, {
            text: 'Adj/Manual Qty',
            bold: true
          }, {
            text: ": 0.00",
            colSpan: 1
          }],
          [{
            text: 'Customer Name',
            bold: true
          }, {
            text: ": ECPL Taramani",
            colSpan: 1
          }, {
            text: 'Truck Driver',
            bold: true
          }, {
            text: ": 090923",
            colSpan: 1
          }, {
            text: 'With This Load',
            bold: true
          }, {
            text: ": 6.00",
            colSpan: 1
          }],
          [{
            text: 'Site',
            bold: true
          }, {
            text: ": PILE-B199",
            colSpan: 1
          }, {
            text: 'Batch Size',
            bold: true
          }, {
            text: ": 1.00",
            colSpan: 1
          }, {
            text: 'Mixer Capacity',
            bold: true
          }, {
            text: ":1.00",
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
        widths: [120, 140, 100, 80, 80, ],
        body: [
          [{
              text: 'Aggregate',
              bold: true,
              alignment: 'center'
            },
            {
              text: 'Cement',
              bold: true,
              alignment: 'center'
            },
            {
              text: 'Water/Ice',
              bold: true,
              alignment: 'center'
            },
            {
              text: 'Admixture',
              bold: true,
              alignment: 'right'
            },
            {
              text: 'Silica',
              bold: true,
              alignment: 'center'
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
      'table': {
        widths: [20, 20, 30, 30, 20, 20, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25],
        body: [
          ['MS', 'MS', '20MM', '12MM', 'Ag5', 'Ag6', 'C1', 'C2', 'C3', 'C4', 'W1', 'W2', 'W3', 'Ad1', 'Ad2', 'Ad3', 'Ad4', 'Silica'],
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

  async addMassRecipe() {
    const total = await this.value.getMassRecipeTotal();
    const dict = {
      'table': {
        widths: [460, 64],
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
        table: {
          widths: [20, 20, 30, 30, 20, 20, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25],
          body: [
            await this.value.randomValues(values,1),
            await this.value.randomValues(values,2),
            ['0.00', '0.00', '0.00','0.00','0.00','0.00','0','0','0','0','0','0','','0.00','0.00','0.00','0.00','0'],
            ['0.00', '0.00', '0.00','0.00','0.00','0.00','','','','','','','','','','','',''],
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

  async targetValue() {
    const dict = {
      text: 'Target and Actual Value with moisture correction/absorption in % and other Corrections in Kgs..',
      bold: true
    }
    return dict;
  }

 async totalWeightHeader(name) {
    let dict = {
      text: `Total ${name} Weight in Kgs..`,
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
        widths: [20, 25,  25, 25, 20, 20, 25, 20, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20],
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
      console.log(first - second,(first - second)/second)
      if(first!==0)
      arr[index] = (((first - second)/second)*100).toFixed(2).toString()
      else arr[index]=0;
    }
    let dict = {
   table: {
        widths: [20, 25,  25, 25, 20, 20, 25, 20, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      alignment: 'center',
     body: [arr]
   },layout :{hLineColor:'gray',vLineColor:'gray'}
 }
 return dict;
}
  
  async totalWeightFooter(index) {
    let total ;
    if(index===1) total = this.value.firstTotal;
    else total = this.value.secondTotal;
    let dict = {
      'table': {
        widths: [460, 66],
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