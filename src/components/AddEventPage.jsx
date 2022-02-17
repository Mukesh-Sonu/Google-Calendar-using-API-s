import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddEventPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addingevent");
  };

  return (
    <div>
      <Link to={"/addingevent"}>
        <div className="btn btn-primary" onClick={handleClick}>
          Add Event
        </div>
      </Link>
    </div>
  );
}

export default AddEventPage;
