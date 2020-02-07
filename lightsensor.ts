const LEFT_MAX = 92;
const RIGHT_MAX = 88;
const WHITE_THRESHOLD = 85;

function linefollow_test(
    basePower: number = 10,
    stopAngle: number = 0,
    seconds: number = 0,
    darkThreshold: number = 0,
    Kp: number = -.1,
    Ki: number = .005,
    IntegralDecay: number = .66
) {
    // const Kp = -.1;
    // const Ki = +.005;
    const CENTER_READING = 60;

    let startTime = control.timer1.millis()
    let startLeft = motors.largeB.angle();
    let startRight = motors.largeC.angle();
    let integralLeft = 0;
    let integralRight = 0;

    motors.largeBC.reset();
    motors.largeBC.tank(basePower, basePower);
    while (true) {
        let leftAngle = motors.largeB.angle();
        let rightAngle = motors.largeC.angle();
        let averageAngle = ((leftAngle - startLeft) + (rightAngle - startRight)) / 2;

        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (seconds == 0 && stopAngle == 0) {
            if (darkThreshold == 0) {
                if (rightLightValue >= WHITE_THRESHOLD && leftLightValue >= WHITE_THRESHOLD) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            } else {
                if (rightLightValue <= darkThreshold && leftLightValue <= darkThreshold) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            }

        }

        brick.showValue("right 0-100:", rightLightValue, 1)
        brick.showValue("left 0-100:", leftLightValue, 2)

        let errorLeft = (CENTER_READING - leftLightValue);
        let errorRight = (CENTER_READING - rightLightValue);

        integralLeft = IntegralDecay * integralLeft + errorLeft;
        integralRight = IntegralDecay * integralRight + errorRight;

        let leftAdjustment = Kp * errorLeft + Ki * integralLeft;
        let rightAdjustment = Kp * errorRight + Ki * integralRight;

        let leftPower = basePower + leftAdjustment;
        let rightPower = basePower + rightAdjustment;

        brick.showValue("rightAdj", rightAdjustment, 3)
        brick.showValue("leftAdj", leftAdjustment, 4)

        motors.largeBC.tank(leftPower, rightPower);

        pause(5)

        if (seconds != 0) {
            let now = control.timer1.millis();
            if (now - startTime > seconds * 1000) {
                //music.playSoundEffect(sounds.animalsInsectBuzz1);
                break;
            }
        }

        if (stopAngle != 0) {
            if (averageAngle >= stopAngle) {
                //music.playSoundEffect(sounds.animalsSnakeHiss);
                break;
            }
        }

        if (exitFlag) {
            exit();
            return;
        }
    }

    motors.largeBC.stop();
}

function runtowhite_fast(basePower: number = 20) {
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

        pause(5)

        if (exitFlag) {
            exit();
            return;
        }
    }
    motors.largeBC.stop();
}

function linefollow_fast(
    basePower: number = 20,
    stopAngle: number = 0,
    seconds: number = 0,
    darkThreshold: number = 0
) {
    const Kp = -.1;
    const Ki = +.005;
    const CENTER_READING = 60;

    let startTime = control.timer1.millis()
    let startLeft = motors.largeB.angle();
    let startRight = motors.largeC.angle();
    let integralLeft = 0;
    let integralRight = 0;
    let attempts = 0;

    motors.largeBC.reset();
    motors.largeBC.tank(basePower, basePower);

    while (true) {
        let leftAngle = motors.largeB.angle();
        let rightAngle = motors.largeC.angle();
        let averageAngle = ((leftAngle - startLeft) + (rightAngle - startRight)) / 2;

        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (seconds == 0 && stopAngle == 0) {
            if (darkThreshold == 0) {
                if (rightLightValue >= WHITE_THRESHOLD && leftLightValue >= WHITE_THRESHOLD) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            } else {
                if (rightLightValue <= darkThreshold && leftLightValue <= darkThreshold) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            }

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

        pause(5)

        if (seconds != 0) {
            let now = control.timer1.millis();
            if (now - startTime > seconds * 1000) {
                //music.playSoundEffect(sounds.animalsInsectBuzz1);
                break;
            }
        }

        if (stopAngle != 0) {
            if (averageAngle >= stopAngle) {
                //music.playSoundEffect(sounds.animalsSnakeHiss);
                break;
            }
        }

        if (exitFlag) {
            exit();
            return;
        }
    }

    motors.largeBC.stop();
}

function runtowhite(basePower: number = 10) {
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

        pause(5)

        if (exitFlag) {
            exit();
            return;
        }
    }
    motors.largeBC.stop();
}

function linefollow(
    basePower: number = 10,
    stopAngle: number = 0,
    seconds: number = 0,
    darkThreshold: number = 0
) {
    const Kp = -.1;
    const Ki = +.005;
    const CENTER_READING = 60;

    let startTime = control.timer1.millis()
    let startLeft = motors.largeB.angle();
    let startRight = motors.largeC.angle();
    let integralLeft = 0;
    let integralRight = 0;

    motors.largeBC.reset();
    motors.largeBC.tank(basePower, basePower);
    while (true) {
        let leftAngle = motors.largeB.angle();
        let rightAngle = motors.largeC.angle();
        let averageAngle = ((leftAngle - startLeft) + (rightAngle - startRight)) / 2;

        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        if (seconds == 0 && stopAngle == 0) {
            if (darkThreshold == 0) {
                if (rightLightValue >= WHITE_THRESHOLD && leftLightValue >= WHITE_THRESHOLD) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            } else {
                if (rightLightValue <= darkThreshold && leftLightValue <= darkThreshold) {
                    //music.playSoundEffect(sounds.animalsElephantCall);
                    break;
                }
            }

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

        pause(5)

        if (seconds != 0) {
            let now = control.timer1.millis();
            if (now - startTime > seconds * 1000) {
                //music.playSoundEffect(sounds.animalsInsectBuzz1);
                break;
            }
        }

        if (stopAngle != 0) {
            if (averageAngle >= stopAngle) {
                //music.playSoundEffect(sounds.animalsSnakeHiss);
                break;
            }
        }

        if (exitFlag) {
            exit();
            return;
        }
    }

    motors.largeBC.stop();
}

