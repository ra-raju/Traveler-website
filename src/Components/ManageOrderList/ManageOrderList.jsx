import React from 'react';

const ManageOrderList = (props) => {
  const {
    name,
    email,
    start_date,
    end_date,
    status,
    destination,
    child,
    adult,
    _id,
  } = props.tour;

  // const [changeStatus, setChangeStatus] = useState({});

  //delete post
  const handleRemoveJourney = (id) => {
    const uri = `http://localhost:5000/removejourney/${id}`;
    const process = window.confirm('Are You Sure for Cancel Your Journey?');
    if (process) {
      fetch(uri, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('DELETED! Your Journey Canceled Successfully');
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const handleStatus = (id) => {
    console.log(id);
    const uri = `http://localhost:5000/updatestatus/${id}`;
    fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="tour-card">
        <div className="tour-info">
          <p>
            Full Name: <span className="tour-data"> {name}</span>
          </p>
          <p>
            Email: <span className="tour-data">{email}</span>
          </p>
          <p>
            Journey Date:{' '}
            <span className="tour-data">
              {start_date} to {end_date}
            </span>
          </p>
          <p>
            Destination: <span className="tour-data">{destination}</span>
          </p>
          <p>
            Members:
            <span className="tour-data">
              Adult: {adult} & Child: {child}
            </span>
          </p>
        </div>
        <div className="tour-function">
          <p>
            Status: <span className="status">{status}</span>
          </p>
          <button
            type="button"
            className="btn btn-danger btn-sm mb-3"
            onClick={() => handleStatus(_id)}
          >
            Change Status
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => handleRemoveJourney(_id)}
          >
            Delete Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderList;
