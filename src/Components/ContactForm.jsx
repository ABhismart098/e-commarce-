const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="md:py-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get in touch
          </h2>

          <p className="mt-4 max-w-md text-gray-600 dark:text-black-500">
            Have a question or want to work together? Fill out the form and I’ll
            get back to you as soon as possible.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-gray-700 dark:text-black-500">
               <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-black-500">
               <span className="font-medium">info@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-black-500">
               <span className="font-medium">123 Main St, Anytown, USA</span>
            </div>
          </dl>
        </div>

        {/* FORM */}
        <form className="space-y-6 rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl dark:bg-gray-900">

          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm outline-none transition
              focus:border-indigo-600 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm outline-none transition
              focus:border-indigo-600 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="mt-2 w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm outline-none transition
              focus:border-indigo-600 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="mt-2 w-full resize-none border-b-2 border-gray-300 bg-transparent py-2 text-sm outline-none transition
              focus:border-indigo-600 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition
            hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
