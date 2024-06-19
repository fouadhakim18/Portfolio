import React from "react";
import ContactForm from "./form";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="lg:w-full md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2 justify-center">
          <ContactForm />
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center flex flex-col items-center justify-center gap-6">
            {/* <p className="leading-normal my-5">
              49 Smith St.
              <br />
              Saint Cloud, MN 56301
            </p> */}
            {/* <br /> */}
            <span className="inline-flex">
              {/* Facebook  */}
              <a
                className=""
                href="https://www.facebook.com/profile.php?id=100024270942517&mibextid=ZbWKwL"
                target="_blank"
              >
                <svg
                  fill="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 hover:stroke-primary transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H8v4h2v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* Github  */}
              <a
                className="ml-4 text-gray-500"
                href="https://github.com/fouadhakim18"
                target="_blank"
              >
                <svg
                  fill="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 hover:stroke-primary transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1C5.92 1 1 5.92 1 12c0 4.85 3.28 8.96 7.83 10.41.57.1.77-.25.77-.55v-1.91c-3.18.69-3.85-1.54-3.85-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.67 1.24 3.32.94.1-.74.4-1.24.72-1.52-2.54-.29-5.22-1.27-5.22-5.64 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.17a11.16 11.16 0 012.92-.39c.99.01 1.98.13 2.92.39 2.22-1.48 3.2-1.17 3.2-1.17.64 1.6.24 2.79.12 3.08.74.8 1.19 1.82 1.19 3.07 0 4.38-2.68 5.34-5.23 5.62.41.36.77 1.1.77 2.22v3.29c0 .31.21.66.78.55C20.72 20.96 24 16.85 24 12 24 5.92 19.08 1 12 1z" />
                </svg>
              </a>
              {/* Linkedin  */}
              <a
                className="ml-4 text-gray-500"
                target="_blank"
                href="https://www.linkedin.com/in/hakim-maroc-61039427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <svg
                  fill="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 hover:stroke-primary transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v6H16v-6a2 2 0 10-4 0v6H6v-6a6 6 0 016-6z" />
                  <rect width="4" height="12" x="2" y="9" rx="1" ry="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </span>
            <a className="text-primary">Copyright © 2024 Hakim MAROC</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
