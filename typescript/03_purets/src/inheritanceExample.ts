export class User {
  readonly cityCode: string = "123";
  protected _courseCount = 1;

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  //defining a getter function by adding get keyword at begining of function
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //defining a setter function
  get setAppleEmail(): string {
    return `apple ${this.email}`;
  }

  //define a setter function by adding set prefix before function. a setter function can not return any value
  //You can not add set courseCount(courseNum): void or any {}
  //There is no return type in setter function
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

class SubUser extends User {
  //public : can be accessed by child class & outside class using class object
  //private : can be accessed only inside class
  //protected : can be access inside class as well as all child class

  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
