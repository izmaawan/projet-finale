input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 40)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    music.playMelody("C5 B A G F E D C ", 155)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Bon travail !")
    basic.showString("La musique symbolise la vitesse à laquelle le fluide s'écoule")
    basic.clearScreen()
})
basic.showString("Contrôlez le débit du fluide !")
basic.pause(1000)
basic.showString("Appuyez sur A pour rendre le fluide visqueux et sur B pour le rendre plus fluide visqueux.")
basic.clearScreen()
