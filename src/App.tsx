import { useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>Campus<span>OS</span></span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#dashboard">Dashboard</a>
        </div>

        <button
          className="login-btn"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">

            <div className="badge">
              ✦ Smart Campus Management Platform
            </div>

            <h1>
              One Campus.
              <br />
              <span>One Intelligent Platform.</span>
            </h1>

            <p className="hero-text">
              CampusOS brings students, faculty, coordinators and
              administrators together in one powerful digital campus
              experience.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setShowLogin(true)}
              >
                Get Started <span>→</span>
              </button>

              <a href="#features" className="secondary-btn">
                Explore Features
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>1,284+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>82%</strong>
                <span>Avg. Attendance</span>
              </div>

              <div>
                <strong>37</strong>
                <span>Placements</span>
              </div>
            </div>
          </div>

          {/* HERO DASHBOARD */}
          <div className="hero-visual">
            <div className="dashboard-window">

              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>CampusOS Dashboard</span>
              </div>

              <div className="mini-dashboard">

                <aside className="mini-sidebar">
                  <div className="mini-logo">C</div>

                  <div className="side-item active">⌂</div>
                  <div className="side-item">▣</div>
                  <div className="side-item">✓</div>
                  <div className="side-item">◫</div>
                  <div className="side-item">⚙</div>
                </aside>

                <div className="mini-main">

                  <div className="mini-header">
                    <div>
                      <small>Welcome back</small>
                      <h3>Student Dashboard</h3>
                    </div>
                    <div className="avatar">S</div>
                  </div>

                  <div className="stat-grid">
                    <div className="mini-card">
                      <span>Attendance</span>
                      <strong>82%</strong>
                      <small>↑ 4.2% this month</small>
                    </div>

                    <div className="mini-card">
                      <span>Assignments</span>
                      <strong>08</strong>
                      <small>3 pending</small>
                    </div>

                    <div className="mini-card">
                      <span>CGPA</span>
                      <strong>8.7</strong>
                      <small>Current semester</small>
                    </div>
                  </div>

                  <div className="progress-card">
                    <div className="card-title">
                      <span>Attendance Overview</span>
                      <span>82%</span>
                    </div>

                    <div className="progress-bar">
                      <div></div>
                    </div>

                    <div className="chart-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="floating-card ai-floating">
              <div className="ai-icon">✦</div>
              <div>
                <strong>AI Assistant</strong>
                <small>Ask anything about academics</small>
              </div>
            </div>

            <div className="floating-card placement-floating">
              <div className="placement-icon">↗</div>
              <div>
                <strong>37 Placements</strong>
                <small>This academic year</small>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="section-heading">
            <div className="badge">POWERFUL FEATURES</div>

            <h2>
              Everything your campus
              <br />
              <span>needs in one place.</span>
            </h2>

            <p>
              A unified platform designed to simplify academic,
              administrative and student workflows.
            </p>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon purple">▦</div>
              <h3>Smart Dashboard</h3>
              <p>
                Get a complete overview of attendance, assignments,
                exams, events and academic progress.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">✓</div>
              <h3>Attendance Management</h3>
              <p>
                Track attendance in real time and identify academic
                performance trends instantly.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">✦</div>
              <h3>AI Academic Assistant</h3>
              <p>
                Get intelligent academic guidance, quick answers and
                personalized learning support.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">↗</div>
              <h3>Placements & Skills</h3>
              <p>
                Manage placement opportunities, skill profiles,
                achievements and career progress.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon orange">◫</div>
              <h3>Assignments & Exams</h3>
              <p>
                Keep assignments, tests, examinations and deadlines
                organized in one centralized system.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon cyan">◎</div>
              <h3>Campus Community</h3>
              <p>
                Connect students, faculty and coordinators through
                events, notices and campus activities.
              </p>
              <a href="#dashboard">Explore →</a>
            </div>

          </div>
        </section>

        {/* AI SECTION */}
        <section id="about" className="ai-section">
          <div className="ai-content">

            <div className="badge">INTELLIGENT CAMPUS</div>

            <h2>
              Your campus,
              <br />
              <span>powered by intelligence.</span>
            </h2>

            <p>
              CampusOS combines academic management with intelligent
              assistance to help students and institutions make
              better decisions.
            </p>

            <div className="ai-points">
              <div>
                <span>✓</span>
                Personalized academic insights
              </div>

              <div>
                <span>✓</span>
                Smart performance tracking
              </div>

              <div>
                <span>✓</span>
                AI-powered academic support
              </div>

              <div>
                <span>✓</span>
                Centralized campus information
              </div>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowLogin(true)}
            >
              Try CampusOS →
            </button>

          </div>

          <div className="ai-card">
            <div className="ai-card-header">
              <div className="big-ai-icon">✦</div>
              <div>
                <strong>CampusOS AI</strong>
                <small>Academic Assistant</small>
              </div>
              <span className="online-dot"></span>
            </div>

            <div className="chat-message user-message">
              How can I improve my attendance?
            </div>

            <div className="chat-message bot-message">
              Based on your current attendance, you should attend
              at least 4 of your next 5 classes to maintain a healthy
              attendance percentage.
            </div>

            <div className="chat-input">
              <span>Ask CampusOS AI...</span>
              <button>↑</button>
            </div>
          </div>
        </section>

        {/* DASHBOARD SECTION */}
        <section id="dashboard" className="dashboard-section">
          <div className="section-heading">
            <div className="badge">ONE PLATFORM</div>

            <h2>
              Built for the entire
              <br />
              <span>campus ecosystem.</span>
            </h2>
          </div>

          <div className="roles-grid">

            <div className="role-card">
              <div className="role-number">01</div>
              <div className="role-icon">🎓</div>
              <h3>Students</h3>
              <p>
                Attendance, assignments, exams, events, achievements,
                placements and AI assistance.
              </p>
            </div>

            <div className="role-card">
              <div className="role-number">02</div>
              <div className="role-icon">👨‍🏫</div>
              <h3>Faculty</h3>
              <p>
                Manage students, attendance, assignments, marks and
                academic activities.
              </p>
            </div>

            <div className="role-card">
              <div className="role-number">03</div>
              <div className="role-icon">📊</div>
              <h3>Coordinator</h3>
              <p>
                Monitor students, faculty, events and campus-level
                analytics from one place.
              </p>
            </div>

            <div className="role-card">
              <div className="role-number">04</div>
              <div className="role-icon">⚙</div>
              <h3>Admin</h3>
              <p>
                Control users, departments, system settings and
                institution-wide analytics.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-box">
            <div className="badge">READY TO GET STARTED?</div>

            <h2>
              Transform your campus
              <br />
              with <span>CampusOS.</span>
            </h2>

            <p>
              One platform. Smarter management. Better campus experience.
            </p>

            <button
              className="primary-btn large-btn"
              onClick={() => setShowLogin(true)}
            >
              Get Started with CampusOS →
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>Campus<span>OS</span></span>
        </div>

        <p>© 2026 CampusOS. Smart Campus Management Platform.</p>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#dashboard">Dashboard</a>
        </div>
      </footer>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>

            <div className="modal-logo">C</div>

            <h2>Welcome to CampusOS</h2>
            <p>Sign in to continue to your campus.</p>

            <input
              type="email"
              placeholder="Email address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button className="primary-btn full-btn">
              Sign In →
            </button>

            <small className="demo-text">
              Demo login — authentication will be connected next.
            </small>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;