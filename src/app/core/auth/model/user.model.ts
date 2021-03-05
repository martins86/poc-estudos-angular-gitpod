export class Roles {
  constructor(
    public subscriber?: boolean,
    public editor?: boolean,
    public admin?: boolean
  ) {}
}

export class UserModel {
  constructor(
    public uid: string,
    public displayName: string,
    public email: string,
    public password: string,
    public role: Roles,
    public active: boolean,
    public photoURL?: string
  ) {}
}
