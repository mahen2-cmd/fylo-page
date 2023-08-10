import './App.css';
import TopBar from './TopBar';
import SecondSection from './SecondSection';


function App() {
  return (
      <div className="App" class="bg-hsl-218-28-13">
        {/* <div class="bg-emerald-500 w-52 h-52 rounded-full shadow-2 grid place-content-center">
            <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
                <div class="bg-red-500 w-16 h-16 rounded-full"></div>
            </div>
        </div> */}
        <br />
        <br />
        <TopBar />
        <br />
        <br />
        <SecondSection />
      </div>
  );
}

export default App;
