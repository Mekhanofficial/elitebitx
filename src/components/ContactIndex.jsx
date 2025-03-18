
import React from "react";
import SideImg from "../components/ContactImg";
import Input from "../components/Input";
import Button from "../components/Buttons";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="grid gap-20 bg-slate-950 custom-container lg:grid-cols-[auto_1fr] relative z-10"
    >
      <SideImg />

      <div className="mx-20">
        <h2 className="text-white mt-10 text-xl md:text-2xl">CONTACT US</h2>
        <p className="mt-5 text-[#97afd5]">
          We are always open and we welcome and questions you have for our team.
          If you wish to get in touch, please fill out the form below. Someone
          from our team will get back to you shortly.
        </p>

        <form action="" onSubmit={(e) => e.preventDefault()} className="mt-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <Input
              id={"name"}
              label={"your name"}
              placeholder={"Introduce yourself"}
            />
            <Input
              id={"name"}
              label={"your email"}
              placeholder={"Who do we reply to"}
            />
          </div>

          <div className="grid gap-3 mt-10">
            <label htmlFor="" className="text-white uppercase">
              your message
            </label>
            <textarea
              id=""
              placeholder="Leave your question or comment here"
              className="border border-[rgba(101,_119,_151,_0.4)] rounded-sm text-[#97afd5] outline-none placeholder:text-[#97afd5] placeholder:opacity-70 px-5 py-3 bg-transparent h-40 resize-none"
            ></textarea>
          </div>

          <button
            type="fill"
            className="border-zinc-400  block ml-auto mt-10` p-2  border-x-2  font-semibold  text-white text-sm rounded-xl w-36 mx-5 mt-5 mb-10 hover:bg-gray-900 hover:border-zinc-700 lg:w-44 lg:p-3 hover:border-x-4 hover:font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
