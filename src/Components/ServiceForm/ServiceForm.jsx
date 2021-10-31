import { useForm } from 'react-hook-form';
const axios = require('axios').default;

const ServiceForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios.post('http://localhost:5000/addservice', data).then((res) => {
      const id = res.data.insertedId;
      if (id) {
        alert('service is added!');
        reset();
      }
    });
  };
  return (
    <div>
      <h1 className="text-center py-4">Add Service</h1>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        {/* service name */}
        <div className="">
          <label htmlhtmlFor="serviceName" className="form-label">
            Service Name
          </label>
          <input
            type="text"
            className="form-control"
            id="serviceName"
            {...register('serviceName')}
          />
          {errors.serviceName && (
            <span className="error-message">This field is required</span>
          )}
        </div>{' '}
        {/* phone number */}
        <div className="">
          <label htmlhtmlFor="descrip" className="form-label">
            Service Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="descrip"
            {...register('description', { required: true })}
          />
          {errors.description && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* price*/}
        <div className="">
          <label htmlhtmlFor="inputAddress" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            {...register('price', { required: true })}
          />
          {errors.price && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        {/* photo */}
        <div className="">
          <label htmlhtmlFor="photo" className="form-label  ">
            Photo Url 1
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            {...register('photoUrl1', { required: true })}
          />
          {errors.photoUrl1 && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="">
          <label htmlhtmlFor="photo" className="form-label  ">
            Photo Url 2
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            {...register('photoUrl2', { required: true })}
          />
          {errors.photoUrl2 && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="">
          <label htmlhtmlFor="photo" className="form-label  ">
            Photo Url 3
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            {...register('photoUrl3', { required: true })}
          />
          {errors.photoUrl3 && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="">
          <label htmlhtmlFor="photo" className="form-label  ">
            Photo Url 4
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            {...register('photoUrl4', { required: true })}
          />
          {errors.photoUrl4 && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className=" my-4">
          <button type="submit" className="btn btn-primary">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
