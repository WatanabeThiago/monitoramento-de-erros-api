export default interface ICreateUserDTO {
  id: string;
  name: string;
  phone: string;
  email?: string;
  profile_photo?: string;
  password?: string;
}
