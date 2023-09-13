import axios from 'axios'
import { useState, useEffect } from 'react'

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    country: '',
  })

  const [countryes, setCountry] = useState([])

  useEffect(() => {
    const getCountryes = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        const names = data.map(country => country.name.common);
        setCountry(names);
      } catch (error) {
        console.log(error);
      }
    };

    getCountryes();
  }, []);

  const countryesList = countryes.sort()

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSignUp = async (event) => {
    try {
      const { data } = await axios.post('http://localhost:4000/api/auth/signup', event.data)

      console.log(data);

      return {
        user: data.response.user,
      }

    } catch (error) {
      console.log(error);
      return {
        user: null
      }
    }
  }





  return (
    <div className="relative bg-registerFondo bg-no-repeat bg-cover h-screen">
      <section className="relative flex flex-wrap h-screen items-center backdrop-blur-md">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-16">
          <div className="flex-grid mx-8 text-center sm:mx-16">
            <h2 className="text-2xl font-bold sm:text-3xl text-yellow-50">¡SIGN UP!</h2>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white">
                Name and Lastname
              </label>
              <input
                onChange={handleInput}
                type="name"
                name="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white">
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
              <label htmlFor="password" className="block text-lg font-medium text-white">
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

            <div>
              <label htmlFor="photo" className="block text-lg font-medium text-white">
                URL photo
              </label>
              <input
                onChange={handleInput}
                type="photo"
                name="photo"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your url photo"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-lg font-medium text-white">
                Country
              </label>

              <select
                onChange={handleInput}
                name="country"
                id="HeadlineAct"
                className="w-full h-10 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                {countryesList.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>

            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-black">
                You have account?
                <a className="underline" href="/signin">
                  Sign in
                </a>
              </p>

              <button
                onClick={handleSignUp}
                type="submit"
                className="inline-block rounded-lg bg-1 px-5 py-3 text-sm font-medium text-white"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 blur-[0.5px]">
          <img
            alt="Welcome"
            src="/public/register.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default SignUp