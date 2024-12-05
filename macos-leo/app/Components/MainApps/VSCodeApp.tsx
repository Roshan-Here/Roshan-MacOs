function VSCodeApp() {
  const BaseUrl =
    "https://github1s.com/Roshan-Here/OneCompiler/blob/HEAD/client/src/App.jsx";
  return (
    <div className="w-full h-full overflow-hidden">
      <iframe src={BaseUrl} className="w-full h-full"></iframe>
    </div>
  );
}

export default VSCodeApp;
