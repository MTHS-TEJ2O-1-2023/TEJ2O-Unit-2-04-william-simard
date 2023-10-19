/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: william s 
 * Created on: oct 2023
 * This program picks a random number between (1, 6)
*/
// our variable for a random number
let randomnumber: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
randomnumber = randint(1, 6)
basic.showNumber(randomnumber)
})