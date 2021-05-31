var PdfPrinter = require('pdfmake/src/printer');
const path = require('path');
const ValuesTable = require('./values');
const config = require('config');
var fonts = {
  Roboto: {
    normal: path.resolve(__dirname,'../Roboto/Roboto-Regular.ttf'),
    bold: path.resolve(__dirname,'../Roboto/Roboto-Medium.ttf'),
    italics: path.resolve(__dirname,'../Roboto/Roboto-Italic.ttf'),
    bolditalics: path.resolve(__dirname,'../Roboto/Roboto-MediumItalic.ttf')
  }
};

var printer = new PdfPrinter(fonts);
var fs = require('fs');
const Tables = require('./tables');

class main {

  constructor() {
    this.pdf = {
      content: [],
      defaultStyle: {
        fontSize: 10,
      }
    };
  }

  async createPDF(inputs) {
    try {
      this.tables = new Tables();
      console.log('start');
      console.log(inputs.body);
      const values = inputs.body;
      const recipeCode = `${values.customer}.recipe_code.${values.recipeCode}`
      const productionQ = parseInt(values.productionQty);
      const recipe = config.get(recipeCode)
      this.pdf.content.push(await this.tables.addTitleHeader().then(console.log('added title header')));
      this.pdf.content.push(await this.tables.addMargin().then(console.log('added margin header')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.requirements(values).then(console.log('requirements')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.tableSubHeaders().then(console.log('added sub header')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.mainTable(recipe).then(console.log('added main table')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.addMassRecipe(productionQ, recipe));
      const recipeValues = config.get(`${values.customer}.recipe_code.${values.recipeCode}`);
      for (let index = 0; index < productionQ; index++) {
        await this.pdf.content[1].table.body[0][0].stack.push(await this.tables.productionTable(recipeValues));
      }
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightHeader('Set'));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightTable(1));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightFooter(1));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightHeader('Actual'));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightTable(2));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightFooter(2));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.diffInPercentageHeader())
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.diffInPercenntage())
      const parse = JSON.parse(JSON.stringify(this.pdf))
      var pdfDoc = printer.createPdfKitDocument(parse);
      pdfDoc.pipe(fs.createWriteStream('./download/images.pdf'));
      pdfDoc.end();
      //await this.resetValues(this.tables);
      return {status:'OK'};
    } catch (error) {
      console.log(error)
    }
  }
  async resetValues(tables){
    this.pdf = {
      content: [],
      defaultStyle: {
        fontSize: 10,
      }
    };
    
    this.values.firstTotal=0;
    this.values.secondTotal=0;
    this.values.firstRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.values.secondRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(this.values.firstTotal);
  }

}

module.exports = main;