export class LoginRequest {
  userName!: string
  password!: string

  constructor(init?: Partial<LoginRequest>) {
    Object.assign(this, init);
  }
}
