input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A A C5 A B C5 ", 120)
    basic.showLeds(`
        # # # # #
        . # . . #
        # # # . #
        # . . . #
        # . # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . # . #
        # . . . #
        # # # # #
        `)
    basic.showString("VALENTINA")
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
