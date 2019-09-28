let armPos = 0
let currentTime = 0
let motoraAdjustment = 0
let loopStart = 0
let lastArmPos = 0
function armDown() {
    motors.mediumA.run(-20, 100, MoveUnit.MilliSeconds)
    lastArmPos = motors.mediumA.angle()
    brick.showValue("lastArmPosInit", lastArmPos, 4)
    pause(200)
    while (true) {
        motors.mediumA.run(-20, 10, MoveUnit.MilliSeconds)
        armPos = motors.mediumA.angle()
        brick.showValue("lastArmPos", lastArmPos, 1)
        brick.showValue("armPos", armPos, 2)
        brick.showValue("Difference", armPos - lastArmPos, 3)
        if (lastArmPos - armPos == 0) {
            music.playSoundEffect(sounds.communicationBravo)
            break;
        }
        lastArmPos = armPos
    }
}
function armUp() {
    motors.mediumA.run(20, 100, MoveUnit.MilliSeconds)
    lastArmPos = motors.mediumA.angle()
    brick.showValue("lastArmPosInit", lastArmPos, 4)
    pause(200)
    while (true) {
        motors.mediumA.run(20, 10, MoveUnit.MilliSeconds)
        armPos = motors.mediumA.angle()
        brick.showValue("lastArmPos", lastArmPos, 1)
        brick.showValue("armPos", armPos, 2)
        brick.showValue("Difference", armPos - lastArmPos, 3)
        if (lastArmPos - armPos == 0) {
            music.playSoundEffect(sounds.communicationBravo)
            break;
        }
        lastArmPos = armPos
    }
}
brick.buttonRight.onEvent(ButtonEvent.Released, function () {
    armDown()
})
function program1() {
    motors.largeBC.steer(0, 50, 2.25, MoveUnit.Rotations)
    loopStart = control.millis()
    while (currentTime - loopStart < 1550) {
        motoraAdjustment = sensors.color1.light(LightIntensityMode.Reflected) - 40
        motors.largeBC.steer(motoraAdjustment, 25)
        currentTime = control.millis()
        console.log("Loop time")
        console.log("" + (currentTime - loopStart))
    }
    motors.largeBC.stop()
    motors.largeBC.steer(0, 15, 0.25, MoveUnit.Rotations)
    armDown()
    pause(2000)
    armUp()
    motors.largeBC.steer(0, -100, 3.5, MoveUnit.Rotations)
}
function test() {
    armUp()
    motors.largeBC.steer(0, 50, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(25, -25, 0.25, MoveUnit.Rotations)
    motors.largeBC.steer(0, 50, 1, MoveUnit.Rotations)
    motors.largeBC.tank(-25, 25, 0.22, MoveUnit.Rotations)
    motors.largeBC.steer(0, 40, 0.35, MoveUnit.Rotations)
    armDown()
}
brick.buttonLeft.onEvent(ButtonEvent.Released, function () {
    armUp()
})
// program1()
test()
