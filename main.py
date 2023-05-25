def on_button_pressed_a():
    for sor in range(5):
        led.plot(sor, 0)
        led.plot(sor, 4)
        led.plot(0, sor)
        led.plot(4, sor)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for index in range(16): 
        for sor2 in range(5):
            for oszlop in range(5):
                led.plot_brightness(sor2, oszlop, index * 10)
        basic.pause(500)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for sor3 in range(5):
        for oszlop2 in range(5):
            led.plot(sor3, oszlop2)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
