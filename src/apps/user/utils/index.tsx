import * as yup from "yup";

export const toggleSidebar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;

  if (!sidebar.classList.contains("toggled")) {
    sidebarToggler.classList.remove("fa-bars");
    sidebarToggler.classList.add("fa-xmark");
    sidebar.classList.add("toggled");
  } else {
    sidebarToggler.classList.remove("fa-xmark");
    sidebarToggler.classList.add("fa-bars");
    sidebar.classList.remove("toggled");
  }
};

export const clossSideBar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;
  sidebarToggler.classList.remove("fa-xmark");
  sidebarToggler.classList.add("fa-bars");
  sidebar.classList.remove("toggled");
};

export const formatNumber = (num: number) => {
  let formattedNum = num.toLocaleString("en-US");
  return formattedNum;
};

export enum STATUS {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  DECLINED = "DECLINED",
}

export const TransferToSameSchema = (account_numbers: string) =>
  yup.object().shape({
    amount: yup
      .number()
      .positive()
      .integer()
      .min(10, "Minimum is $10")
      .required("Amount is required"),
    account_number: yup
      .string()
      .notOneOf([account_numbers], "You cant use transfer to your account")
      .required("Account number is required"),

    purpose: yup.string().notRequired(),

    beneficiary: yup.string().notRequired(),
  });

export const TransferToSameSchemaTwo = yup.object().shape({
  security_code: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
});

export const TransferOBOneSchema = yup.object().shape({
  first_name: yup.string().required("Firstname Is Required"),
  last_name: yup.string().required("Lastname Is Required"),

  email: yup.string().email("Email is invalid").notRequired(),
  ben_account_number: yup.string().required("Benneficiary name Is Required"),

  bank_name: yup.string().required("Bank name Is Required"),
  route_num: yup.string().required("ABA  Is Required"),
  amount: yup
    .number()
    .positive()
    .integer()
    .min(20, "Minimum is $20")
    .required("Amount is required"),
  purpose: yup.string().notRequired(),
});

export const TransferToInterOneSchema = yup.object().shape({
  first_name: yup.string().required("Firstname Is Required"),
  last_name: yup.string().required("Lastname Is Required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  ben_account_number: yup.string().required("Benneficiary name Is Required"),
  iban_number: yup.string().required("IBAN Number  Is Required"),
  bank_name: yup.string().required("Bank name Is Required"),
  swift_code: yup.string().required("Swift/BIC Code  Is Required"),
  amount: yup
    .number()
    .positive()
    .integer()
    .min(100, "Minimum is $20")
    .required("Amount is required"),
  purpose: yup.string().notRequired(),
});

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

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const changePasswordSchema = yup.object().shape({
  oldpassword: yup.string().min(5).max(12).required("Old Password Required"),

  newpassword: yup
    .string()
    .min(5)
    .max(12)
    .matches(passwordRules, "Please create a stronger password")
    .required("Password Required"),

  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

export const resetPinSchema = (oldpin: string) =>
  yup.object().shape({
    oldpin: yup
      .string()
      .min(4, "Security pin must be 4 characters long")
      .oneOf([oldpin], "Old Security pin is invalid")
      .max(4, "Security pin must be 4 characters long")
      .required("Security pin is required"),

    newpin: yup
      .string()
      .min(4, "Security pin must be 4 characters long")
      .max(4, "Security pin must be 4 characters long")
      .notOneOf([yup.ref("oldpin")], "Security pin must be diffrent")
      .required("Security pin is required"),
  });
