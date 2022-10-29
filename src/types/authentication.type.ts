export type LoginPageInputs = {
  email: string,
  password: string,
  };
  export type RegisterPageInputs = {
    name:string;
    email: string,
    password: string,
  };
  export type User ={
    accessToken:string,
    id?: any | null,
    name?: string | null,
    email?: string,
    password?: string,
    roles?: Array<string>

  }