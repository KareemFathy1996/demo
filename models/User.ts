import { IUserData } from "parsers/UserParser";

export interface IUser {
  name?: string;
  type?: "client" | "admin";
  age?: number;
}

export class User implements IUser {
  name: string;
  type: "client" | "admin";
  age: number;

  constructor(data: IUserData) {
    const { name, type, age } = data;

    this.name = name;
    this.type = type;
    this.age = age;
  }
}

export default User;
