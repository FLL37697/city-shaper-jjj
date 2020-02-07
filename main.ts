let armPos = 0;
let currentTime = 0;
let motoraAdjustment = 0;
let loopStart = 0;
let lastArmPos = 0;
let exitFlag = false;

function exit() {
	motors.largeBC.stop();
	exitFlag = false;
}

brick.buttonLeft.onEvent(ButtonEvent.Pressed, function() {
	exitFlag = true;
});

function resetAll() {
	exitFlag = false;
}

radioactiveBrainstorm.addMenuItem('mission9 safety factor', function() {
	resetAll();
	mission9_safety_factor();
});

radioactiveBrainstorm.addMenuItem('mission12 build A', function() {
	resetAll();
	mission12_build_a();
});
radioactiveBrainstorm.addMenuItem('mission12 build B', function() {
	resetAll();
	mission12_build_b();
});
radioactiveBrainstorm.addMenuItem('mission11 innarch', function() {
	resetAll();
	mission11();
});

radioactiveBrainstorm.addMenuItem('mission1 elevated places', function() {
	resetAll();
	mission1_elevated_places();
});
