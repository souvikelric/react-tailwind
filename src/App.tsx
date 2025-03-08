import InfoCards from "./components/InfoCards/InfoCards";
import pic1 from "./pics/1.png";
import pic2 from "./pics/2.png";
import pic3 from "./pics/3.jpeg";
import pic4 from "./pics/4.jpg";
import pic5 from "./pics/5.jpg";
function App() {
  return (
    <div className="px-20 pt-5 min-h-screen bg-gray-800">
      <h1 className="text-7xl text-blue-400 ">Vite + React</h1>
      <p className="text-white my-10 w-10/12 text-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        exercitationem odio modi ut eius ab deleniti enim expedita praesentium
        laudantium, tempora perspiciatis culpa earum rem illo, vitae ex
        temporibus iste inventore nobis quae maiores doloribus porro adipisci?
        Magnam voluptatibus debitis mollitia exercitationem adipisci atque ea.
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
      <InfoCards />
      <div className="h-3"></div>
    </div>
  );
}
export default App;
