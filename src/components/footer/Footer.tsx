function Footer() {
  return (
    <footer
      className="w-full text-center py-4 text-xs"
      style={{
        backgroundColor: "#44475A",
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        color: "#6272A4",
      }}
    >
      FarmaSystem {new Date().getFullYear()} Desenvolvido por{" "}
      <span style={{ color: "#50FA7B" }}>Jhonatha Oliveira</span> · Generation Brasil
    </footer>
  );
}

export default Footer;
