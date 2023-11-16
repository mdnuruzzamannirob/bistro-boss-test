import { useEffect, useState } from "react";
import image from "../../assets/others/authentication.gif";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };
  return (
    <div
      className={
        "my-0 xl:mx-0 px- min-h-screen flex flex-row-reverse items-center justify-center bg-slate-50"
      }
    >
      <div className="flex-1 flex justify-evenly">
        <div className="">
          <h3 className="mb-14 text-4xl font-semibold text-center">
            Login Now!!!
          </h3>
          <form
            onSubmit={handleSubmit}
            className="card-body shadow-2xl bg-base-100 w-[500px] "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onChange={(e) => {
                  if (validateCaptcha(e.target.value, false) == true) {
                    setDisabled(false);
                  } else {
                    setDisabled(true);
                  }
                }}
                type="text"
                name="captcha"
                placeholder="captcha"
                className="input input-bordered focus:outline-none focus:border-[#BB8506]"
              />
            </div>
            <div className="form-control mt-4">
              {/* <Button disabled={disabled} className={"md:btn-md"}>
                Login
              </Button> */}
              <button disabled={disabled} className="w-full btn btn-warning">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center lg:text-left flex-1 overflow-hidden">
        <img className="w-[1000px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
