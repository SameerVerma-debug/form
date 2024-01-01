import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup
      .string("Name must have only alphabets")
      .required("Name is Required!"),
    email: yup
      .string()
      .email("Enter correct email")
      .required("Email is Required!"),
    age: yup.number("Number!!").positive().integer().min(18).required(),
    password: yup
      .string()
      .min(8, "Length must be 8 or above!")
      .required("Password is Required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
  };

  return (
    <div className="form-container">
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <h1>Form</h1>
        <div className="label-input-container">
          <label for="fullName">Full Name:</label>
          <div className="input-error-container">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />

            <p className="error">
              {errors.fullName ? errors.fullName.message : ""}
            </p>
          </div>
        </div>

        <div className="label-input-container">
          <label for="email">Email:</label>
          <div className="input-error-container">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />

            <p className="error">{errors.email ? errors.email.message : ""}</p>
          </div>
        </div>

        <div className="label-input-container">
          <label for="Age">Age:</label>
          <div className="input-error-container">
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Age"
              {...register("age")}
            />

            <p className="error">{errors.age ? errors.age.message : ""}</p>
          </div>
        </div>

        <div className="label-input-container">
          <label for="password">Password:</label>
          <div className="input-error-container">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            <p className="error">
              {errors.password ? errors.password.message : ""}
            </p>
          </div>
        </div>

        <div className="label-input-container">
          <label for="confirmPassword">Confirm Password:</label>
          <div className="input-error-container">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p className="error">
              {errors.confirmPassword ? errors.confirmPassword.message : ""}
            </p>
          </div>
        </div>
        <button id="submit">Submit</button>
      </form>
    </div>
  );
};
