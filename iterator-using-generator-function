let obj = {key: 'value', next: 'next'};

obj[Symbol.iterator] = function *(){

  let objKeys = Object.keys(this);
  for(let key of objKeys){
    yield this[key];
  }
};

// for of
for(let val of obj){
  console.log(val);
}

// spread operator
let objValues = [...obj];
