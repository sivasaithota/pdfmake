const constants = require('../constants')
class Values {

  constructor(){
    this.firstTotal= 0.0;
    this.secondTotal= 0.0;
    this.firstRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.secondRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  }
  async getMassRecipeTotal(){
    let total =0.0;
    for(let index=0; index<constants.mainTableComponents.length; index++){
        total += parseFloat(constants.mainTableComponents[index]);
    }
   
    return total;
  }

  async randomValues(values, row){
    let randomValues = [];
    for(let index=0; index<values.length;index++){
      let value =0
      let indexValue = parseInt(values[index]);
      if(indexValue !==0 && index<4){
        value=parseInt(values[index]);
        randomValues[index] = (this.between(value-6, value+6)).toString();
        await this.sumTotal(row,randomValues[index],index);
      }else if(indexValue !==0 && (index>=4 && index<13)){
        value=parseInt(values[index]);
        randomValues[index] = (this.between(value-2, value+2)).toString();
        await this.sumTotal(row,randomValues[index],index);
      }else if(indexValue !==0){
        value=parseFloat(values[index]); 
        randomValues[index] = (this.between(parseFloat(value)- 0.02, parseFloat(value)+ 0.02,true).toFixed(2)).toString();
        await this.sumTotal(row,randomValues[index],index);
      }else{
        randomValues[index] = value.toString();
        this.sumTotal(row,randomValues[index],index);
      } 
      await this.addTotal(row,randomValues[index]);
    }
    return randomValues;
  }

  async addTotal(index,value){
    if(index===1)this.firstTotal +=parseFloat(value);
    else  this.secondTotal +=parseFloat(value);   
  }

  async sumTotal(index,value,arrIndex){
    if(index===1)this.firstRow[arrIndex] +=parseFloat(value);
    else this.secondRow[arrIndex] +=parseFloat(value);
  }

  between(min, max,val) {  
    if(val) return  Math.floor((Math.random() * (max - min) + min).toFixed(2));
    else return Math.floor(Math.random() * (max - min) + min)
  }
}
module.exports = Values;