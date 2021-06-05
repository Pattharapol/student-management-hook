const StudentList = (props) => {
  const { students } = props;
  // console.log(students);
  return (
    <div className=" container center">
      <h3>Hello From StudentList.JS</h3>
      <div className="row">
        {students.map((std) => (
          <div className="col s4" key={std.id}>
            <div className="card">
              <div className="card-content">
                <p>ID : {std.id}</p>
                <p>Name : {std.name}</p>
                <p>Age : {std.age}</p>
                <p>Faculty : {std.faculty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
