// Add your code here
function mission9_safety_factor() {
    test2()
}

function test2(
    basePower: number = 10
): void {
    // Reset BC sensors
    motors.largeB.reset();
    motors.largeC.reset();

    let integralLeft = 0;
    let integralRight = 0;

    motors.largeBC.tank(basePower, basePower);

    const LEFT_MAX = 93;
    const RIGHT_MAX = 97;
    const WHITE_THRESHOLD = 90;
    const Kp = -.1;
    const Ki = .005;
    const CENTER_READING = 60;
    while (true) {
        let leftLightValue = 100 * sensors.color1.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        brick.showValue("right 0-100:", rightLightValue, 1)
        brick.showValue("left 0-100:", leftLightValue, 2)

        let errorLeft = (CENTER_READING - leftLightValue);
        let errorRight = (CENTER_READING - rightLightValue);

        integralLeft = .66 * integralLeft + errorLeft;
        integralRight = .66 * integralRight + errorRight;

        let leftAdjustment = Kp * errorLeft + Ki * integralLeft;
        let rightAdjustment = Kp * errorRight + Ki * integralRight;

        brick.showValue("rightAdj", rightAdjustment, 3)
        brick.showValue("leftAdj", leftAdjustment, 4)

        motors.largeBC.tank(basePower + leftAdjustment, basePower + rightAdjustment);

        pause(10)

        if (rightLightValue >= WHITE_THRESHOLD && leftLightValue >= WHITE_THRESHOLD) {
            break;
        }
    }

    motors.largeBC.setBrake(true);
    motors.largeBC.stop();
    pause(500)

    // Move forward to end
    let powerLeft = 5;
    let powerRight = 5;
    motors.largeBC.tank(powerLeft, powerRight);
    while (true) {
        let leftLightValue = 100 * sensors.color1.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (leftLightValue <= WHITE_THRESHOLD) {
            powerLeft = 0;
        }

        if (rightLightValue <= WHITE_THRESHOLD) {
            powerRight = 0;
        }

        motors.largeBC.tank(powerLeft, powerRight);

        if (powerLeft == 0 && powerRight == 0) {
            break;
        }

        pause(10)
    }

    motors.largeBC.stop();
    pause(500)

    // Reverse
    motors.largeBC.tank(-basePower, -basePower, .5, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .38, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .4, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .25, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .41, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .45, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .6, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .25, MoveUnit.Rotations);
}