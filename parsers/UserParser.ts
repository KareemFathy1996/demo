import { IBEData } from "apisSchema/user";

export interface IUserData {
  name: string;
  type: "client" | "admin";
  age: number;
}

export class UserParser implements IUserData {
  name: string;
  type: "client" | "admin";
  age: number;

  constructor({ name, type, age }: IBEData) {
    this.name = name;
    this.type = type;
    this.age = age;
  }
}

export default UserParser;
