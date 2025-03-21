// run NPM install
// run npx vitest test
// node main.js to run your code without the tests

TASK
Create a 'Codewars' style Kata with a series of tests.

MY KATA SCENARIO
Dinner with Anna-Marie

Welcome, food lover! You are joining Anna-Marie later today, alongside some of your fellow Bootcampers, at a Pie restaurant.
You will need to order ahead, because there are so many of you. But you aren't sure how many will turn up - it will be at least 10 Bootcampers, but not more than 50.
The extra trendy restauraunt never knows exactly how big their pies will be until they come out of the oven.
Sometimes, they make small pies, which will be sliced just once. Other times, the bigger pies will be sliced 5 times.
You know that one slice will be enough for one hungry BootCamper and you can only order whole pies.

At the last minute, you receive a call from Chris, asking if he, Faisal and Nadeem can come too. But you already ordered the pies!
Work out if there are enough slices left over for them to come too.
Anna-Marie gets a whole pie to herself, because she is a legend - so no need to worry about her!

EXAMPLE:
There are 50 Bootcampers and the large pies are cut into 6 slices.
So you would need 9 whole pies to feed everybody, and there are 4 slices left over, so Chris, Faisal and Nadeem can eat too!

Rules:
You need to know if you have too few or too many bootcampers turned up, so your formula should throw an error if there are less than 10, or more than 50 Bootcampers.
The pies will each be sliced into 2,3,4,5, or 6 pieces. So throw an error if the pie chef messed up the slicing.
Your should have two values returned in an array: The number of pies, as an integer. And a boolean value, for whether Chris, Faisal and Nadeem can join too.
The return has been provided for you, easy as Pie!

\_\_
HOW I DEVELOPED MY KATA
Alongside my two team members, we came up with a loose theme for our individual Kata, 'Bootcamper's Day Out'.

Test Driven Approach
The full set of tests were written and functioning before an example solution was created.

The example solution was run to check the tests were functioning correctly.

![Test Cases table](/images/Test%20Cases.JPG)

Note on error handling - currently, error tests pass even with no error handling in function, just a return - must be default behaviour but need to look further into this.

"Feedback for Ollie!
Absolutely loved it, the tests are set up in such a way that it’s reaaaally easy to see where my function was failing, and which parts of the kata I need to create functionality for. The use of the interpolation into the titles of the test.each tests made it really easy to follow, and kept the tests super neat and concise.
I saw that you’ve got some more tests commented out for inputting strings and decimals, would be cool to force the function to be even more specific, and I guess you could then add multiple different error messages for different errors (one for too many bootcampers, one for a decimal number of bootcampers, etc.)
The way that you describe the kata is super useful too, I’m not very smart so usually have to read things a LOT for me to get a mental picture of what it’s asking for! But your kata makes sense straight away, and although there’s a few different things that the function has to handle, it’s really easy to follow along because the tests are so cleanly written. Well done, absolutely loved it and I’m absolutely going to eat 6 (not 7) slices of pie for lunch."

- Luke Davies
