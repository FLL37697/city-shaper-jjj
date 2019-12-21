let armPos = 0
let currentTime = 0
let motoraAdjustment = 0
let loopStart = 0
let lastArmPos = 0
function mission12() {
    motors.resetAll()
    motors.largeBC.steer(0, 25, 3, MoveUnit.Rotations)
    motors.stopAll()
    motors.largeBC.steer(0, -25, 3, MoveUnit.Rotations)
    motors.stopAll()
}
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
radioactiveBrainstorm.addMenuItem("mission12", function () {
    mission12()
})
radioactiveBrainstorm.addMenuItem("Crane Mission", function () {
    crane()
})
function mission12Jonas1() {
    motors.resetAll()
    motors.largeBC.steer(0, 33, 2, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 2, MoveUnit.Rotations)
}
radioactiveBrainstorm.addMenuItem("mission12 blackcircle", function () {
    mission12Jonas1()
})
radioactiveBrainstorm.addMenuItem("mission12 redcircle", function () {
    mission12Jonas2()
})
function mission12Jonas2() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.steer(0, 29, 0, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 40, MoveUnit.Rotations)
}
radioactiveBrainstorm.addMenuItem("mission12 tancircle", function () {
    mission12Jonas3()
    mission12Jonas2()
})
radioactiveBrainstorm.addMenuItem("mission6 traffic", function () {
    mission12Jonas3()
    mission6trafficjam()
})
function mission12Jonas3() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.steer(0, 29, 0, MoveUnit.Rotations)
}
function mission6trafficjam() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.tank(-50, 50, 1, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, 39, 1, MoveUnit.Rotations)
}
lastArmPos = 0
loopStart = 0
motoraAdjustment = 0
currentTime = 0
armPos = 0
