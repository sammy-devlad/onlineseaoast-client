import React from "react";
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")

    .required("Email is required"),

  password: yup
    .string()
    .min(5)
    .max(12)
    .matches(passwordRules, "Please create a stronger password")
    .required("Password Required"),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

export const CreateAccOneSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  // phone_number: yup.string().notRequired(),
  date_of_birth: yup.string().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  next_of_kin: yup.string().required("Next of kin is required"),
});

export const CreateAccTwoSchema = yup.object().shape({
  address: yup.string().required("Street is required"),
  city: yup.string().required("City  is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zipcode: yup.string().required("Zipcode is required"),
});
export const CreateAccThreeSchema = yup.object().shape({
  security_pin: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
  account_type: yup.string().required("account type is required"),
});

export const Loginschema = yup.object().shape({
  username: yup.string().required("Account Number is required"),
  password: yup.string().min(5).max(12).required("Password is Required"),
});

export const SecuritySchema = yup.object().shape({
  security_code: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export const ResetPasswordSchema = yup.object().shape({
  newpassword: yup
    .string()
    .min(5)
    .max(12)
    .matches(passwordRules, "Please create a stronger password")
    .required("New Password Required"),

  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});
