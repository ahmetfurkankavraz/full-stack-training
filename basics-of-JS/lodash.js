/*
Here some of the lodash.js methods that I implemented as a Codecademy project.
*/

let _ = {
	
  // https://lodash.com/docs/4.17.15#clamp
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },


  //https://lodash.com/docs/4.17.15#inRange
  inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    }
    if (start > end){
      let temp = start;
      start = end;
      end = temp;
    }
    return start <= number && number < end;
  },
  

  //https://lodash.com/docs/4.17.15#words
  words(str){
    return str.split(' ')
  },


  //https://lodash.com/docs/4.17.15#pad
  pad(str, len){
    if (str.length >= len){
      return str;
    }
    let startPaddingLength = Math.floor((len - str.length) / 2)
    let endPaddingLength = len - str.length - startPaddingLength
    let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength)
    return paddedString
  },


  //https://lodash.com/docs/4.17.15#has
  has(object, key){
    return object[key] !== undefined
  },


  //https://lodash.com/docs/4.17.15#invert
  invert(object){
    let invertedObject = {}
    for (let x in object){
      let originalValue = object[x]
      invertedObject[originalValue] = x
    } 
    return invertedObject
  },


  //https://lodash.com/docs/4.17.15#findKey
  findKey(object, predicate){
    for (let x in object){
      let predicateReturnValue = predicate(object[x])
      if (predicateReturnValue === true)
        return x
    } 
    return undefined
  },


  //https://lodash.com/docs/4.17.15#drop
  drop(array, n){
    if (n === undefined)
      n = 1
    return array.slice(n)
  },  


  //https://lodash.com/docs/4.17.15#dropWhile
  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, array)
    }
    let dropNumber = array.findIndex(cb)
    let droppedArray = this.drop(array, dropNumber)
    return droppedArray
  },


  //https://lodash.com/docs/4.17.15#chunk
  chunk(array, size){
    if (size===undefined)
      size = 1
    let iter = Math.floor(array.length / size)

    let arrayChunks  = []

    let i = 0
    for (i = 0 ; i < iter; i++)
    {
      arrayChunks.push(array.slice(i*size, (i+1)*size))
    }
    if (array.length % size !== 0)
      arrayChunks.push(array.slice(i*size))
    return arrayChunks 
  }
}

