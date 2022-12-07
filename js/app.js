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

  let th = document.createElement('th');
  th.textContent = '';
  table.appendChild(th);


  for (let i = 0; i < hours.length; i++) {
    let header = document.createElement('th');
    header.textContent = hours[i];
    table.appendChild(header);
  }
  let totalHours = document.createElement('th');
  totalHours.textContent = 'Total Cookies';
  table.appendChild(totalHours);


  let row1 = document.createElement('tr');
  row1.textContent = this.name;
  table.appendChild(row1);


  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesbought[i];
    row1.appendChild(tdElem);

  }

  let total = document.createElement('th');
  total.textContent = this.total;
  row1.appendChild(total);


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

renderALL();


  // ***** Object literals ********

  // let seattle = {
  //   name: 'Seattle',
  //   minCust: 23,
  //   maxCust: 65,
  //   avgCookieBought: 6.3,
  //   cookiesbought:[],
  //   total:0,
  //   randomCustomerPH: function(){
  //     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  //   },
  //   cookiesPH: function(){
  //     for (let i = 0; i < hours.length; i++) {
  //       let cookiesNeeded = this.randomCustomerPH() * this.avgCookieBought;
  //       this.cookiesbought.push(cookiesNeeded);
  //       this.total = this.total + cookiesNeeded;
  //     }
  //   },

  //   render: function () {
  //     this.cookiesPH();
  //     // **** Doc manipulation ******
  //     let cityName = document.createElement('h3');
  //     cityName.textContent = this.name;
  //     salmonsection.appendChild(cityName);
  //     let articleElem = document.createElement('article');

  //     cityName.appendChild(articleElem);

  //     let ulElem = document.createElement('ul');
  //     articleElem.appendChild(ulElem);

  //     for (let i = 0; i < hours.length; i++) {
  //       let liElem = document.createElement('li');
  //       liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
  //       ulElem.appendChild(liElem);

  //     let ulElem = document.createElement('ul');
  // finish this ///
// }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
//   }
// };



// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesbought: [],
//   randomCustomerPH(min, max) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPH() {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
//       let cookies = Math.floor(randomCustomer * this.avgCookieBought);
//       this.cookiesbought.push(cookies);
//     }
//   },

//   render: function () {
//     this.cookiesPH();
//     // **** Doc manipulation ******
//     let cityName = document.createElement('h3');
//     cityName.textContent = this.name;
//     salmonsection.appendChild(cityName);
//     let articleElem = document.createElement('article');

//     cityName.appendChild(articleElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
//       ulElem.appendChild(liElem);
//     }

//     // let imgElem = document.createElement('img');
//     // imgElem.src = this.photo;
//     // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     // articleElem.appendChild(imgElem);
//   }
// };

// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesbought: [],
//   randomCustomerPH(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   cookiesPH() {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
//       let cookies = Math.floor(randomCustomer * this.avgCookieBought);
//       this.cookiesbought.push(cookies);
//     }
//   },

//   render: function () {
//     this.cookiesPH();
//     // **** Doc manipulation ******
//     let cityName = document.createElement('h3');
//     cityName.textContent = this.name;
//     salmonsection.appendChild(cityName);
//     let articleElem = document.createElement('article');

//     cityName.appendChild(articleElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
//       ulElem.appendChild(liElem);
//     }

//     // let imgElem = document.createElement('img');
//     // imgElem.src = this.photo;
//     // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     // articleElem.appendChild(imgElem);
//   }
// };

// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesbought: [],
//   randomCustomerPH(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   cookiesPH() {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
//       let cookies = Math.floor(randomCustomer * this.avgCookieBought);
//       this.cookiesbought.push(cookies);
//     }
//   },

//   render: function () {
//     this.cookiesPH();
//     // **** Doc manipulation ******
//     let cityName = document.createElement('h3');
//     cityName.textContent = this.name;
//     salmonsection.appendChild(cityName);
//     let articleElem = document.createElement('article');

//     cityName.appendChild(articleElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
//       ulElem.appendChild(liElem);
//     }

//     // let imgElem = document.createElement('img');
//     // imgElem.src = this.photo;
//     // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     // articleElem.appendChild(imgElem);
//   }
// };

// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesbought: [],
//   randomCustomerPH(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   cookiesPH() {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
//       let cookies = Math.floor(randomCustomer * this.avgCookieBought);
//       this.cookiesbought.push(cookies);
//     }
//   },

//   render: function () {
//     this.cookiesPH();
//     // **** Doc manipulation ******
//     let cityName = document.createElement('h3');
//     cityName.textContent = this.name;
//     salmonsection.appendChild(cityName);
//     let articleElem = document.createElement('article');

//     cityName.appendChild(articleElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
//       ulElem.appendChild(liElem);
//     }

//     // let imgElem = document.createElement('img');
//     // imgElem.src = this.photo;
//     // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     // articleElem.appendChild(imgElem);
//   }
// };





// seattle.render();
// console.log(seattle);
// Tokyo.render();
// console.log(Tokyo);
// Dubai.render();
// console.log(Dubai);
// Paris.render();
// console.log(Paris);
// Lima.render();
// console.log(Lima);

