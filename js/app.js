'use strict';

console.log('hello world');

/// * Dom Windows *******

let table = document.getElementById('table');

let form = document.getElementById('Form');

/// *********** Helper Functions / Utilities ******

form.addEventListener('submit', handlesubmit);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookiesArray = [];

// *** constructor function *****

function handlesubmit(event) {
  event.preventDefault();
  console.log('form submitted');
  let storelocation = event.target.StoreLocation.value;
  let minicust = event.target.MinimumCustomer.value;
  let maxcust = event.target.MaximumCustomer.value;
  let avgCookieBought = event.target.AverageCookiesBought.value;

  let newstore = new Cookies(storelocation, minicust, maxcust, avgCookieBought);
  cookiesArray.push(newstore);

  newstore.cookiesales();
  newstore.render();

}

function Cookies(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesbought = [];
  this.total = 0;
}
// **** prototype methods ****

Cookies.prototype.customerPH = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Cookies.prototype.cookiesales = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = Math.floor(this.customerPH() * this.avgCookieBought);
    console.log(cookiesNeeded);
    this.cookiesbought.push(cookiesNeeded);
    this.total = Math.floor(this.total + cookiesNeeded);
  }
};

Cookies.prototype.render = function () {
  console.log('inside render');
  this.cookiesales();
  //**** Doc manipulation ******

  let trElem = document.createElement('tr');
  table.appendChild(trElem);

  let nameElem = document.createElement('td');
  nameElem.textContent = this.name;
  trElem.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesbought[i];
    trElem.appendChild(tdElem);
  }

  let totalHours = document.createElement('td');
  totalHours.textContent = this.total;
  trElem.appendChild(totalHours);

  //table.appendChild(trElem);
};

function header() {

  let theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let trElem = document.createElement('tr');
  theadElem.appendChild(trElem);

  let nameElem = document.createElement('th');
  nameElem.textContent = 'Stores';
  theadElem.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let hourElem = document.createElement('th');
    hourElem.textContent = hours[i];
    theadElem.appendChild(hourElem);
  }

  let totalHours = document.createElement('th');
  totalHours.textContent = 'Total';
  theadElem.appendChild(totalHours);
}

function footer() {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let totalHours = 0;
    for (let j = 0; j < cookiesArray.length; j++) {
      totalHours = totalHours + cookiesArray[j].cookiesbought[i];
    }
    let td = document.createElement('td');
    td.textContent = totalHours;
    tr.appendChild(td);
  }
  table.appendChild(tr);

}





// ******* Executable Code ************

let seattle = new Cookies('Seattle', 23, 65, 6.3);
let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let Dubai = new Cookies('Dubai', 11, 38, 3.7);
let Paris = new Cookies('Paris', 20, 38, 2.3);
let Lima = new Cookies('Lima', 2, 16, 4.6);

cookiesArray.push(seattle, Tokyo, Dubai, Paris, Lima);

function renderALL() {
  for (let i = 0; i < cookiesArray.length; i++)
    cookiesArray[i].render();
}



header();
renderALL();
footer();

