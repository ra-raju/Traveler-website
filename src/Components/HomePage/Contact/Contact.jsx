import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
const axios = require('axios').default;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post('http://localhost:5000/message', data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          setIsSuccess(true);
          reset();
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="contact-form-section">
      <h3 className="text-center pb-3">Send Your Message</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Mr. xyz"
            {...register('name')}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register('email')}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            {...register('message')}
            required
          ></textarea>
        </div>
        {isSuccess && (
          <div>
            <p>Message sent successfully</p>
          </div>
        )}
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
