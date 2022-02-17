function AddingEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Add Title</label>
            <input className="form-control" name="title" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              name="description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input className="form-control" name="location" />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input className="form-control" type="date" name="startDate" />
          </div>
          <div className="mb-3">
            <label className="form-label">End Date</label>
            <input className="form-control" type="date" name="endDate" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddingEvent;
