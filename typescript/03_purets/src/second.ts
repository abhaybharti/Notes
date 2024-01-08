//defining interface
interface TakePhoto {
  cameraMode: String;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

//implement interface
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: String,
    public filter: string,
    public burst: number
  ) {}
}
//implement multiple interface
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public captionFilter: string
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
