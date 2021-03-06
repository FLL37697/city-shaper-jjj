// Add your code here
function mission9_safety_factor() {
    motors.largeB.reset();
    motors.largeC.reset();

    // Drive forward
    motors.largeBC.steer(5, 33, 4.65, MoveUnit.Rotations);
    // linefollow(10, 250);
    motors.largeBC.tank(10, -10, .25, MoveUnit.Rotations);
    runtowhite();
    motors.largeBC.tank(0, 20, .5, MoveUnit.Rotations);
    //linefollow();
    linefollow_test(10, 0, 0, 0, -.2, .02, .66);

    let basePower = 10;
    // Reverse
    motors.largeBC.tank(-basePower, -basePower, .45, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .38, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .4, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .25, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .25, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .435, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .6, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .375, MoveUnit.Rotations);

    // Return to base
    motors.largeBC.steer(0, -75, 7, MoveUnit.Rotations);
}


function test2(
    basePower: number = 10
): void {
    // Reset BC sensors
    motors.largeB.reset();
    motors.largeC.reset();

    const WHITE_THRESHOLD = 90;
    const Kp = -.1;
    const Ki = .005;
    const CENTER_READING = 60;

    let speed1 = 40;
    motors.largeBC.setBrake(false);
    motors.largeBC.tank(speed1, speed1 - 2, 2, MoveUnit.Rotations);
    motors.largeBC.stop();

    // Steer Left Off the wall
    motors.largeBC.steer(-100, 20, .6, MoveUnit.Rotations);
    motors.largeBC.tank(speed1, speed1, 2.5, MoveUnit.Rotations);

    // Drive till both sensors are white
    let powerLeft = basePower;
    let powerRight = basePower;
    motors.largeBC.tank(powerLeft, powerRight);

    while (true) {
        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (leftLightValue >= WHITE_THRESHOLD) {
            powerLeft = 0;
        }

        if (rightLightValue >= WHITE_THRESHOLD) {
            powerRight = 0;
        }

        motors.largeBC.tank(powerLeft, powerRight);

        if (powerLeft == 0 && powerRight == 0) {
            break;
        }

        pause(5);

        if (exitFlag) {
            exit();
            return;
        };
    }
    motors.largeBC.stop();

    // steer right before line follow
    motors.largeBC.steer(0, speed1, .5, MoveUnit.Rotations);
    motors.largeBC.tank(basePower, -basePower, .25, MoveUnit.Rotations);
    motors.largeBC.tank(1.5 * basePower, 1.5 * basePower * .25);

    while (true) {
        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (rightLightValue >= WHITE_THRESHOLD) {
            break
        }

        pause(5);

        if (exitFlag) {
            exit();
            return;
        };
    }

    motors.largeBC.steer(0, 10, .2, MoveUnit.Rotations);
    motors.largeBC.stop();

    let integralLeft = 0;
    let integralRight = 0;

    motors.largeBC.tank(basePower, basePower);


    while (true) {
        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (rightLightValue >= WHITE_THRESHOLD && leftLightValue >= WHITE_THRESHOLD) {
            break;
        }

        brick.showValue("right 0-100:", rightLightValue, 1)
        brick.showValue("left 0-100:", leftLightValue, 2)

        let errorLeft = (CENTER_READING - leftLightValue);
        let errorRight = (CENTER_READING - rightLightValue);

        integralLeft = .66 * integralLeft + errorLeft;
        integralRight = .66 * integralRight + errorRight;

        let leftAdjustment = Kp * errorLeft + Ki * integralLeft;
        let rightAdjustment = Kp * errorRight + Ki * integralRight;

        let leftPower = basePower + leftAdjustment;
        let rightPower = basePower + rightAdjustment;

        brick.showValue("rightAdj", rightAdjustment, 3)
        brick.showValue("leftAdj", leftAdjustment, 4)

        motors.largeBC.tank(leftPower, rightPower);

        pause(5);

        if (exitFlag) {
            exit();
            return;
        };
    }

    motors.largeBC.setBrake(true);
    motors.largeBC.stop();
    pause(500)

    // // Move forward to end
    // let powerLeft = 3;
    // let powerRight = 3;
    // motors.largeBC.tank(powerLeft, powerRight);
    // while (true) {
    //     let leftLightValue = 100 * sensors.color1.light(LightIntensityMode.Reflected) / LEFT_MAX;
    //     let rightLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / RIGHT_MAX;

    //     if (leftLightValue <= CENTER_READING + 10) {
    //         powerLeft = 0;
    //     }

    //     if (rightLightValue <= CENTER_READING + 10) {
    //         powerRight = 0;
    //     }

    //     motors.largeBC.tank(powerLeft, powerRight);

    //     if (powerLeft == 0 && powerRight == 0) {
    //         break;
    //     }

    //     pause(5)
    // }

    // motors.largeBC.stop();
    // pause(500)

    // Reverse
    motors.largeBC.tank(-basePower, -basePower, .46, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .38, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .4, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .27, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .46, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .47, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .6, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .28, MoveUnit.Rotations);


}