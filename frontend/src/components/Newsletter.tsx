import { Btn, Input } from "..";

const Newsletter = () => {
  return (
    <section>
      <div className="md:max-container lg:px-0 px-10 py-20 text-center bg-[url('/src/assets/images/newsletter-bg.png')] rounded-2xl">
        <div className="max-md:w-3/5 mx-auto">
          <h1 className="lg:text-4xl md:text-3xl pb-8 text-white text-2xl font-semibold lg:w-1/3 mx-auto">
            Subscribe to our Newsletter
          </h1>
          <form
            onSubmit={e => e.preventDefault()}
            action="#"
            className="flex max-md:flex-col lg:w-3/4 *:px-4 *:py-2 mx-auto gap-5 *:w-full md:*:mt-6 *:mt-4"
          >
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              className="bg-transparent"
            />
            <Input
              type="email"
              name="Email"
              className="bg-transparent"
              placeholder="Email address"
            />
            <Btn text="Subscribe Now" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
