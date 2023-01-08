import { UserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements UserInterface {
  lastname: string;
  mail: string;
  firstname: string;
}
