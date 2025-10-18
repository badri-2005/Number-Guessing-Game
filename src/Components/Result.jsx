

import React from 'react'

const Result = ({ number, term }) => {
  let result = "";

  if (term) {
    const guess = Number(term); // convert to number

    if (isNaN(guess)) {
      result = "Invalid Input";
    } else if (guess === number) {
      result = "Guessed Right!";
    } else if (guess > number) {
      result = "Too High!";
    } else if (guess < number) {
      result = "Too Low!";
    }
  }

  return (
    <div className="mt-4 text-xl font-semibold transition duration-300 text-gray-800">
      {result}
    </div>
  );
};

export default Result;
