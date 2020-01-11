// Add your code here
function sensor_test_1(
    basePower: number = 10
): void {
    // Reset BC sensors
    // sensors.color1.reset();
    // sensors.color2.reset();

    sensors.color2.calibrateLight(LightIntensityMode.Reflected);
    sensors.color3.calibrateLight(LightIntensityMode.Reflected);

    let error = 0;
    let integralLeft = 0;
    let integralRight = 0;

    const LEFT_MAX = 93;
    const RIGHT_MAX = 97;
    const WHITE_THRESHOLD = 90;
    const Kp = -.1;
    const Ki = .005;
    const CENTER_READING = 50;
    while (true) {
        // if (buttonPressed) {
        //     break;
        // }

        let leftLightValue = 100 * sensors.color2.light(LightIntensityMode.Reflected) / LEFT_MAX;
        let rightLightValue = 100 * sensors.color3.light(LightIntensityMode.Reflected) / RIGHT_MAX;

        brick.showValue("right 0-100", rightLightValue, 1)
        brick.showValue("left 0-100", leftLightValue, 2)

        let errorLeft = (CENTER_READING - leftLightValue);
        let errorRight = (CENTER_READING - rightLightValue);
        let errorAverage = (errorLeft + errorRight) / 2;

        brick.showValue("errorRight", errorRight, 3)
        brick.showValue("errorLeft", errorLeft, 4)
        brick.showValue("errorAverage", errorAverage, 5)

        integralLeft = .66 * integralLeft + errorLeft;
        integralRight = .66 * integralRight + errorRight;

        integralLeft = 0;
        integralRight = 0;

        brick.showValue("integralRight", integralRight, 6)
        brick.showValue("integralLeft", integralLeft, 7)

        let leftAdjustment = Kp * errorLeft + Ki * integralLeft;
        let rightAdjustment = Kp * errorRight + Ki * integralRight;

        brick.showValue("rightAdj", rightAdjustment, 8)
        brick.showValue("leftAdj", leftAdjustment, 9)

        pause(10)
    }
}