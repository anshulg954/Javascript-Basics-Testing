import { checkEqualObjects } from './script.js';
const testCases = {
    testCase1: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome',
        age: 32,
      },
      expected: true
    },

    testCase2: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2:  {
        last_name: 'Awesome',
        age: 32,
      },
      expected: false
    },

    testCase3: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome_name',
        age: 32,
      },
      expected: false
    },

    testCase4: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        salary: 1100
      },
      expected: false
    },

    testCase5: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      expected: true
    },

    testCase6: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        },
        job: 'Software Engineer'
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      expected: false
    },

    testCase7: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
        
      },
      obj2:  {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        },
        job: 'Data Scientist'
      },
      expected: false
    },

    testCase8: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 9000
        },
      },
      expected: false
    }
  }
const test = (testCase) => {
  const { obj1, obj2, expected } = testCase
  const result = checkEqualObjects(obj1, obj2)
  if (result === expected) {
    console.log('PASS')
  } else {
    console.log('FAIL')
  }
}
test(testCases.testCase1)
test(testCases.testCase2)
test(testCases.testCase3)
test(testCases.testCase4)
test(testCases.testCase5)
test(testCases.testCase6)
test(testCases.testCase7)
test(testCases.testCase8)