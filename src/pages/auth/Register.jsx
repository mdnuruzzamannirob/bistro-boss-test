import image from "../../assets/others/authentication.gif";
import Button from "../../components/Button";

const Register = () => {
  return (
    <div
      className={
        "my-0 xl:mx-0 px- min-h-screen flex items-center justify-center bg-slate-50"
      }
    >
      <div className="flex-1 flex justify-evenly">
        <div className="">
          <h3 className="mb-14 text-4xl font-semibold text-center">
            Sign Up Now!!!
          </h3>
          <form className="card-body shadow-2xl bg-base-100 w-[500px] ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered outline-none"
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
                className="input outline-none "
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button>Register</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center lg:text-left flex-1 overflow-hidden">
        <img className="-ml-20 w-[1000px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
