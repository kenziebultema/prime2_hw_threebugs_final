// ! ! !
// Three Bugs

var atticus = new People("Atticus", "2405", "47000", 3);
var jem = new People("Jem", "62347", "63500", 4);
var boo = new People("Boo", "11435", "54000", 3);
var scout = new People("Scout", "6243", "74750", 5);

var array = [atticus, jem, boo, scout];
var newArray = [];

//doc ready function
$(document).ready(function(){
    //loop through array
    for(var i = 0; i < array.length; i++){
        array[i] = calculateSTI(array[i]);
        // newArray.push(array[i]);
        console.log(newArray[i]);
        appendDom(newArray[i]);
    }

});

//object constructor
function People(name, id, salary, rating){
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;
  // newArray.push(this);
}
//new object constructor, post sti calc
function newPeople(name, bonusPerc, salaryMod, bonus){
    this.name = name;
    this.bonusPerc = bonusPerc;
    this.salaryMod = salaryMod;
    this.bonus = bonus;
    newArray.push(this);
}

function appendDom(newArray){
    // console.log(object);
    // for(var i = 0; i < newArray.length; i++){
    //     var person = newArray[i];
    var person = newArray;
    $('.container').append('<div class="person"></div>');
    var $el = $('.container').children().last();
    $el.append('<p>' + person.name + '</p>');
    $el.append('<p>' + person.bonusPerc + '</p>');
    $el.append('<p>' + person.salaryMod + '</p>');
    $el.append('<p>' + person.bonus + '</p>');
    //}
}

//code supplied to us
function calculateSTI(object){
    var personPostCalc = new newPeople;

  personPostCalc.name =  object.name ;

  var employeeNumber = object.id;
  var baseSalary = object.salary;
  var reviewScore = object.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);

  if(bonus > 0.13){
    bonus = 0.13;
  }

  personPostCalc.bonusPerc = "  " + bonus;

  personPostCalc.bonus = "  " + Math.round(baseSalary * (1.0 + bonus));

  personPostCalc.salaryMod = "  " + Math.round(baseSalary * bonus);

  // console.log(personPostCalc.name + " " + personPostCalc.bonusPerc + " " + personPostCalc.bonus + " " + personPostCalc.salaryMod);

  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
