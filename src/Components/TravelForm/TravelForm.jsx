import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './TravelForm.css';
const axios = require('axios').default;

const TravelForm = (props) => {
  // const { place } = props.data;
  console.log(props);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.status = 'pending';
    axios
      .post('http://localhost:5000/submittedtour', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Thanks! Your form is Submitted');
          reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="travel-form">
      <h1>Welcome {user.displayName}</h1>
      <h4>Fill this form, we contact with you very soon</h4>

      <form className="row g-3 container" onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="col-md-12">
          <label htmlhtmlFor="name" className="form-label text-white">
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            id="name"
            value={user.displayName}
            readOnly
            {...register('name')}
          />
        </div>
        {/* email */}
        <div className="col-md-6">
          <label htmlhtmlFor="inputEmail4" className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={user.email}
            readOnly
            {...register('email')}
          />
        </div>
        {/* phone number */}
        <div className="col-md-6">
          <label htmlhtmlFor="phone" className="form-label text-white">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* present address */}
        <div className="col-12">
          <label htmlhtmlFor="inputAddress" className="form-label text-white">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="present Address"
            {...register('present_Address', { required: true })}
          />
          {errors.present_Address && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* destination */}
        <div className="col-12">
          <label htmlhtmlFor="inputAddress2" className="form-label text-white">
            Destination
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="where you want to go?"
            {...register('destination', { required: true })}
          />
          {errors.destination && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* start journey */}
        <div className="col-md-6">
          <label htmlhtmlFor="inputCity" className="form-label text-white">
            Start Journey
          </label>
          <input
            type="date"
            className="form-control"
            {...register('start_date', { required: true })}
          />
          {errors.start_date && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* end journey */}
        <div className="col-md-6">
          <label htmlhtmlFor="inputCity" className="form-label text-white">
            End Journey
          </label>
          <input
            type="date"
            className="form-control"
            {...register('end_date', { required: true })}
          />
          {errors.end_date && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* Adult member */}
        <div className="col-md-6">
          <label className="visually-hidden" htmlhtmlFor="autoSizingSelect">
            Adult Member
          </label>
          <select
            className="form-select"
            id="autoSizingSelect"
            {...register('adult', { required: true })}
          >
            <option defaultValue>Adult...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* Child member */}
        <div className="col-md-6">
          <label className="visually-hidden" htmlhtmlFor="autoSizingSelect">
            Child Member
          </label>
          <select
            className="form-select"
            id="autoSizingSelect"
            {...register('child', { required: true })}
          >
            <option defaultValue>Child...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
