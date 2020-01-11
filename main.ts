let armPos = 0
let currentTime = 0
let motoraAdjustment = 0
let loopStart = 0
let lastArmPos = 0

// Try to reset the sensors by detecting color :/
sensors.color2.isColorDetected(ColorSensorColor.Red);
sensors.color3.isColorDetected(ColorSensorColor.Red);

radioactiveBrainstorm.addMenuItem("mission9 safety factor", function () {
    mission9_safety_factor();
})

radioactiveBrainstorm.addMenuItem("mission12 build A", function () {
    mission12_build_a();
})

radioactiveBrainstorm.addMenuItem("mission12 build B", function () {
    mission12_build_b();
})

radioactiveBrainstorm.addMenuItem("mission1 elevated places", function () {
    mission1_elevated_places();
})

radioactiveBrainstorm.addMenuItem("Sensor Test", function () {
    sensor_test_1();
})

radioactiveBrainstorm.addMenuItem("mission6 traffic jam", function () {
    mission6_trafficjam();
})




radioactiveBrainstorm.addMenuItem("mission6 traffic", function () {
    mission6trafficjam2()
})
function mission12Jonas3() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.steer(0, 29, 0, MoveUnit.Rotations)
}

function mission6trafficjam2() {
    // motors.resetAll() motors.largeBC.ramp(33, 6,
    // MoveUnit.Rotations, 0.5, 0) motors.largeBC.stop()
    test(60, 10);
}
function mission6trafficjam() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.tank(-50, 50, 1, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, 39, 1, MoveUnit.Rotations)
}
radioactiveBrainstorm.addMenuItem("Crane Mission", function () {
    crane()
})
function mission12() {
    motors.resetAll()
    motors.largeBC.steer(0, 25, 3, MoveUnit.Rotations)
    motors.stopAll()
    motors.largeBC.steer(0, -25, 3, MoveUnit.Rotations)
    motors.stopAll()
}
radioactiveBrainstorm.addMenuItem("mission12 blackcircle", function () {
    mission12Jonas1()
})
radioactiveBrainstorm.addMenuItem("mission12 redcircle", function () {
    mission12Jonas2()
})
function crane() {
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 30, 40, 100, false)
    motors.largeBC.steer(0, 25, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(10, -10, 0.25, MoveUnit.Rotations)
    motors.largeBC.steer(0, 25, 0.75, MoveUnit.Rotations)
    motors.largeBC.tank(-10, 10, 0.25, MoveUnit.Rotations)
    motors.mediumA.run(50, 0.5, MoveUnit.Rotations)
    motors.largeBC.steer(0, 40, 0.5, MoveUnit.Rotations)
    pause(200)
    motors.largeBC.steer(0, -25, 0.45, MoveUnit.Rotations)
    motors.mediumA.run(50, 0, MoveUnit.Rotations)
    motors.largeBC.tank(-10, 10, 0.5, MoveUnit.Rotations)
    motors.largeBC.steer(38, 20, 0.6, MoveUnit.Rotations)
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 30, 10, 100, true)
    pause(1000)
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.DOWN, 20, 10, 100, true)
    motors.largeBC.steer(0, -50, 2, MoveUnit.Rotations)
}
radioactiveBrainstorm.addMenuItem("mission12 tancircle", function () {
    mission12Jonas3()
    mission12Jonas2()
})
function mission12Jonas1() {
    motors.resetAll()
    motors.largeBC.steer(0, 33, 2, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 2, MoveUnit.Rotations)
}
function mission12Jonas2() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.steer(0, 29, 0, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 40, MoveUnit.Rotations)
}
function test(
    seconds: number = 10,
    basePower: number = 10
): void {
    let startTime = control.timer1.millis()
    let error = 0;

    motors.largeBC.reset();
    motors.largeBC.tank(basePower, basePower);
    while (true) {
        let B = 70;
        let K = .1;

        let right = sensors.color2.light(LightIntensityMode.Reflected)
        let left = sensors.color3.light(LightIntensityMode.Reflected)

        brick.showValue("right", right, 1)
        brick.showValue("left", left, 2)

        let leftAdjustment = K * (B - left);
        let rightAdjustment = K * (B - right);
        brick.showValue("rightAdj", rightAdjustment, 3)
        brick.showValue("leftAdj", leftAdjustment, 4)

        motors.largeBC.tank(basePower + leftAdjustment, basePower + rightAdjustment);

        pause(100)

        let now = control.timer1.millis();
        if (now - startTime > seconds * 1000) {
            break;
        }
    }

    motors.largeBC.stop();
}
lastArmPos = 0
loopStart = 0
motoraAdjustment = 0
currentTime = 0
armPos = 0
