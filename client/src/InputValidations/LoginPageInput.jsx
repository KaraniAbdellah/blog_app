import * as yup from "yup";

export const LoginPageSchema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email is not valid").required(),
    password: yup.string().required()
});

