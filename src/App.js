import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";


function App() {
  return (
    
    <>

    
      <Navbar tittle="TextUtile" aboutText="About US" />

        <div className="container my-3" >
          <About />
          <TextFrom heading="Enter The Text" />
        </div>
    </>
  );
}

export default App;
