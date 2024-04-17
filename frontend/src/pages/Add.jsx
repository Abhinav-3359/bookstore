import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const bg = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2DVwx_vSEtTqSCyZunTHrj-Im7wxpzK-5qfevUen1Q&s')",
    height: "100vh",
    width: "100%",
    marginTop: "-70px",
    fontSize: "50px",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div style={bg} className="form">
      <h1 style={{color: "magenta"}}>Add New Book</h1>
      <input
      style={{marginLeft: "30%"}}
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        cols={3}
        style={{marginLeft: "30%",marginRight:"49%"}}
        height="95px"
        width="256px"
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
      style={{marginLeft: "30%"}}
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
      style={{marginLeft: "30%"}}
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button style={{height: "30px",width: "50%", marginLeft:"25%"}}  onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link style={{fontSize: "22px"}}  to="/">See all books</Link>
    </div>
  );
};

export default Add;
