# OdinProject-Calculator
TheOdinProject -- Foundations -- Project:Calculator

## TheOdinProject lesson
Link to [TheOdinProject Project Page](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator)

## Tasks
- [x] basic mathematical operations
  create functions for:
  - [x] add
  - [x] subtract
  - [x] multiply
  - [x] divide
- [x] function named "operate" that takes an operator & two numbers and calls one of the mathematical functions (from prev step)
- [x] create HTML calculator layout
  without "wiring up" the JS:
  - [x] button for each digit
  - [x] button for each of the functions
  - [x] equals button
  - [x] display (with dummy numbers)
  - [x] clear button
- [x] function to populate the display as numbers are pushed
- [x] "hook up" functions to buttons
  - [x] store the first number
  - [x] store the operation
  - [x] equals button triggers the operate() function
  - [x] update display with the solution
  - [x] add functionality to chain operations

- [x] EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
  
- [x] EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

- [x] EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

- [x] EXTRA CREDIT: Add keyboard support!
  - [x] register keypress
  - [x] align keypresses to button click equivalents
  - [x] confirm alternate keypresses ( = enter )
  - [x] keypresses trigger button styling toggling (and untoggle)

### Polish
- [ ] refactor code
  - [ ] remove keyboard / button functionality duplication
  - [ ] add ability to toggle negative numbers