# _{Application Name}_

#### _{Brief description of application}_

#### By _**Karlson Drendel and Shannon Lee {List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

Ticket.prototype.matineePrice = function() {
  if (this.movieTime <= 1500) {
  return this.basePrice*.75;
  }
}## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Tests

Describe: matineePrice();
Test: "It changes the price of a movie ticket to 75% of the original"
Expect(matineePrice()).toEqual(13.5);

Describe: oldMovie();
Test: "It changes the price of a movie ticket to 75% of the current price if it is not a new release"
Expect(oldMovie()).toEqual(13.5);

Describe: seniorPrice();
Test: "It cuts the price of a movie ticket by 50% if the user is 65 or older"
Expect(seniorPrice(66)).toEqual(9)


<!-- Describe: getPrice();

Test: "It returns a base price of $18"
Expect(getPrice()).toEqual(18);

Test: "It returns the 75% of the base price if the time of the movie is earlier than 3 pm"
Expect(getPrice()).toEqual(13.5);

Test: "If it's a new movie, then add $2 to the current price."
Expect(getPrice(30)).toEqual(15.5);

Test: "If the user is at least 65 years old, add a 50% discount to the current price." -->


<!-- Describe: getPrice();

Test: "It returns a base price of $18"
Expect(getPrice()).toEqual(18);

Test: "It returns the 75% of the base price if the time of the movie is earlier than 3 pm"
Expect(getPrice()).toEqual(13.5);

Test: "If it's a new movie, then add $2 to the current price."
Expect(getPrice(30)).toEqual(15.5);

Test: "If the user is at least 65 years old, add a 50% discount to the current price." -->


<!-- Describe: getPrice();

Test: "It returns a base price of $18"
Expect(getPrice()).toEqual(18);

Test: "It returns the 75% of the base price if the time of the movie is earlier than 3 pm"
Expect(getPrice()).toEqual(13.5);

Test: "If it's a new movie, then add $2 to the current price."
Expect(getPrice(30)).toEqual(15.5);

Test: "If the user is at least 65 years old, add a 50% discount to the current price." -->


<!-- Describe: getPrice();

Test: "It returns a base price of $18"
Expect(getPrice()).toEqual(18);

Test: "It returns the 75% of the base price if the time of the movie is earlier than 3 pm"
Expect(getPrice()).toEqual(13.5);

Test: "If it's a new movie, then add $2 to the current price."
Expect(getPrice(30)).toEqual(15.5);

Test: "If the user is at least 65 years old, add a 50% discount to the current price." -->


<!-- Describe: getPrice();

Test: "It returns a base price of $18"
Expect(getPrice()).toEqual(18);

Test: "It returns the 75% of the base price if the time of the movie is earlier than 3 pm"
Expect(getPrice()).toEqual(13.5);

Test: "If it's a new movie, then add $2 to the current price."
Expect(getPrice(30)).toEqual(15.5);

Test: "If the user is at least 65 years old, add a 50% discount to the current price." -->


## License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Contact Information
_Karlson Drendel <kdrendel99@gmail.com>_
_Co-authored-by: Shannon Lee <shannonleehj@gmail.com>_