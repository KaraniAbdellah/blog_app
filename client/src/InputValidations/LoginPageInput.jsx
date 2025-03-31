import * as yup from "yup";

export const LoginPageSchema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email is not valid"),
    password: yup.string().min(6, "password should contain al least 6 characters")
});
