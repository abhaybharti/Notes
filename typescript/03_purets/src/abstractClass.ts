//abstract class
abstract class TakePhoto {
  constructor(public cameraMode: String, public filter: string) {}

  //abstract function
  abstract getSepia(): void;

  //function in abstract class
  getReelTime(): number {
    //some complext calculation
    return 8;
  }
}

//cannot create object of abstract, this is a blueprint
//const hitesh = new TakePhoto("test", "test");

class Instagram2 extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  //implementation of abstract function
  getSepia(): void {
    console.log("Sepia");
  }
}

const insta = new Instagram2("test", "test", 12345);
insta.getReelTime(); //access method created in abstract parent class
