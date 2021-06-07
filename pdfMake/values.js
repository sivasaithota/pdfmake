class Values {

  constructor(){
    this.firstTotal= 0.0;
    this.secondTotal= 0.0;
    this.firstRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0.00,0.00,0.00,0.00,0];
    this.secondRow = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0.00,0.00,0.00,0.00,0];
  }
  async getMassRecipeTotal( values){
    let total =0.0;
    for(let index=0; index<values.length; index++){
        total += parseFloat(values[index]);
    }
   
    return total;
  }

  async randomValues(values, row){
    let randomValues = [];
    for(let index=0; index<values.length;index++){
      if(row!==1){
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
        randomValues[index] = this.between(parseFloat(value)- 0.02, parseFloat(value)+ 0.02,true);
        await this.sumTotal(row,randomValues[index],index);
      }else{
        randomValues[index] = values[index];
        this.sumTotal(row,randomValues[index],index);
      } 
    }else {
      if(values[index].toString().includes('.'))
      randomValues[index] = parseFloat(values[index]);
      else randomValues[index] = parseInt(values[index]);
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
    if(index===1){
      const total = parseFloat(value);
      if(arrIndex>=13 && arrIndex<18){
        this.firstRow[arrIndex] += total;
        this.firstRow[arrIndex]= parseFloat(this.firstRow[arrIndex].toFixed(2));
     }
     else
      this.firstRow[arrIndex] += total;
      
    }
    else {
      const total = parseFloat(value);
      if(arrIndex>=13 && arrIndex<18){
         this.secondRow[arrIndex] += total;
         this.secondRow[arrIndex]= parseFloat(this.secondRow[arrIndex].toFixed(2));
      }
      else 
        this.secondRow[arrIndex] += total;
    }
   
  }

  async addTime(starttime, productionRate){
    return parseFloat(this.between(1.26,1.29))*productionRate;
  }
  between(min, max,val) {  
    if(val)return parseFloat(Math.random() * (max - min) + min).toFixed(2);
    else return Math.floor(Math.random() * (max - min) + min)
    }
}
module.exports = Values;