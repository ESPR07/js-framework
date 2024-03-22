// import React, { ChangeEvent, useState } from "react";
import React from "react";
import Button from "../shared/button";
import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";

function ContactForm() {
  // const [fullName, setFullName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [subject, setSubject] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

  // function inputChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
  //   if(event.target.name === "fullName") {
  //     console.log(event.target.value.length);
  //     setFullName(event.target.value);
  //   };

  //   if(event.target.name === "email") {
  //     setEmail(event.target.value);
  //   };

  //   if(event.target.name === "subject") {
  //     setSubject(event.target.value);
  //   };

  //   if(event.target.name === "message") {
  //     setMessage(event.target.value);
  //   };
  // }

  type FormData = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit() {
    alert("Thank you for contacting us! We'll come back to you as soon as are able.")
    reset()
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>Contact Us!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contactForm}
        title="Contact Form"
      >
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          placeholder="John Smith"
          {...register("fullName", {
            required: true,
            minLength: {
              value: 3,
              message: "Name must contain at least 3 characters",
            },
          })}
        ></input>
        {errors.fullName && (
          <p className={styles.error}>{errors.fullName.message}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="mail@mail.fix"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email adress",
            },
          })}
        ></input>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          placeholder="Return Product"
          {...register("subject", {
            required: true,
            minLength: {
              value: 3,
              message: "Subject must contain at least 3 characters",
            },
          })}
        ></input>
        {errors.subject && (
          <p className={styles.error}>{errors.subject.message}</p>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          rows={5}
          id="message"
          placeholder="Write a message!"
          {...register("message", {
            required: true,
            minLength: {
              value: 3,
              message: "Message must be at least 3 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        <Button text="Send" type="submit" handleEvent={() => {}}></Button>
      </form>
    </div>
  );
}

export default ContactForm;
