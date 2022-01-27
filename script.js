// * This function which checks whether 2 objects have
// * exactly same keys and values
export function checkEqualObjects(object1, object2) {
  // Get all keys of objects as an iterable object
    const keysObject1 = Object.keys(object1);
    const keysObject2 = Object.keys(object2);
    // Check if the length of the keys are equal
    if (keysObject1.length !== keysObject2.length) {
      return false;
    }
    // Check if the keys are equal for each key in the object
    for (const key of keysObject1) {
      // Get the value of the keys from both objects
      const value_1 = object1[key];
      const value_2 = object2[key];
      // Check if the values are objects if so recursively call the function
      const ifObjects = checkForObject(value_1) && checkForObject(value_2);
      //if the values are not equal return false or if the values are objects, recursively call the function 
      if (!ifObjects && value_1 !== value_2 || ifObjects && !checkEqualObjects(value_1, value_2)) {
        return false;
      }
    }
    // if all the values are equal return true
    return true;
  }
  // * check if the value is an object
  function checkForObject(object) {
    return typeof object === 'object' && object != null;
  }
