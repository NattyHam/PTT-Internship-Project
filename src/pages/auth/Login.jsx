import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";


const schema = z.object({
  id: z.string().min(1, "ID is required"),
  password: z.string().min(4, "Password too short"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

//backend
//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("/api/login", data);
//       localStorage.setItem("token", res.data.token);
//       navigate("/");
//     } catch (err) {
//       alert("Login failed: " + err.response?.data?.message || "Unknown error");
//     }
//   }; 

const onSubmit = async (data) => {
  const { id, password } = data;

  if (id === "6499" && password === "12345") {
    localStorage.setItem("token", "mock-token");
    navigate("/");
  } else {
    alert("ID or Password is incorrect");
  }
};


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <img src={logo}
        alt="PTT Logo"
        className="mx-auto h-20 w-auto"/>


        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">ID</label>
          <input
            type="text"
            {...register("id")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="w-full text-right mb-4">
        <span className="text-sm text-primary-dark hover:underline cursor-pointer">
            Forget password?
        </span>
        </div>


        <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600"
        >
        Login
        </button>

      </form>
      

    </div>
  );
};

export default Login;
