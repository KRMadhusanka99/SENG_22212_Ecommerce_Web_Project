import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/adminprofile.css';
import user from './pictures/user-icon.webp';

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedAdminData, setUpdatedAdminData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    photo: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8090/admin/profile")
      .then((response) => {
        setAdminData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedAdminData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    setUpdatedAdminData((prevState) => ({
      ...prevState,
      photo: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUpdating(true);
    const formData = new FormData();
    formData.append("firstname", updatedAdminData.firstname);
    formData.append("lastname", updatedAdminData.lastname);
    formData.append("email", updatedAdminData.email);
    formData.append("phoneno", updatedAdminData.phoneno);
    formData.append("photo", updatedAdminData.photo);
    axios
      .put("http://localhost:8090/admin/profile", formData)
      .then((response) => {
        setAdminData(response.data);
        setIsUpdating(false);
      })
      .catch((error) => {
        console.log(error);
        setIsUpdating(false);
      });
  };

  return (
    <div className="admin-profile">
      {isLoading ? (
        <p style={{fontWeight:'bold', fontSize:'20px'}}>Loading...</p>
      ) : (
        <>
          <div className="admin-photo">
            {/* <img src={adminData.photo} alt="Admin Profile" /> */}
            <img src={user} alt="User Icon" />
        <input type="file" name="photo" onChange={handlePhotoChange} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={updatedAdminData.firstname || adminData.firstname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={updatedAdminData.lastname || adminData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={updatedAdminData.email || adminData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                value={updatedAdminData.email || adminData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={updatedAdminData.email || adminData.email}
                onChange={handleInputChange}
                minLength="8"
                required
              />
            </div>
            <div className="image-upload">
            <label htmlFor="photo">Photo</label>
            <input
            type="file"
            className="form-control-file"
            id="photo"
            value={updatedAdminData.email || adminData.email}
            onChange={handleInputChange}
            />
            </div>
            <button type="submit">Update Profile</button>
        </form>
        </>
    )}
    </div>
  );
}

export default AdminProfile;