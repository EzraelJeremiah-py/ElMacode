// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://elihud-tumaini.onrender.com/api/portfolio") // Elihudi Tumaini API
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="min-vh-100 bg-light text-dark d-flex flex-column">
      {/* Hero */}
      <header
        className="py-5 shadow-lg text-center"
        style={{
          backgroundColor: "#1e3d59", // deep analytic blue
          borderRadius: "20px",
          margin: "20px auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          color: "white", // gold text
          maxWidth: "900px"
        }}
      >
        <h1 className="fw-bold mb-2">{portfolio.name}</h1>
        <h3 className="fw-light mb-3">{portfolio.title}</h3>
        <p className="mt-3">{portfolio.profile}</p>
      </header>

      <main className="container py-5 flex-grow-1">
        {/* Skills in a single floating card */}
        <section className="mb-5 text-center">
          <h2 className="text-primary mb-3">Skills</h2>
          <div
            className="shadow-lg p-4 mx-auto"
            style={{
              background: "linear-gradient(135deg, #f5c518, #ffc107)", // gold gradient
              color: "black",
              borderRadius: "20px",
              maxWidth: "900px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div className="row justify-content-center">
              {portfolio.skills.map((s, i) => (
                <div key={i} className="col-md-4 mb-3">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "50px",
                      padding: "10px 20px",
                      fontWeight: "500",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-5 text-center">
          <h2 className="text-secondary mb-3">Qualifications</h2>
          <ul className="list-group">
            {portfolio.qualifications.map((q, i) => (
              <li key={i} className="list-group-item bg-light text-dark border-dark">
                {q}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects as floating advanced cards */}
        <section className="mb-5 text-center">
          <h2 className="text-success mb-3">Projects</h2>
          <div className="row justify-content-center">
            {portfolio.projects.map((p, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div
                  className="shadow-lg p-4 h-100 text-center"
                  style={{
                    background: "linear-gradient(135deg, #1e3d59, #3a6ea5)", // analytic blue gradient
                    color: "white",
                    borderRadius: "15px",
                    padding: "25px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <h5 className="fw-bold mb-3">{p.title}</h5>
                  <p className="mb-0">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-danger mb-3">Contact</h2>
          <p>Email: {portfolio.contact.email}</p>
          <p>Phone: {portfolio.contact.phone}</p>
          <p>Location: {portfolio.contact.location}</p>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3 bg-dark text-light"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <small>
          &copy; {new Date().getFullYear()} {portfolio.name} | Data Analytics Portfolio
        </small>
      </footer>
    </div>
  );
}
