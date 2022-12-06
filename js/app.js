/// * Dom Windows *******
let salmonsection = document.getElementById('Salmon-Cookies');


/// *********** Helper Functions / Utilities ******

// function randomCustomerPH(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// ***** Object literals ********

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesbought: [],
  randomCustomerPH(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPH() {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
      let cookies = Math.floor(randomCustomer * this.avgCookieBought);
      this.cookiesbought.push(cookies);
    }
  },

  render: function () {
    this.cookiesPH();
    // **** Doc manipulation ******
    let cityName = document.createElement('h3');
    cityName.textContent = this.name;
    salmonsection.appendChild(cityName);
    let articleElem = document.createElement('article');

    cityName.appendChild(articleElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
  }
};



let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesbought: [],
  randomCustomerPH(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPH() {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
      let cookies = Math.floor(randomCustomer * this.avgCookieBought);
      this.cookiesbought.push(cookies);
    }
  },

  render: function () {
    this.cookiesPH();
    // **** Doc manipulation ******
    let cityName = document.createElement('h3');
    cityName.textContent = this.name;
    salmonsection.appendChild(cityName);
    let articleElem = document.createElement('article');

    cityName.appendChild(articleElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
  }
};

let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesbought: [],
  randomCustomerPH(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPH() {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
      let cookies = Math.floor(randomCustomer * this.avgCookieBought);
      this.cookiesbought.push(cookies);
    }
  },

  render: function () {
    this.cookiesPH();
    // **** Doc manipulation ******
    let cityName = document.createElement('h3');
    cityName.textContent = this.name;
    salmonsection.appendChild(cityName);
    let articleElem = document.createElement('article');

    cityName.appendChild(articleElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
  }
};

let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesbought: [],
  randomCustomerPH(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPH() {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
      let cookies = Math.floor(randomCustomer * this.avgCookieBought);
      this.cookiesbought.push(cookies);
    }
  },

  render: function () {
    this.cookiesPH();
    // **** Doc manipulation ******
    let cityName = document.createElement('h3');
    cityName.textContent = this.name;
    salmonsection.appendChild(cityName);
    let articleElem = document.createElement('article');

    cityName.appendChild(articleElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
  }
};

let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesbought: [],
  randomCustomerPH(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPH() {
    for (let i = 0; i < hours.length; i++) {
      let randomCustomer = this.randomCustomerPH(this.minCust, this.maxCust);
      let cookies = Math.floor(randomCustomer * this.avgCookieBought);
      this.cookiesbought.push(cookies);
    }
  },

  render: function () {
    this.cookiesPH();
    // **** Doc manipulation ******
    let cityName = document.createElement('h3');
    cityName.textContent = this.name;
    salmonsection.appendChild(cityName);
    let articleElem = document.createElement('article');

    cityName.appendChild(articleElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesbought[i] + ' cookies ';
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    // articleElem.appendChild(imgElem);
  }
};

// ******* Executable Code ************

//Seattle.render();


// cookiesArray = [Paris.cookiesbought, Lima.cookiesbought, Dubai.cookiesbought, Tokyo.cookiesbought, Seattle.cookiesbought]



seattle.render();
console.log(seattle);
Tokyo.render();
console.log(Tokyo);
Dubai.render();
console.log(Dubai);
Paris.render();
console.log(Paris);
Lima.render();
console.log(Lima);

