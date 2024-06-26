//code to declare class
class UserSample {
  public email: string;
  public name: string;
  public city: string = "";
  readonly cityCode: string = "123";
  private citPinCode: number = 12345; //private variable, it can't be accessed outside the class & can be accessed only by class function
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user = new UserSample("h@h.com", "hitesh");
user.city = "delhi";

//Other way to write class code, mostly preferred by expert user to write production grade code
class User {
  readonly cityCode: string = "123";
  private _courseCount = 1;

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
const user2 = new User("h@h.com", "hitesh", "12345");
