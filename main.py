def on_gesture_shake():
    global steg
    steg += 1
    basic.show_number(steg)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

steg = 0
steg = 0