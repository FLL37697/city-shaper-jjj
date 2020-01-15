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
