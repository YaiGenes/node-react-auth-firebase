import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    try {
      setError("");
      await auth.signOut();
      history("/login");
    } catch (error) {
      setError("Logout error");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="text-center">
            <strong>Email:</strong>
            {currentUser.email}
          </div>
          <Link to="/update-profile" className="btn btn-primary w-100 m-3">
            Update
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
