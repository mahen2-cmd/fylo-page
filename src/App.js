import './App.css';
import SecondSection from './SecondSection';
import TopBar from './TopBar';
import computer from "./png_images/icon-access-anywhere.png";

import security from "./png_images/icon-security.png";
// import files from ""

// import files from "./png_images/icon-any-file.png";
// import logo from "./png_images/logo.png";


// The leaves in the second component's image are still hidden

function App() {
  return (
      <div className="App">
          <TopBar />
          <SecondSection />

          <br />
          <br />
          <br />

          <div class="w-full h-auto flex flex-col items-center text-center">
              <div class=" w-1/2 flex flex-row items-center justify-between text-center bg-green-900">
                  <div class="w-auto flex flex-col items-center ">
                      <img
                          src={computer}
                          alt="Logo"
                          width="70px"
                          height="70px"
                      />

                      <br />

                      <div class="font-bold text-white text-lg text-center">
                          Access your files, anywhere
                      </div>

                      <div class="font-regular text-white text-xs text-center">
                          The ability to use a smartphone, tablet, or computer{" "}
                          to access your account means your files follow you
                          everywhere.
                      </div>
                  </div>

                  <div class="w-auto flex flex-col items-center">
                      {/* <br /> */}

                      <img
                          src={security}
                          alt="Logo"
                          width="70px"
                          height="70px"
                      />

                      {/* <br /> */}

                      <div class="font-bold text-white text-lg text-center">
                          Security you can trust
                      </div>

                      <div class="font-regular text-white text-xs text-center">
                          The ability to use a smartphone, tablet, or computer{" "}
                          to access your account means your files follow you
                          everywhere.
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
