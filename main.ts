let fails = 0;

function playAmoungUs() {

    // Intro
    music.playTone(131, music.beat(BeatFraction.Whole));
    music.playTone(175, music.beat(BeatFraction.Double));

    music.rest(music.beat(BeatFraction.Quarter));

    // Main part
    for (let index = 0; index < 4; index++) {

        music.playTone(349, music.beat(BeatFraction.Whole));
        music.playTone(392, music.beat(BeatFraction.Whole));
        music.playTone(494, music.beat(BeatFraction.Whole));
        music.playTone(523, music.beat(BeatFraction.Whole));
        music.playTone(494, music.beat(BeatFraction.Whole));
        music.playTone(392, music.beat(BeatFraction.Whole));
        music.playTone(349, music.beat(BeatFraction.Double));

        music.rest(music.beat(BeatFraction.Half));

        music.playTone(311, music.beat(BeatFraction.Half) + music.beat(BeatFraction.Sixteenth));
        music.playTone(392, music.beat(BeatFraction.Half) + music.beat(BeatFraction.Sixteenth));
        music.playTone(349, music.beat(BeatFraction.Double));

        music.rest(music.beat(BeatFraction.Whole));

        music.playTone(131, music.beat(BeatFraction.Whole));
        music.playTone(175, music.beat(BeatFraction.Double));

        music.rest(music.beat(BeatFraction.Quarter));

        music.playTone(349, music.beat(BeatFraction.Whole));
        music.playTone(392, music.beat(BeatFraction.Whole));
        music.playTone(494, music.beat(BeatFraction.Whole));
        music.playTone(523, music.beat(BeatFraction.Whole));
        music.playTone(494, music.beat(BeatFraction.Whole));
        music.playTone(440, music.beat(BeatFraction.Whole));
        music.playTone(523, music.beat(BeatFraction.Double));

        music.rest(music.beat(BeatFraction.Double));

        // repeating end-ish part
        for (let index = 0; index < 2; index++) {

            music.playTone(523, music.beat(BeatFraction.Half) + music.beat(BeatFraction.Eighth));
            music.playTone(494, music.beat(BeatFraction.Half) + music.beat(BeatFraction.Eighth));
            music.playTone(440, music.beat(BeatFraction.Half) + music.beat(BeatFraction.Eighth));
        }

        music.playTone(349, music.beat(BeatFraction.Double));
    }
}

input.onPinPressed(TouchPin.P0, function () {

    fails += 1;

    // Shows an "X" on the screen
    basic.showIcon(IconNames.No);

    basic.pause(1000);

    basic.showNumber(fails);
})

input.onButtonPressed(Button.A, function () {
    
    // Reset the 'fails' variable
    fails = 0;
    
    // Show the maze
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # . #
        # . # # #
        # . . . .
        `);
    
    // Wait for 1 second
    basic.pause(1000);
    
    // Show the number of fails on the screen (It is always 0)
    basic.showNumber(0);
})

input.onButtonPressed(Button.B, function () {
    
    fails += -1;
    
    // Show the number of fails on the screen (It is always 0)
    basic.showNumber(fails);
})

// Background AMOUNGUS song
control.inBackground(function () {

    music.setTempo(200);

    pins.analogSetPitchPin(AnalogPin.P1);

    // Basically a forever loop
    while (true) {

        // AMOUNGUS
        playAmoungUs();

        // Wait a random amount of seconds (0.1 -- 15) to play the nex AMOUNGUS
        basic.pause(randint(100, 15000));
    }
})

// When the program starts, clear the screen
basic.clearScreen();
basic.showString("The AMOUNGUS Impossible Game", 100);

while (true) {

    basic.showString("Press Button A Pin 0 to start", 150);
}