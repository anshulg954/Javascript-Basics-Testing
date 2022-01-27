// * This function which checks whether 2 objects have
// * exactly same keys and values
export function checkEqualObjects(object1, object2) {
  // Get all keys of objects as an iterable object
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    // Check if the length of the keys are equal
    if (keys1.length !== keys2.length) {
      return false;
    }
    // Check if the keys are equal
    for (const key of keys1) {
      // Get the value of the keys from both objects
      const val1 = object1[key];
      const val2 = object2[key];
      // Check if the values are objects if so recursively call the function
      const ifObjects = checkForObject(val1) && checkForObject(val2);
      // if both are objects, recursively call the function else if the values are not equal return false
      if (ifObjects && !checkEqualObjects(val1, val2) || !ifObjects && val1 !== val2){
        return false;
      }
    }
    // if all the values are equal return true
    return true;
  }
  // * check if the value is an object
  function checkForObject(object) {
    return object != null && typeof object === 'object';
  }
