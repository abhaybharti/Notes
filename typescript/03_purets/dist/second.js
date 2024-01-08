"use strict";
//implement interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//implement multiple interface
class Youtube {
    constructor(cameraMode, filter, burst, captionFilter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.captionFilter = captionFilter;
    }
    createStory() {
        console.log("Story was created");
    }
}
