export default function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "var(--font-bitter)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Under Maintenance
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          I&apos;m currently performing some maintenance while finishing up an
          exciting new project. Please check back soon!
        </p>
      </div>
    </div>
  );
}
