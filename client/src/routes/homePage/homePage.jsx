import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const {currentUser}= useContext(AuthContext)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Discover the perfect place to call home with Find Real Estate, your trusted partner 
            for renting and buying properties in the vibrant city of London. 
            Whether you're searching for a chic apartment in the heart of the city, 
            a cozy flat in a charming neighborhood, or a luxurious house with all the modern amenities, 
            we have an extensive range of options to meet your needs and preferences.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Received</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready to Explore</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
