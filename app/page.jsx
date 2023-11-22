// import React from 'react'
// import Link from 'next/link'
// const page = () => {
//   return (
//     <div>
//       Home page
//       <Link href="/dashboard">
//           <button style={{hover: "blue"}}>Navigate to the home page</button>
//         </Link>
//     </div>
//   )
// }

// export default page

import Head from "next/head";
import Footer from "./ui/dashboard/footer/footer";
import Link from "next/link";

const AdminDashboardPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Welcome to Admin Dashboard</h1>
      </header>
      <main style={styles.main}>
        <p style={styles.description}>
          This is the admin dashboard where you can manage your website content.
        </p>
        <Link href="/dashboard" style={linkStyles}>
          <button style={buttonStyles}>Navigate to the dashboard page</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#151c2c",
    color: "#ffffff",
  },
  header: {
    padding: "20px",
    backgroundColor: "#182237",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    margin: "0",
    color: "#fff",
  },
  main: {
    flex: "1",
    padding: "20px",
    textAlign: "center",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  footer: {
    padding: "10px",
    marginTop: "auto",
    backgroundColor: "#34495e",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#fff",
    margin: "0",
  },
};

const linkStyles = {
  textDecoration: "none",
};

const buttonStyles = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "10px",
};

export default AdminDashboardPage;
