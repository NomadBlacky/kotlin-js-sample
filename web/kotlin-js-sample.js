if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-sample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-sample'.");
}
this['kotlin-js-sample'] = function (_, Kotlin) {
  'use strict';
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  function main(args) {
    var tmp$;
    tmp$ = (new IntRange(1, 100)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element % 3 === 0 && element % 5 === 0)
        console.log('FizzBuzz');
      else if (element % 3 === 0)
        console.log('Fizz');
      else if (element % 5 === 0)
        console.log('Buzz');
      else
        console.log(element);
    }
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-js-sample', _);
  return _;
}(typeof this['kotlin-js-sample'] === 'undefined' ? {} : this['kotlin-js-sample'], kotlin);
