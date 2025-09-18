import React from "react";

function UserCard({ user }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div
      className="card shadow-sm w-100 mb-4 border-0 rounded-3 overflow-hidden"
      style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
    >
      <div className="row g-0 align-items-stretch">
        <div className="col-4 col-sm-3 col-md-2 bg-light d-flex align-items-center justify-content-center p-3">
          <img
            src={avatarUrl}
            alt={user.username}
            className="img-fluid rounded-circle border"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              background: "#fff",
            }}
          />
        </div>

        <div className="col-8 col-sm-9 col-md-10">
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title mb-2 fw-bold text-primary">{user.name}</h5>
            <p className="card-text mb-1">
              <i className="bi bi-person-badge-fill text-secondary me-2"></i>
              <strong>Username:</strong> {user.username}
            </p>
            <p className="card-text mb-1">
              <i className="bi bi-envelope-fill text-secondary me-2"></i>
              <strong>Email:</strong> {user.email}
            </p>
            <p className="card-text mb-1">
              <i className="bi bi-telephone-fill text-secondary me-2"></i>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="card-text mb-1">
              <i className="bi bi-building text-secondary me-2"></i>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p className="card-text mb-1">
              <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
              <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
            </p>
            <p className="card-text">
              <i className="bi bi-globe text-secondary me-2"></i>
              <strong>Website:</strong>{" "}
              <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                {user.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
