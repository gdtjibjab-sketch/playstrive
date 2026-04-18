export default function Page() {
  return (
    <div style={{
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      padding: "40px"
    }}>
      <h1 style={{
        fontSize: "64px",
        fontWeight: "900",
        lineHeight: "1"
      }}>
        OUTPLAY.<br />
        <span style={{ color: "#A3E635" }}>EARN MORE.</span>
      </h1>

      <p style={{
        marginTop: "20px",
        fontSize: "20px",
        color: "#aaa"
      }}>
        Compete against real players. Win real money. Cash out instantly.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "16px 32px",
        fontWeight: "bold",
        background: "#A3E635",
        color: "#000",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
      }}>
        Download App →
      </button>
    </div>
  );
}
