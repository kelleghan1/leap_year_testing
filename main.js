module.exports = {
  leapYear:function(thisYear){
    if(((thisYear % 4 == 0)&&(thisYear % 100 !== 0))||(thisYear % 400 == 0)){
      return true;
    }else{
      return false;
    }
  }
}
