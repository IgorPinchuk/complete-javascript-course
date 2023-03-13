'use strict';
/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;    
}
const belarus = describeCountry('Belarus', 10, 'Minsk');
const germany = describeCountry('Germany', 83, 'Berlin');
const china = describeCountry('China', 1412, 'Beijing');
console.log(belarus);
console.log(germany);
console.log(china);

/* LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */
function percentageOfWorld1(population){
    return population / 7900 * 100;
}
const percentageOfWorld2 = function(population){
    return population / 7900 * 100;
}
console.log(percentageOfWorld1(10), percentageOfWorld1(83), percentageOfWorld1(1412));
console.log(percentageOfWorld2(10), percentageOfWorld2(83), percentageOfWorld2(1412));

/* LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */
const percentageOfWorld3 = population => population / 7900 * 100;
console.log(percentageOfWorld3(10), percentageOfWorld3(83), percentageOfWorld3(1412));

/* LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */
function describePopulation(country, population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}
console.log(describePopulation(`Belarus`, 10));

/* LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values */
const populations = [10, 83, 1412, 1];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

/* LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */
const neighbours = [`Poland`, `Lithuania`, `Latvia`, `Russia`, `Ukraine`];
neighbours.push(`Utopia`);
neighbours.pop();
if(!neighbours.includes(`Germany`)){
    console.log(`Probably not a central European country :D`);
}
neighbours[neighbours.indexOf(`Russia`)] = `Russian Federation`;
console.log(neighbours);

/* LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments) */
const myCountry = {
    country: `Belarus`,
    capital: `Minsk`,
    language: `Belarusian`,
    population: 10,
    neighbours: [`Poland`, `Lithuania`, `Latvia`, `Russia`, `Ukraine`]
};

/* LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation. */
myCountry.population += 2;
myCountry['population'] -= 2;
//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

/* LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */
myCountry.describe = function(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length}`);
};
myCountry.describe();

myCountry.checkIsland = function(){
    this.isIsland = this.neighbours && this.neighbours.length > 0 ? false : true;
    return this.isIsland;
};
