import { useState } from "react";
import "../assets/styles/contact.css";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: Partial<FormData> = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Get In Touch</h2>
      <p className="contact__description">
        I'm always open to connecting with others interested in web development,
        technology, or creative projects. Feel free to reach out - I'd be happy
        to hear from you.
      </p>
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__names">
            <div>
                <input
                className="contact__input"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                />
                {errors.firstName && (
                <span className="contact__error">{errors.firstName}</span>
                )}
            </div>
            <div>
                <input
                className="contact__input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                />
                {errors.lastName && (
                <span className="contact__error">{errors.lastName}</span>
                )}
            </div>
            </div>

            <div>
            <input
                type="text"
                name="email"
                className="contact__input"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
            />
            {errors.email && (
                <span className="contact__error">{errors.email}</span>
            )}
            </div>

            <div>
            <textarea
                name="message"
                id="message-textarea"
                className="contact__textarea"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
            ></textarea>
            {errors.message && (
                <span className="contact__error">{errors.message}</span>
            )}
            </div>

            <button className="contact__button" type="submit">
            Send
            </button>
        </form>
        <div className="contact-info__container">
            <div className="contact-info">
                <div className="contact-info__icon">
                <MdMailOutline />
                </div>
                <div className="contact-info__text">
                <h4>Email</h4>
                <p>gabi.goranov.work@gmail.com</p>
                </div>
            </div>

            <div className="contact-info">
                <div className="contact-info__icon">
                <MdOutlinePhone />
                </div>
                <div className="contact-info__text">
                <h4>Phone</h4>
                <p>+359 89 658 2578</p>
                </div>
            </div>
        </div>
      </div>
      
    </section>
  );
}
