import imgLogo from "../../../assets/logo.png";
import imgLogin from "../../../assets/login.png";
const Register = () => {
  return (
    //   <!-- component -->
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={imgLogin}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <div className="text-2xl font-semibold mb-8 flex justify-center">
          <img src={imgLogo} alt="" className="w-60 h-auto" />
        </div>
        <form action="#" method="POST">
          {/* <!-- Username Input --> */}
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              //   autocomplete="off"
            />
          </div>
           {/* <!-- Username Input --> */}
           <div className="mb-4">
           <label className="block text-gray-600">Password</label>
           <input
             type="text"
             id="password"
             name="password"
             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
             //   autocomplete="off"
           />
         </div>
        
          {/* <!-- Password Input --> */}
          <div className="mb-4">
            <label className="block text-gray-600">Konfirmasi Password</label>
            <input
              type="Konfirmasi password"
              id="Konfirmasi password"
              name="Konfirmasi password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              //   autocomplete="off"
            />
          </div>
          {/* <!-- Remember Me Checkbox --> */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label className="text-gray-600 ml-2">Remember Me</label>
          </div>
          {/* <!-- Forgot Password Link --> */}
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* <!-- Login Button --> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
          <a href="/loginPage" className="hover:underline">
            Daftar
          </a>
          </button>
        </form>

      
  
      </div>
    </div>
  );
};

export default Register;
