import './App.css';
import TopBar from './TopBar';
// import logo from "./png_images/logo.png";
import intro from "./png_images/illustration-intro.png";

function App() {
  return (
      <div className="App">
          <TopBar />

          <div class="w-full h-auto bg-green-400 flex flex-col items-center text-center">
              <div class="w-1/3 h-auto bg-orange-400 flex flex-col items-center justify-center">
                  <img
                      src={intro}
                      class="w-64 h-64 object-cover"
                      alt="Illustration Intro"
                  />

                  <div class="font-regular text-white text-2xl text-center font-bold">
                      All your files in one secure location, accessible anywhere
                  </div>

                  <br />
                  <div class="mx-7">

                    <div class="font-regular text-white text-xs text-center">
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends, family and co-workers.
                    </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
