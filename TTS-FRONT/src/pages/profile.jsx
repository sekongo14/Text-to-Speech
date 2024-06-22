import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () =>{
  const [user, setUser] = useState(null);

  useEffect(()=>{
    axios.get('/api/profile/${id}')
      .then(Response =>{
        setUser(Response.data);
      })
      .catch(error=>{console.error('Il y a eu une erreur !', error);
    })
  },[]);
  if (!user) return
  <div>Chargement...</div>

  return (
    <div>
      <h1>Profil {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Prenom: {user.first_name}</p>
      <p>Nom: {user.last_name}</p>
    </div>
  );
};

export default Profile;