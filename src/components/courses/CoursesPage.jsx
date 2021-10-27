const CoursesPage = () => {
  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input name="title" id="title" className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoursesPage;
