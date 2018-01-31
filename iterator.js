let obj = {key: 'value', next: 'next'};

obj[Symbol.iterator] = function(){

  let objKeys = Object.keys(this);
  let count = 0;
  let isDone = false;
  
  let next = () => {
    if(count >= objKeys.length){
      isDone = true;
    }
    return {done: isDone, value: this[objKeys[count++]]};
  }
  return {next};
};

// for of
for(let val of obj){
  console.log(val);
}

// spread operator
let objValues = [...obj];
