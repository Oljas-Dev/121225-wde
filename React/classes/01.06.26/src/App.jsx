function App() {
  const userName = "Oljas";
  const url = "http://example.com";
  const linkTitle = "example site";
  return (
    <div>
      <h1>User Name: {userName}</h1>
      <a href={url}>{linkTitle}</a>
    </div>
  );
}

export default App;
