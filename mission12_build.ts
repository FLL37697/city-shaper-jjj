// Add your code here

function myramp(startPower: number = 1, maxPower: number = 10, increment: number = 1, time: number = 4) {
    let power = startPower;
    motors.largeBC.tank(power, power)

    let startTime = control.timer1.millis();

    while (true) {
        if (power < maxPower) {
            power += increment;
            motors.largeBC.steer(power, power);
        }

        pause(50);

        if (control.timer1.millis() - startTime > 1000 * time) {
            break;
        }
    }
}

function mission12_build_a() {
    myramp(1, 30, 1, 5)
    pause(50);
    // motors.largeBC.stop();
    // motors.largeBC.tank(-15, 15, .1, MoveUnit.Rotations);
    motors.largeBC.stop();
    motors.largeBC.tank(-32, -30, 3, MoveUnit.Rotations);
    // motors.largeBC.tank(50, -50, 1.5, MoveUnit.Rotations);
}

function mission12_build_b() {
    myramp(1, 30, 1, 4)
    pause(50);
    // motors.largeBC.stop();
    // motors.largeBC.tank(-15, 15, .1, MoveUnit.Rotations);
    motors.largeBC.stop();
    motors.largeBC.tank(-32, -30, 2.5, MoveUnit.Rotations);
    // motors.largeBC.tank(50, -50, 1.5, MoveUnit.Rotations);
}