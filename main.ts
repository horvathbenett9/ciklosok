input.onButtonPressed(Button.A, function () {
    for (let sor = 0; sor <= 4; sor++) {
        led.plot(sor, 0)
        led.plot(sor, 4)
        led.plot(0, sor)
        led.plot(4, sor)
    }
    basic.pause(1000)
    basic.clearScreen()
})
// mas mas feny kigyujtas
input.onButtonPressed(Button.AB, function () {
    for (let sor2 = 0; sor2 <= 4; sor2++) {
        for (let oszlop = 0; oszlop <= 4; oszlop++) {
            led.plotBrightness(sor2, oszlop, (oszlop + 1) * (sor2 + 1) * 10 + 10)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let sor3 = 0; sor3 <= 4; sor3++) {
        for (let oszlop2 = 0; oszlop2 <= 4; oszlop2++) {
            led.plot(sor3, oszlop2)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
