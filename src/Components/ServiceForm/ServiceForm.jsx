import { useForm } from 'react-hook-form';

const ServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1 className="text-center py-4">Add Service</h1>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        {/* service name */}
        <div className="">
          <label htmlFor="serviceName" className="form-label">
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
          <label htmlFor="descrip" className="form-label">
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
          <label htmlFor="inputAddress" className="form-label">
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
          <label htmlFor="photo" className="form-label ">
            Photo Url
          </label>
          <input
            type="url"
            className="form-control"
            id="photo"
            {...register('photoUrl', { required: true })}
          />
          {errors.photoUrl && (
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
