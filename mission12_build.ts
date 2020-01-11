// Add your code here

function myramp(startPower: number = 1, maxPowerLeft: number = 10, maxPowerRight: number = 10, increment: number = 1, time: number = 4) {
    let leftPower = startPower;
    let rightPower = startPower;
    motors.largeBC.tank(leftPower, rightPower);

    let startTime = control.timer1.millis();

    while (true) {
        if (leftPower < maxPowerLeft || rightPower < maxPowerRight) {
            if (leftPower < maxPowerLeft) {
                leftPower += increment;
            }

            if (rightPower < maxPowerRight) {
                rightPower += increment;
            }
            brick.showValue("right:", rightPower, 1)
            brick.showValue("left:", leftPower, 2)
            motors.largeBC.tank(leftPower, rightPower);
        }

        pause(50);

        if (control.timer1.millis() - startTime > 1000 * time) {
            break;
        }
    }
}

function mission12_build_a() {
    myramp(1, 30, 20, 2, 6);
    motors.largeBC.tank(25, 25);

    let leftDetected = false;
    let rightDetected = false;
    while (true) {
        if (sensors.color2.isColorDetected(ColorSensorColor.Red)) {
            leftDetected = true;
        }

        if (sensors.color3.isColorDetected(ColorSensorColor.Red)) {
            rightDetected = true;
        }

        if (rightDetected || leftDetected) {
            break;
        }

        pause(5);
    }

    motors.largeBC.stop();
    motors.largeBC.tank(-32, -30, 3, MoveUnit.Rotations);
}

function mission12_build_b() {
    myramp(1, 25, 25, 1, 2)
    music.playSoundEffect(sounds.animalsCatPurr);
    motors.largeBC.tank(25, 25);
    while (true) {
        if (sensors.color2.isColorDetected(ColorSensorColor.Blue) || sensors.color2.isColorDetected(ColorSensorColor.Blue)) {
            break;
        }

        pause(5);
    }
    music.playSoundEffect(sounds.animalsElephantCall);
    while (true) {
        if (sensors.color3.isColorDetected(ColorSensorColor.Black) || sensors.color2.isColorDetected(ColorSensorColor.Black)) {
            break;
        }

        pause(5);
    }
    music.playSoundEffect(sounds.animalsCatPurr);
 
    motors.largeBC.stop();
    pause(200);
    motors.largeBC.tank(-32, -30, 3.5, MoveUnit.Rotations);
    // motors.largeBC.tank(50, -50, 1.5, MoveUnit.Rotations);
}