"use strict";
//abstract class
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //function in abstract class
    getReelTime() {
        //some complext calculation
        return 8;
    }
}
//cannot create object of abstract, this is a blueprint
//const hitesh = new TakePhoto("test", "test");
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //implementation of abstract function
    getSepia() {
        console.log("Sepia");
    }
}
const insta = new Instagram2("test", "test", 12345);
insta.getReelTime(); //access method created in abstract parent class
