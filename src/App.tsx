import { useState } from "react";

type Page =
  | "dashboard"
  | "attendance"
  | "assignments"
  | "timetable"
  | "notices";

type Assignment = {
  id: number;
  title: string;
  subject: string;
  due: string;
  status: "Pending" | "Submitted";
};

function AttendancePage() {
  const subjects = [
    { name: "Data Structures", percentage: 92 },
    { name: "DBMS", percentage: 84 },
    { name: "Operating Systems", percentage: 80 },
    { name: "Computer Networks", percentage: 76 },
    { name: "Mathematics", percentage: 78 },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <span className="eyebrow">ACADEMIC</span>
          <h1>Attendance</h1>
          <p>Track your attendance and academic presence.</p>
        </div>

        <div className="page-badge">82% Overall</div>
      </div>

      <div className="attendance-summary">
        <div className="summary-card">
          <span>Overall Attendance</span>
          <strong>82%</strong>
          <small>Good standing</small>
        </div>

        <div className="summary-card">
          <span>Total Classes</span>
          <strong>118</strong>
          <small>Current semester</small>
        </div>

        <div className="summary-card">
          <span>Status</span>
          <strong>Safe</strong>
          <small>Above minimum requirement</small>
        </div>
      </div>

      <div className="content-card">
        <div className="card-heading">
          <div>
            <h2>Subject-wise Attendance</h2>
            <p>Your attendance performance by subject.</p>
          </div>
        </div>

        <div className="attendance-list">
          {subjects.map((subject) => (
            <div className="attendance-row" key={subject.name}>
              <div className="attendance-info">
                <span>{subject.name}</span>
                <strong>{subject.percentage}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${subject.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "Binary Search Tree Implementation",
      subject: "Data Structures",
      due: "28 Sep 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Database Normalization Report",
      subject: "DBMS",
      due: "30 Sep 2026",
      status: "Pending",
    },
    {
      id: 3,
      title: "Operating System Scheduling",
      subject: "Operating Systems",
      due: "02 Oct 2026",
      status: "Submitted",
    },
    {
      id: 4,
      title: "Network Protocol Analysis",
      subject: "Computer Networks",
      due: "05 Oct 2026",
      status: "Pending",
    },
    {
      id: 5,
      title: "Matrix & Determinants",
      subject: "Mathematics",
      due: "07 Oct 2026",
      status: "Submitted",
    },
  ]);

  const toggleSubmit = (id: number) => {
    setAssignments((current) =>
      current.map((assignment) =>
        assignment.id === id
          ? {
              ...assignment,
              status:
                assignment.status === "Submitted"
                  ? "Pending"
                  : "Submitted",
            }
          : assignment
      )
    );
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <span className="eyebrow">ACADEMICS</span>
          <h1>Assignments</h1>
          <p>Manage your academic assignments and submissions.</p>
        </div>

        <div className="page-badge">
          {assignments.filter((a) => a.status === "Pending").length} Pending
        </div>
      </div>

      <div className="content-card">
        <div className="card-heading">
          <div>
            <h2>My Assignments</h2>
            <p>Stay on top of your academic work.</p>
          </div>
        </div>

        <div className="assignment-list">
          {assignments.map((assignment) => (
            <div className="assignment-card" key={assignment.id}>
              <div className="assignment-main">
                <div className="assignment-icon">📘</div>

                <div>
                  <h3>{assignment.title}</h3>
                  <p>{assignment.subject}</p>
                  <small>Due: {assignment.due}</small>
                </div>
              </div>

              <div className="assignment-actions">
                <span
                  className={`status-pill ${
                    assignment.status === "Submitted"
                      ? "submitted"
                      : "pending"
                  }`}
                >
                  {assignment.status}
                </span>

                <button
                  className="small-action"
                  onClick={() => toggleSubmit(assignment.id)}
                >
                  {assignment.status === "Submitted"
                    ? "Mark Pending"
                    : "Submit"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timetable: Record<
    string,
    { time: string; subject: string; teacher: string; room: string }[]
  > = {
    Monday: [
      {
        time: "09:00 - 10:00",
        subject: "Data Structures",
        teacher: "Dr. Sharma",
        room: "Room 201",
      },
      {
        time: "10:00 - 11:00",
        subject: "DBMS",
        teacher: "Prof. Singh",
        room: "Room 204",
      },
      {
        time: "11:30 - 12:30",
        subject: "Mathematics",
        teacher: "Dr. Verma",
        room: "Room 102",
      },
      {
        time: "01:30 - 02:30",
        subject: "Computer Networks",
        teacher: "Prof. Khan",
        room: "Lab 2",
      },
    ],
    Tuesday: [
      {
        time: "09:00 - 10:00",
        subject: "Operating Systems",
        teacher: "Dr. Gupta",
        room: "Room 203",
      },
      {
        time: "10:00 - 11:00",
        subject: "Mathematics",
        teacher: "Dr. Verma",
        room: "Room 102",
      },
      {
        time: "11:30 - 12:30",
        subject: "Data Structures",
        teacher: "Dr. Sharma",
        room: "Room 201",
      },
      {
        time: "01:30 - 03:30",
        subject: "Programming Lab",
        teacher: "Prof. Singh",
        room: "Lab 1",
      },
    ],
    Wednesday: [
      {
        time: "09:00 - 10:00",
        subject: "DBMS",
        teacher: "Prof. Singh",
        room: "Room 204",
      },
      {
        time: "10:00 - 11:00",
        subject: "Computer Networks",
        teacher: "Prof. Khan",
        room: "Room 205",
      },
      {
        time: "11:30 - 12:30",
        subject: "Operating Systems",
        teacher: "Dr. Gupta",
        room: "Room 203",
      },
      {
        time: "01:30 - 02:30",
        subject: "Data Structures",
        teacher: "Dr. Sharma",
        room: "Room 201",
      },
    ],
    Thursday: [
      {
        time: "09:00 - 10:00",
        subject: "Mathematics",
        teacher: "Dr. Verma",
        room: "Room 102",
      },
      {
        time: "10:00 - 11:00",
        subject: "Operating Systems",
        teacher: "Dr. Gupta",
        room: "Room 203",
      },
      {
        time: "11:30 - 12:30",
        subject: "DBMS",
        teacher: "Prof. Singh",
        room: "Room 204",
      },
      {
        time: "01:30 - 03:30",
        subject: "Database Lab",
        teacher: "Prof. Singh",
        room: "Lab 3",
      },
    ],
    Friday: [
      {
        time: "09:00 - 10:00",
        subject: "Computer Networks",
        teacher: "Prof. Khan",
        room: "Room 205",
      },
      {
        time: "10:00 - 11:00",
        subject: "Data Structures",
        teacher: "Dr. Sharma",
        room: "Room 201",
      },
      {
        time: "11:30 - 12:30",
        subject: "Operating Systems",
        teacher: "Dr. Gupta",
        room: "Room 203",
      },
      {
        time: "01:30 - 02:30",
        subject: "Mathematics",
        teacher: "Dr. Verma",
        room: "Room 102",
      },
    ],
  };

  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <span className="eyebrow">ACADEMIC</span>
          <h1>Timetable</h1>
          <p>View your weekly class schedule.</p>
        </div>

        <div className="page-badge">5 Days</div>
      </div>

      <div className="day-tabs">
        {days.map((day) => (
          <button
            key={day}
            className={`day-tab ${selectedDay === day ? "active" : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="content-card">
        <div className="card-heading">
          <div>
            <h2>{selectedDay} Schedule</h2>
            <p>Your classes for today.</p>
          </div>
        </div>

        <div className="schedule-list">
          {timetable[selectedDay].map((item, index) => (
            <div className="schedule-item" key={`${item.subject}-${index}`}>
              <div className="schedule-time">{item.time}</div>

              <div className="schedule-dot" />

              <div className="schedule-details">
                <h3>{item.subject}</h3>
                <p>{item.teacher}</p>
                <span>{item.room}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NoticesPage() {
  const [readNotices, setReadNotices] = useState<number[]>([]);

  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examination Schedule",
      text: "The mid-semester examination schedule has been published.",
      date: "25 Sep 2026",
      type: "Academic",
    },
    {
      id: 2,
      title: "Campus Placement Drive",
      text: "A leading technology company will conduct a campus placement drive next week.",
      date: "23 Sep 2026",
      type: "Placement",
    },
    {
      id: 3,
      title: "Annual Sports Meet",
      text: "Registration for the annual sports meet is now open.",
      date: "21 Sep 2026",
      type: "Event",
    },
    {
      id: 4,
      title: "Library Timing Updated",
      text: "The central library will remain open until 9 PM during examination preparation.",
      date: "19 Sep 2026",
      type: "Notice",
    },
  ];

  const toggleRead = (id: number) => {
    setReadNotices((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <span className="eyebrow">CAMPUS</span>
          <h1>Notices</h1>
          <p>Stay updated with the latest campus announcements.</p>
        </div>

        <div className="page-badge">
          {notices.length - readNotices.length} Unread
        </div>
      </div>

      <div className="notice-list">
        {notices.map((notice) => {
          const isRead = readNotices.includes(notice.id);

          return (
            <div
              className={`notice-card ${isRead ? "read" : ""}`}
              key={notice.id}
            >
              <div className="notice-icon">📢</div>

              <div className="notice-content">
                <div className="notice-top">
                  <span className="notice-type">{notice.type}</span>
                  <span className="notice-date">{notice.date}</span>
                </div>

                <h3>{notice.title}</h3>
                <p>{notice.text}</p>

                <button
                  className="text-action"
                  onClick={() => toggleRead(notice.id)}
                >
                  {isRead ? "Mark as unread" : "Mark as read"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [showLogin, setShowLogin] = useState(false);

  const login = () => {
    if (email === "student@ldc.com" && password === "123456") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setActivePage("dashboard");
    } else {
      alert("Invalid login details.\n\nDemo Login:\nEmail: student@ldc.com\nPassword: 123456");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setActivePage("dashboard");
  };

  const navigate = (page: Page) => {
    setActivePage(page);
  };

  const pageTitle =
    activePage === "dashboard"
      ? "Dashboard"
      : activePage === "attendance"
      ? "Attendance"
      : activePage === "assignments"
      ? "Assignments"
      : activePage === "timetable"
      ? "Timetable"
      : "Notices";

  if (isLoggedIn) {
    return (
      <div className="app-shell logged-app">
        <header className="top-navbar">
          <div className="brand" onClick={() => navigate("dashboard")}>
            <div className="brand-logo">
              <span>L</span>
            </div>
            <div className="brand-text">
              <strong>LDC University</strong>
              <small>Campus Management Portal</small>
            </div>
          </div>

          <nav className="desktop-nav">
            <button
              className={activePage === "dashboard" ? "nav-active" : ""}
              onClick={() => navigate("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={activePage === "attendance" ? "nav-active" : ""}
              onClick={() => navigate("attendance")}
            >
              Attendance
            </button>

            <button
              className={activePage === "assignments" ? "nav-active" : ""}
              onClick={() => navigate("assignments")}
            >
              Assignments
            </button>

            <button
              className={activePage === "timetable" ? "nav-active" : ""}
              onClick={() => navigate("timetable")}
            >
              Timetable
            </button>

            <button
              className={activePage === "notices" ? "nav-active" : ""}
              onClick={() => navigate("notices")}
            >
              Notices
            </button>
          </nav>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </header>

        <main className="main-area">
          {activePage === "dashboard" && (
            <>
              <section className="dashboard-hero">
                <div>
                  <span className="eyebrow">LDC UNIVERSITY</span>
                  <h1>
                    Welcome back,
                    <br />
                    <span>Student 👋</span>
                  </h1>
                  <p>
                    Manage your academic journey, attendance, assignments and
                    campus activities from one place.
                  </p>
                </div>

                <div className="hero-date">
                  <span>Current Semester</span>
                  <strong>2026 - 27</strong>
                </div>
              </section>

              <section className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div>
                    <span>Attendance</span>
                    <strong>82%</strong>
                    <small>Good standing</small>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">📝</div>
                  <div>
                    <span>Assignments</span>
                    <strong>3</strong>
                    <small>Pending</small>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">📅</div>
                  <div>
                    <span>Classes Today</span>
                    <strong>4</strong>
                    <small>Next at 10:00 AM</small>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">📢</div>
                  <div>
                    <span>Notices</span>
                    <strong>4</strong>
                    <small>Latest updates</small>
                  </div>
                </div>
              </section>

              <section className="dashboard-grid">
                <div className="content-card">
                  <div className="card-heading">
                    <div>
                      <h2>Academic Overview</h2>
                      <p>Your current academic performance.</p>
                    </div>

                    <button
                      className="view-btn"
                      onClick={() => navigate("attendance")}
                    >
                      View Details →
                    </button>
                  </div>

                  <div className="overview-list">
                    <div className="overview-item">
                      <div>
                        <span>Overall Attendance</span>
                        <strong>82%</strong>
                      </div>

                      <div className="mini-progress">
                        <div style={{ width: "82%" }} />
                      </div>
                    </div>

                    <div className="overview-item">
                      <div>
                        <span>Assignments Completed</span>
                        <strong>60%</strong>
                      </div>

                      <div className="mini-progress">
                        <div style={{ width: "60%" }} />
                      </div>
                    </div>

                    <div className="overview-item">
                      <div>
                        <span>Academic Progress</span>
                        <strong>88%</strong>
                      </div>

                      <div className="mini-progress">
                        <div style={{ width: "88%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ai-card">
                  <div className="ai-glow" />
                  <div className="ai-icon">✦</div>

                  <span className="eyebrow">LDC UNIVERSITY AI</span>

                  <h2>Your campus, simplified.</h2>

                  <p>
                    LDC University AI can help students understand schedules,
                    assignments, attendance and campus activities.
                  </p>

                  <button
                    className="primary-btn"
                    onClick={() =>
                      alert(
                        "LDC University AI Assistant will be available in the next update 🚀"
                      )
                    }
                  >
                    Ask LDC AI →
                  </button>
                </div>
              </section>

              <section className="quick-section">
                <div className="section-title">
                  <div>
                    <span className="eyebrow">QUICK ACCESS</span>
                    <h2>Campus Services</h2>
                  </div>
                </div>

                <div className="quick-grid">
                  <button
                    className="quick-card"
                    onClick={() => navigate("attendance")}
                  >
                    <span>📊</span>
                    <div>
                      <strong>Attendance</strong>
                      <small>Track your attendance</small>
                    </div>
                    <b>→</b>
                  </button>

                  <button
                    className="quick-card"
                    onClick={() => navigate("assignments")}
                  >
                    <span>📝</span>
                    <div>
                      <strong>Assignments</strong>
                      <small>Manage submissions</small>
                    </div>
                    <b>→</b>
                  </button>

                  <button
                    className="quick-card"
                    onClick={() => navigate("timetable")}
                  >
                    <span>📅</span>
                    <div>
                      <strong>Timetable</strong>
                      <small>View your schedule</small>
                    </div>
                    <b>→</b>
                  </button>

                  <button
                    className="quick-card"
                    onClick={() => navigate("notices")}
                  >
                    <span>📢</span>
                    <div>
                      <strong>Notices</strong>
                      <small>Latest announcements</small>
                    </div>
                    <b>→</b>
                  </button>
                </div>
              </section>
            </>
          )}

          {activePage === "attendance" && <AttendancePage />}
          {activePage === "assignments" && <AssignmentsPage />}
          {activePage === "timetable" && <TimetablePage />}
          {activePage === "notices" && <NoticesPage />}
        </main>

        <footer className="app-footer">
          <strong>LDC University</strong>
          <span>Campus Management Portal</span>
          <span>© 2026 LDC University</span>
        </footer>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <header className="landing-navbar">
        <div className="brand">
          <div className="brand-logo">
            <span>L</span>
          </div>

          <div className="brand-text">
            <strong>LDC University</strong>
            <small>Campus Management Portal</small>
          </div>
        </div>

        <button className="login-nav-btn" onClick={() => setShowLogin(true)}>
          Student Login →
        </button>
      </header>

      <main>
        <section className="landing-hero">
          <div className="hero-content">
            <span className="eyebrow">LDC UNIVERSITY • PRAYAGRAJ</span>

            <h1>
              One Campus.
              <br />
              <span>Everything You Need.</span>
            </h1>

            <p>
              LDC University brings students, academics and campus activities
              together in one modern digital platform.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn large"
                onClick={() => setShowLogin(true)}
              >
                Enter LDC University →
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Platform
              </button>
            </div>

            <div className="hero-trust">
              <span>✓ Secure</span>
              <span>✓ Student Friendly</span>
              <span>✓ Campus Focused</span>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-window">
              <div className="preview-top">
                <div className="preview-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>LDC University Portal</span>
              </div>

              <div className="preview-body">
                <div className="preview-sidebar">
                  <div className="preview-logo">L</div>
                  <span className="active">Dashboard</span>
                  <span>Attendance</span>
                  <span>Assignments</span>
                  <span>Timetable</span>
                  <span>Notices</span>
                </div>

                <div className="preview-main">
                  <span className="preview-label">STUDENT DASHBOARD</span>
                  <h3>Welcome back 👋</h3>

                  <div className="preview-cards">
                    <div>
                      <small>Attendance</small>
                      <strong>82%</strong>
                    </div>

                    <div>
                      <small>Assignments</small>
                      <strong>3</strong>
                    </div>

                    <div>
                      <small>Classes</small>
                      <strong>4</strong>
                    </div>
                  </div>

                  <div className="preview-chart">
                    <span>Academic Overview</span>
                    <div className="chart-bars">
                      <i style={{ height: "45%" }} />
                      <i style={{ height: "65%" }} />
                      <i style={{ height: "52%" }} />
                      <i style={{ height: "78%" }} />
                      <i style={{ height: "88%" }} />
                      <i style={{ height: "72%" }} />
                      <i style={{ height: "94%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">PLATFORM</span>
            <h2>Everything in one place.</h2>
            <p>
              A simple digital experience designed around the everyday needs
              of students.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-icon">📊</div>
              <h3>Attendance</h3>
              <p>
                Monitor subject-wise attendance and stay on top of your
                academic requirements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-icon">📝</div>
              <h3>Assignments</h3>
              <p>
                Keep track of assignments, deadlines and submission status.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-icon">📅</div>
              <h3>Timetable</h3>
              <p>
                Access your weekly schedule and quickly find your upcoming
                classes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">04</div>
              <div className="feature-icon">📢</div>
              <h3>Campus Notices</h3>
              <p>
                Stay updated with important academic, placement and campus
                announcements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">05</div>
              <div className="feature-icon">✦</div>
              <h3>LDC University AI</h3>
              <p>
                A future-ready AI assistant designed to make campus
                information easier to access.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">06</div>
              <div className="feature-icon">🔐</div>
              <h3>Secure Access</h3>
              <p>
                Student-focused access with a clean and secure digital
                experience.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-card">
            <div>
              <span className="eyebrow">ABOUT THE PLATFORM</span>
              <h2>Built for a better campus experience.</h2>
              <p>
                LDC University transforms everyday campus tasks into one
                simple digital experience. Students can manage academics,
                attendance, assignments, schedules and important notices from
                a single place.
              </p>

              <div className="about-points">
                <span>✓ Student focused</span>
                <span>✓ Modern interface</span>
                <span>✓ Easy navigation</span>
                <span>✓ Future ready</span>
              </div>
            </div>

            <div className="about-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-center">
                <span>L</span>
                <small>LDC</small>
              </div>
            </div>
          </div>
        </section>

        <section className="roles-section">
          <div className="section-heading">
            <span className="eyebrow">WHO IT'S FOR</span>
            <h2>Designed around campus life.</h2>
          </div>

          <div className="roles-grid">
            <div className="role-card">
              <span>01</span>
              <h3>Students</h3>
              <p>
                Attendance, assignments, exams, events, achievements and
                placements.
              </p>
            </div>

            <div className="role-card">
              <span>02</span>
              <h3>Faculty</h3>
              <p>
                Manage students, attendance, assignments, marks and academic
                activities.
              </p>
            </div>

            <div className="role-card">
              <span>03</span>
              <h3>Coordinator</h3>
              <p>
                Monitor students, faculty, events and campus-level analytics.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <span className="eyebrow">LDC UNIVERSITY</span>
            <h2>Ready to experience a better campus?</h2>
            <p>
              Login to access your personalized student dashboard.
            </p>

            <button
              className="primary-btn large"
              onClick={() => setShowLogin(true)}
            >
              Login to LDC University →
            </button>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-brand">
          <div className="brand-logo">
            <span>L</span>
          </div>

          <div>
            <strong>LDC University</strong>
            <small>Campus Management Portal</small>
          </div>
        </div>

        <p>© 2026 LDC University. Built for a better campus experience.</p>
      </footer>

      {showLogin && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>

            <div className="login-logo">
              <span>L</span>
            </div>

            <span className="eyebrow">STUDENT PORTAL</span>

            <h2>Welcome to LDC University</h2>

            <p>Login to access your campus dashboard.</p>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="student@ldc.com"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    login();
                  }
                }}
              />
            </div>

            <button className="primary-btn login-submit" onClick={login}>
              Login to LDC University →
            </button>

            <div className="demo-login">
              <strong>Demo Login</strong>
              <span>Email: student@ldc.com</span>
              <span>Password: 123456</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;