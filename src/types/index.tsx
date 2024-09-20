export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface DesHero {
  /*** Page title */
  title: string;
  /*** current Page title */
  currentPage: string;
  /***  link to page */
  link?: string;
  image: string;
}

export interface ISignInContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setstoreDate: React.Dispatch<
    React.SetStateAction<ISigningResponse | undefined>
  >;
  storeDate: ISigningResponse | undefined;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  laoding: boolean;
}

export interface ICustomInput {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  error?: string | undefined;
  touched?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  value: string | number;
}

export interface ICustomSelect {
  label: string;
  name: string;
  id: string;
  children?: JSX.Element | JSX.Element[];
  value: string;

  error?: string | undefined;
  touched?: boolean;

  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ICreateAcctContext {
  currentPage: number;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
  nextPage: (newData: IFormData) => void;
  prevPage: (newData: IFormData) => void;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  verifyData: IVerifyData | undefined;
  formData: ICreateAcctFormData;
  setformData: React.Dispatch<React.SetStateAction<ICreateAcctFormData>>;
}

export interface ICustomButton {
  loading: boolean;
  color: string;
  text: string;
  type: "button" | "submit" | "reset";
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface ISignUpFormdata {
  email: string;
  password: string;
  confirm_password: string;
}

export interface ISignUpResponse {
  password?: string | Array<string>;
  email?: string | Array<string>;
  msg?: string;
}

export interface IVerifyData {
  email: string;
  password: string;
}

export interface ICreateAcctFormData {
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  next_of_kin: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;

  security_pin: string;
  account_type: string;
}

export interface IFormData {
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  next_of_kin: string;

  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;

  security_pin: string;
  account_type: string;
}

export interface IUser {
  id: number;
  password: string;
  last_login: string;
  is_superuser: boolean;
  username: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  email: string;
  balance: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  next_of_kin: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  account_type: string;
  security_pin: string;
  is_verified: boolean;
  image_url: string;
}

export interface ISigningResponse {
  user: IUser;
  token: string;
  msg: string;
  error: string | undefined;
}

export interface IAuthSlicer {
  token?: string;
  user?: IUser;
}

export interface IResetUserGetRes {
  id: number;
  email: string;
  username: string;
}

export interface IPreiviewImageProps {
  closeModal: () => void;
  sendImg: () => Promise<void>;
  previeIMG: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITransactions {
  id: number;
  interDetail: IInterDetails | null;
  bank_name: string;
  invoiceRef: string;
  amount: number;
  purpose: string;
  status: string;
  date: string;
  route_num: null;
  sender: IUser;
  receiver: IUser | null;
  ben_acct: string | null;
  type: string;
}

export interface IInterDetails {
  id: number;
  bic_code: string;
  iban_number: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  country: string;
  full_name: string;
}

export interface ITxtcard {
  transaction: ITransactions;
}

export interface ITxtSameFormData {
  amount: string;
  account_number: string;
  purpose?: string;
  beneficiary?: string;
}

export interface ITransferToSameContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: ITxtSameFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<ITxtSameFormData | undefined>
  >;
}

export interface ITxtSameTwoResponse {
  tx: ITransactions;
  error: boolean;
  msg: string;
}

export interface ITxtOtherFormData {
  first_name: string;
  last_name: string;

  email: string;
  ben_account_number: string;

  bank_name: string;
  route_num: string;
  amount: string;
  purpose: string;
}

export interface ITranserObContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: ITxtOtherFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<ITxtOtherFormData | undefined>
  >;
}

export interface ITxtInterFormData {
  first_name: string;
  last_name: string;
  country: string;
  city: string;
  ben_account_number: string;
  iban_number: string;
  bank_name: string;
  swift_code: string;
  amount: string;
  purpose: string;
}

export interface ITransferInContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: ITxtInterFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<ITxtInterFormData | undefined>
  >;
}

export interface IBreadcrumNav {
  pagenavTitle: string;
  currentPage: string;
}
