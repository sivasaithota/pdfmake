var PdfPrinter = require('pdfmake/src/printer');
const path = require('path');
const config = require('config');
var fonts = {
	Roboto: {
		normal:  path.resolve('../Roboto/Roboto-Regular.ttf'),
		bold: path.resolve('../Roboto/Roboto-Medium.ttf'),
		italics: path.resolve('../Roboto/Roboto-Italic.ttf'),
		bolditalics: path.resolve('../Roboto/Roboto-MediumItalic.ttf')
	}
};

var printer = new PdfPrinter(fonts);
var fs = require('fs');
const Tables = require('./tables');
const constants = require('../constants');
class main{
  
  constructor(){
    this.pdf ={content:[],defaultStyle: {
      fontSize: 10,}};
     this.tables =  new Tables();
  }

   async createPDF(inputs){
     try {
       
      this.pdf.content.push(await this.tables.addTitleHeader().then(console.log('added title header')));
      this.pdf.content.push (await this.tables.addMargin().then(console.log('added margin header')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.requirements().then(console.log('requirements')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.tableSubHeaders().then(console.log('added sub header')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.mainTable(constants.mainTableComponents).then(console.log('added main table')));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.addMassRecipe());
      const values = config.get('ECPL_THARAMANI.recipe_code.M35_Pile');
    
      for(let index =0;index<6; index++){
        await this.pdf.content[1].table.body[0][0].stack.push(await this.tables.productionTable(values));
      }
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightHeader('Set'));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightTable(1));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightFooter(1));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightHeader('Actual'));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightTable(2));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.totalWeightFooter(2));
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.diffInPercentageHeader())
      this.pdf.content[1].table.body[0][0].stack.push(await this.tables.diffInPercenntage())
      var pdfDoc = printer.createPdfKitDocument(this.pdf);
      pdfDoc.pipe(fs.createWriteStream('./images.pdf'));
      pdfDoc.end();
     } catch (error) {
       console.log(error)
     }
    

  }
}
/* const total = new main()
Promise.resolve( total.createPDF().then(data => {
  console.log(data,  'end');
})); */
module.exports = main;

