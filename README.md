# OdinProject-Calculator
TheOdinProject -- Foundations -- Project:Calculator

## TheOdinProject lesson
Link to (TheOdinProject Project Page)[https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator]

## Tasks
[x] basic mathematical operations
  create functions for:
  [x] add
  [x] subtract
  [x] multiply
  [x] divide
[x] function named "operate" that takes an operator & two numbers and calls one of the mathematical functions (from prev step)
[] create HTML calculator layout
  without "wiring up" the JS:
  [] button for each digit
  [] button for each of the functions
  [] equals button
  [] display (with dummy numbers)
  [] clear button
[] function to populate the display as numbers are pushed
[] "hook up" functions to buttons
  [] store the first number
  [] store the operation
  [] equals button triggers the operate() function
  [] update display with the solution
  <!-- *** this section will be a challenge *** -->

<!-- Gotchas: watch out for and fix these bugs if they show up in your code:

    * Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.

    * You should round answers with long decimals so that they don’t overflow the screen.
    
    * Pressing = before entering all of the numbers or an operator could cause problems!
    Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator! -->

<!-- additional goals -->

<!-- EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.

EXTRA CREDIT: Add keyboard support! -->