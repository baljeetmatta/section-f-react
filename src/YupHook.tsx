import { useForm } from "react-hook-form";
import "./App.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./validators/userSchema";
type FormData = {
    name: string,
    age: number,
    password:string,
    confirmpassword:string
}
const YupHook = () => {


    const { handleSubmit, register, formState } = useForm({
        resolver: yupResolver(userSchema)
    });

    const { errors } = formState;


    const mySubmit = (data: any) => {

        console.log(data);






    }
    //required,minLength,maxLength,min,max,pattern,validate
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(mySubmit)}>
                    <div>
                        <input type="text" {...register("name")} />
                        {/* {errors.name?.message} */}
                        {errors.name ? <p className="error-msg">{errors.name.message}</p> : ""}
                    </div>
                    <div>
                        <input type="number" {...register("age")} />
                        {errors.age ? <p className="error-msg">{errors.age.message}</p> : ""}
                    </div>
                    <div>
                        <input type="password" {...register("password")}/>
                                {errors.password ? <p className="error-msg">{errors.password.message}</p> : ""}
                
                    </div>
                     <div>
                        <input type="password" {...register("confirmpassword")}/>
                                {errors.confirmpassword ? <p className="error-msg">{errors.confirmpassword.message}</p> : ""}
                
                    </div>
                     <div>
                        <input type="text" {...register("email")}/>
                                {errors.email ? <p className="error-msg">{errors.email.message}</p> : ""}
                
                    </div>
                    <input type="submit" />


                </form>

            </div>
        </>
    )

}
export default YupHook;
