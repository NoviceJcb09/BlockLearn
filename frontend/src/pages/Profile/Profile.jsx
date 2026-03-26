import { useState } from "react";
import Icon from "../../components/Icon";
import { profileUser, profileStats, profileBadges } from "../../data/profileData";
import "./Profile.css";

const COMPLETION_FIELDS = ["firstName", "lastName", "email", "contactNumber", "gender", "birthdate", "country", "timezone", "description"];

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profileUser);

  const completionPct = Math.round(
    (COMPLETION_FIELDS.filter((f) => form[f]).length / COMPLETION_FIELDS.length) * 100
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const autoCompleteMap = {
    firstName: "given-name",
    lastName: "family-name",
    email: "email",
    contactNumber: "tel",
    birthdate: "off",
    gender: "off",
    country: "country-name",
    timezone: "off",
    description: "off",
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <section className="profile-header">
        <div className="profile-identity">
          <div className="avatar">{form.firstName[0]}</div>
          <div>
            <h2>{form.firstName} {form.lastName}</h2>
            <p>{form.email}</p>
          </div>
        </div>
        <div className="profile-completion">
          <span>Profile Completion — {completionPct}%</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completionPct}%` }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="profile-stats">
        {profileStats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div>
              <p className="stat-label">{stat.label}</p>
              <div className="stat-value">
                {stat.isImg && <img src={stat.icon} alt={stat.label} />}
                {stat.value}
              </div>
            </div>
            {!stat.isImg && (
              <span className="stat-icon-bg" style={{ backgroundColor: stat.iconBg }}>
                <Icon name={stat.icon} size={24} />
              </span>
            )}
          </div>
        ))}
      </section>

      {/* Badges */}
      <section className="profile-badges">
        <h2>Achievements</h2>
        <div className="badges-grid">
          {profileBadges.map((badge) => (
            <span key={badge.id} className="badge">
              {badge.icon} {badge.label}
            </span>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="profile-form-card">
        <div className="card-header">
          <h2>Personal Information</h2>
          {editing ? (
            <button className="save-btn" onClick={() => setEditing(false)}>Save</button>
          ) : (
            <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
          )}
        </div>

        <div className="form-grid">
          {[
            { name: "firstName", label: "First Name" },
            { name: "lastName", label: "Last Name" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "contactNumber", label: "Contact Number" },
            { name: "birthdate", label: "Birthdate", type: "date" },
            { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Prefer not to say"] },
            { name: "country", label: "Country" },
            { name: "timezone", label: "Timezone" },
          ].map(({ name, label, type = "text", options }) => (
            <div key={name} className="form-group">
              <label htmlFor={name}>{label}</label>
              {type === "select" ? (
                <select id={name} name={name} value={form[name]} onChange={handleChange} disabled={!editing} autoComplete={autoCompleteMap[name]}>
                  {options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={name} type={type} name={name} value={form[name]} onChange={handleChange} disabled={!editing} autoComplete={autoCompleteMap[name]} />
              )}
            </div>
          ))}

          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Tell something about yourself..."
              autoComplete="off"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
