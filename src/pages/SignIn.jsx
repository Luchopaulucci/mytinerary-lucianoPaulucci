import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userActions";
import { useState } from "react";

const SignIn = () => {
  const dispatch = useDispatch();

  const store = useSelector(store => store.userReducer)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      dispatch(user_login({
        data: formData
      }))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative bg-loginFondo bg-no-repeat bg-cover h-screen">
      <section className="relative flex flex-wrap h-screen items-center backdrop-blur-md">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-16">
          <div className="flex-grid mx-8 text-center sm:mx-16">
            <h2 className="text-2xl font-bold sm:text-3xl">GO TO TRAVEL!</h2>
            <p className="mt-4 text-black">
              ¡Find your perfect trip, designed by insiders who know and love their cities!
            </p>
          </div>

          <form onSubmit={handleLogin} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                onChange={handleInput}
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                onChange={handleInput}
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-black">
                No account?
                <a className="underline" href="/signup">
                  Sign up
                </a>
              </p>

              <button
                onClick={handleLogin}
                type="submit"
                className="inline-block rounded-lg bg-1 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 blur-[0.5px]">
          <img
            alt="Welcome"
            src="/public/login.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default SignIn;
