
import * as yup from "yup"
import { passwordSchema } from "./passwordSchema"
export const userSchema = yup.object({
    name: yup.string()
        .required("Name must be given")
        .min(4, "Name must of 4 characters")
        .trim()
        .lowercase(),
    age: yup.number()
        .required("Age is required"),
    // .min(18, "Age must >18"),
    password:passwordSchema,

    confirmpassword: yup.string().oneOf([yup.ref("password")], "Password must match"),
    email: yup.string()
        .when("age", {
            is: (age: number) => age >= 18,
            then: schema =>
                schema
                    .required("Email is required")
                    .email("Email must be valid")
                    .test("EmailExists","Email already exists",
                      async  value=>{
                                // if (value.startsWith("admin"))
                                //     return false;
                                // else 
                                //     return true;
                               return !value.startsWith("admin")
                            //    let response=await fetch();
                            //    let output=await response.json();
                    }),
            otherwise:schema=>
                schema.notRequired()




        })
    // .required("email is required")
    // .email("Email not valid")


})