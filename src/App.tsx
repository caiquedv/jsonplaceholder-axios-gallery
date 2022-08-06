import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="p-5">
      <header className="pb-4">
        <h1>Galeria de fotos</h1>
      </header>
      <hr />
        <MainRoutes />      
    </div>
  );
};
export default App; 