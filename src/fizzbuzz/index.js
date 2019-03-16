const fizzbuzz = () => {
  const evaluate = (number) => {
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
  };

  const generate = (min, max) => {
    let result = '';

    let index = min;

    while (index <= max) {
      result += evaluate(index);
      index += 1;
    }

    return result;
  };

  return {
    generate,
  };
};


export default fizzbuzz;
