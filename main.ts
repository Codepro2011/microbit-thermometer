input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 20) {
        basic.showString("Varmt")
    } else {
        basic.showString("Kaldt")
    }
})
