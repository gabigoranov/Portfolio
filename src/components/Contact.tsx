import { useState } from "react";
import "../assets/styles/contact.css";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import ContactComponent from "./ContactComponent";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('message', form.message);

      const response = await fetch('https://formspree.io/f/manddzdb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        alert('Thank you for your message!');
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        setErrors({});
      } else {
        alert('There was a problem submitting your message.');
      }
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
                className="contact__input card"
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
                className="contact__input card"
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
              className="contact__input card"
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
              className="contact__textarea card"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </div>

          <button className="contact__button card" type="submit">
            Send
          </button>
        </form>
        <div className="contact-info__container">
          <ContactComponent icon={MdMailOutline} title="Email" value="gabi.goranov.work@gmail.com"/>
          <ContactComponent icon={MdOutlinePhone} title="Phone" value="+359 89 658 3578"/>
          <ContactComponent icon={FaGithub} title="Github" value="gabigoranov"/>
          <ContactComponent icon={FaInstagram} title="Instagram" value="gabi.goranov"/>
        </div>
      </div>
    </section>
  );
}
