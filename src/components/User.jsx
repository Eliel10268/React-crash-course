function User({ id, name, username }) {
  return (
    <div key={id} style={{ border: "1px solid red", margin: "8px 0" }}>
      <div>{name}}</div>
      <div>{username}</div>
      <div>{id}</div>
    </div>
  );
}

export default User;
