# frostyloot

A loot deck simulator for [Frosthaven](http://www.cephalofair.com/frosthaven) by [Cephalofair Games](http://www.cephalofair.com/) - Developer: **Isaac Childres**.

Loot deck card images are from [any2cards/Frosthaven](https://github.com/any2cards/frosthaven).

# Purpose

Compiling the loot deck in Frosthaven is tedious. One has to select the correct number of _random_ cards of each type from the Frosthaven loot deck, shuffle them together, and then sort that loot deck again after everyone has drawn the correct number. Wouldn't it be easier if you could just tell an app how many cards of each type are to be included, and have the app to all the drawing, shuffling, and re-sorting? Yes it would. That's what _frostyloot_ is here for.

# Input/Output

One will need to input the list of loot types as an array when prompted, and also how many cards (total) are to be drawn from the compiled loot deck. _frostyloot_ will open images of the randomly drawn cards. Note that these are not drawn on a per-player basis. If the number required for Player One is 3, for Player Two is 1, and Player Three is 1, you'll enter '5' and it's up to your group to distribute them. Perhaps Player One gets the top three from the stack, and so on.


# Simple usage example


One simply runs the python file from the same directory containing the loot\_list.csv file and the img directory.

> python frosty_loot.py

Specify how many coin, lumber, metal, hide, arrowvine, axenut, corpsecap, flamefruit, rockroot, snowthistle, random-item, scenario-coin cards to include.
Empty values will be treated as zeros.
e.g. for 6 coin, 3 metal, 2 rockfruit, 2 snowthistle, input: 6,0,3,0,0,0,0,0,2,2,0,0 or 6,,3,,,,,,2,2,, (there should be 12 fields).

> 6,0,3,0,0,0,0,0,2,2,0,0

Specify the total number of loot cards to draw.

> 5

# License

I do not own any of the images or the rights to Frosthaven, etc. I simply wrote the code as a convenience tool. Please see the original license terms at [any2cards/Frosthaven](https://github.com/any2cards/frosthaven). This code is otherwise distributed with an MIT license.
