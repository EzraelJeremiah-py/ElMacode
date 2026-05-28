
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
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
      {/* Hero */}
      <header
        className="py-5 shadow-lg text-center"
        style={{
          backgroundColor: "black",
          borderRadius: "20px",
          margin: "20px auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          color: "gold",
          maxWidth: "900px"
        }}
      >
        <h1 className="fw-bold mb-2">{portfolio.name}</h1>
        <h3 className="fw-light mb-3">{portfolio.title}</h3>
        <p className="mt-3">{portfolio.profile}</p>
      </header>

      <main className="container py-5 flex-grow-1">
        {/* Skills as pill cards */}
        <section className="mb-5 text-center">
          <h2 className="text-info mb-3">Skills</h2>
          <div className="row justify-content-center">
            {portfolio.skills.map((s, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div
                  className="shadow-sm d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "cyan",
                    color: "black",
                    borderRadius: "50px",
                    padding: "15px 25px",
                    fontWeight: "500",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
                  }}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-5 text-center">
          <h2 className="text-warning mb-3">Qualifications</h2>
          <ul className="list-group">
            {portfolio.qualifications.map((q, i) => (
              <li key={i} className="list-group-item bg-dark text-white border-light">
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
                    background: "linear-gradient(135deg, #0d6efd, #20c997)",
                    color: "white",
                    borderRadius: "20px",
                    padding: "30px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
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
        className="text-center py-3 bg-secondary text-white"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <small>
          &copy; {new Date().getFullYear()} {portfolio.name} | Professional Portfolio
        </small>
      </footer>
    </div>
  );
}
