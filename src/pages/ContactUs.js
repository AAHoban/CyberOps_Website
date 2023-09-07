import React, { useState, useRef } from 'react';
import '../css/ContactUs.scss';
import FAQ from '../components/FAQ';
import emailjs from '@emailjs/browser';

function ContactUs() {

  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [hideSuccessMessage, setHideSuccessMessage] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const handleAnimationEnd = () => {
    if(hideSuccessMessage) {
      setEmailSent(false);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (submitDisabled) {
      return;
    }
    setSubmitDisabled(true);

    emailjs.sendForm('service_hrodrhq', 'template_6vdv0kw', form.current, 'cNv-OZtQFAGuCSHSS')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSent(true);
          form.current.reset();

          setTimeout(() => {
            setHideSuccessMessage(true);
          }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setSubmitDisabled(false);
      })
  };

  return (
    <div className="contactContainer" id="top">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-group">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              id="user_fname"
              name="user_fname"
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="user_lname"
              name="user_lname"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
              type="text"
              id="user_email"
              name="user_email"
              required
            />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">
          {submitDisabled ? 'Sending...' : 'Submit'}
        </button>
      </form>
      {emailSent && <div className={`success-message ${emailSent && !hideSuccessMessage ? 'visible' : hideSuccessMessage ? 'hide' : ''}`}
      onAnimationEnd={handleAnimationEnd}
      >
        Message has been sent!
      </div>}
      <div className="faqs">
        <h1>FAQ</h1>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
