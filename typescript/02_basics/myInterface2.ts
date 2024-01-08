//interface supports inheritance

interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const ab: Admin = { gitHubToken: "abc", role: "admin" };

export {};
