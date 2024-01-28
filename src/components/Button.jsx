function Button({ children, color }) {
  return <div className={`btn ${color}`}>{children}</div>;
}

export default Button;
