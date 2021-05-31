var PdfPrinter = require('pdfmake/src/printer');
const path = require('path');
const ValuesTable = require('./values');
const config = require('config');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const download = require('download-pdf')
var fonts = {
  Roboto: {
    normal: path.resolve('../Roboto/Roboto-Regular.ttf'),
    bold: path.resolve('../Roboto/Roboto-Medium.ttf'),
    italics: path.resolve('../Roboto/Roboto-Italic.ttf'),
    bolditalics: path.resolve('../Roboto/Roboto-MediumItalic.ttf')
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
    this.tables = new Tables();
   
  }

  async createPDF(inputs) {
    try {
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
      var pdf = "http://localhost:5000/download/images.pdf"

      download(pdf, {}, function (err) {
        if (err) throw err
        console.log("download successfull")
      })
      const filePath = `${__dirname}images.pdf`;
      await this.resetValues();
      return filePath;
    } catch (error) {
      console.log(error)
    }
  }
  async resetValues(){
    this.values = new ValuesTable();
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
  async compressToArchive(archivePath, ...filePaths) {
    try {
      for (let i = 0; i < filePaths.length; i += 1) {
        console.log(filePaths[i]);
        const cmd = `pushd ${path.dirname(filePaths[i])} && zip -urm ${archivePath} "./${path.basename(filePaths[i])}" && popd`;
        await exec(cmd, {
          shell: '/bin/bash'
        });
      }
    } catch (err) {
      console.log('Error compressing files', err); // eslint-disable-line no-console
      throw err;
    }
  }
}

module.exports = main;