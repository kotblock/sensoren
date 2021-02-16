basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . # . .
            # # # # #
            # . # . #
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playMelody("C5 A C5 F C5 E G B ", 120)
        basic.setLedColor(0xff0000)
        basic.pause(100)
        music.playMelody("C5 B A G C E G C ", 218)
        basic.setLedColor(0xffff00)
        basic.pause(100)
        music.playMelody("C5 A B G A F G E ", 204)
        basic.setLedColor(0x000000)
        basic.pause(100)
        music.playMelody("G B A G C5 B A B ", 202)
        basic.setLedColor(0x0000ff)
        basic.pause(1000)
        basic.turnRgbLedOff()
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.C17) == 0) {
        pins.servoWritePin(AnalogPin.C16, 90)
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            # . . . #
            . # # # .
            `)
    } else {
        pins.servoWritePin(AnalogPin.C16, 0)
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . . . .
            # # # # #
            `)
    }
})
