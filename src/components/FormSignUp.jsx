const FormSignUp = () => {
  return (
    <section className="relative flex flex-wrap h-screen items-center backdrop-blur-md">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-16">
        <div className="flex-grid mx-8 text-center sm:mx-16">
          <h2 className="text-2xl font-bold sm:text-3xl">¡SIGN UP!</h2>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <input
              type="name"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>

          <div className="flex justify-center">
            <button
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
          src="/public/register.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default FormSignUp;
