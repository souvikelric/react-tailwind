import InfoCards from "./components/InfoCards/InfoCards";
import pic1 from "./pics/1.png";
import pic2 from "./pics/2.png";
import pic3 from "./pics/3.jpeg";
import pic4 from "./pics/4.jpg";
import pic5 from "./pics/5.jpg";
function App() {
  return (
    <div className="px-20 pt-5 min-h-screen bg-gray-800">
      <h1 className="text-7xl text-blue-400 ">React Expense Tracker</h1>
      <p className="text-white my-10 w-10/12 text-2xl">
        Effortless Budgeting, Real-time Tracking, Smarter Spending. Welcome to
        🔥React Expense Tracker🔥 — your personal finance companion. Whether
        you're saving for a dream vacation, managing monthly budgets, or simply
        keeping tabs on daily expenses, we've got you covered.
      </p>
      <div className="flex gap-6">
        <div>
          <img
            className="duration-300 ease-in h-60 w-60 object-cover hover:scale-105 hover:rotate-2"
            src={pic1}
            alt=""
          />
        </div>
        <div>
          <img
            className="duration-300 ease-in h-60 w-60 object-cover hover:scale-105 hover:rotate-2"
            src={pic2}
            alt=""
          />
        </div>
        <div>
          <img
            className="duration-300 ease-in h-60 w-60 object-cover hover:scale-105 hover:rotate-2"
            src={pic3}
            alt=""
          />
        </div>
        <div>
          <img
            className="duration-300 ease-in h-60 w-60 object-cover hover:scale-105 hover:rotate-2"
            src={pic4}
            alt=""
          />
        </div>
        <div>
          <img
            className="duration-300 ease-in h-60 w-60 object-cover hover:scale-105 hover:rotate-2"
            src={pic5}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <InfoCards
          header="Monthly Expense"
          paragraph="Calculate and keep a track of your monthly expenses. Add, remove and calculate your monthly expenses"
        />
        <InfoCards
          header="Weekly Expense"
          paragraph="Calculate and keep a track of your weekly expenses. Add, remove and calculate your weekly expenses"
        />
      </div>
      <div className="h-3"></div>
    </div>
  );
}
export default App;
