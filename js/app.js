console.log('hello world');

/// * Dom Windows *******

// let salmonsection = document.getElementById('Salmon-Cookies');

let table = document.getElementById('table');

/// *********** Helper Functions / Utilities ******

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookiesArray = [];

// *** constructor function *****

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
};

function header() {
  let trElem = document.createElement('tr');
  table.appendChild(trElem);


  let nameElem = document.createElement('th');
  nameElem.textContent = 'Stores';
  trElem.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let hourElem = document.createElement('th');
    hourElem.textContent = hours[i];
    trElem.appendChild(hourElem);
  }

  let totalHours = document.createElement('th');
  totalHours.textContent = 'Total';
  trElem.appendChild(totalHours);
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

