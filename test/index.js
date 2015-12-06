/*eslint no-shadow: 0*/
/*eslint no-redeclare: 0*/
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0*/

import test from 'ava';

/**
 * [test anatomy]
 */
test('AVA: Simple test', t => {
  t.pass();
});

/**
 * [anonymous test]
 */

test(t => {
  t.pass();
});

/**
 * [t.plan() method]
 */

test('AVA: plan method', t => {
  /**
   * [Assertion plan]
   * @param  {number} 3 [number of assertions are made]
   * @description It fails the test if too many assertions are executed
   */
  t.plan(3); // plan to test 3 times
  t.is(1, 1);
  t.is(true, true);
  t.assert(true);
});

test('ES2015: let', t => {
  t.throws(()=> {
    const x = 1;
    if (x === 1) {
      let y = 2;
    }
    console.log(y);
  }, /y is not defined/);

  var a = 5;
  var b = 10;

  if (a === 5) {
    let a = 4; // The scope is inside the if-block
    var b = 1; // The scope is inside the function

    t.is(a, 4);  // 4
    t.is(b, 1);  // 1
  }

  t.is(a, 5); // 5
  t.is(b, 1); // 1
});

test('ES2015: promise', t => {
  return new Promise((resolve, reject) => {
    resolve('fullfiled');
  }).then((result)=>{
    t.is(result, 'fullfiled');
  });
});

test('ES2015: ...rest and ...spread', t => {
  const colors = ['blue', 'yellow'];
  let testColors = function (...colorArgs) {
    t.same(colorArgs, colors);
  };
  testColors(...colors);
});

test('ES2015: default parameters', t => {
  let defaultParameters = function (primaryColor = 'green', secondaryColor = 'red') {
    t.is(primaryColor, 'green');
    t.is(secondaryColor, 'red');
  };
  let defaultOptionsParams = function ({primaryColor, secondaryColor} = {}) {
    t.is(primaryColor, 'green');
    t.is(secondaryColor, undefined);
  };
  defaultParameters();
  defaultOptionsParams({primaryColor: 'green'});
});
