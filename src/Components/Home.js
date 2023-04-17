import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../Components/base-url";

let Home = () => {
  const navigate = useNavigate();
  let [locationList, setLocationList] = useState([]);
  let [meallist, setMeallist] = useState([]);
  let [cityRestaurantList, setCityRestauratList] = useState([]);
 
  function handleChange(event) {
    console.log(event.target.value);
    getRestaurantlist(event.target.value);
  }
  /*function displayData() {
   document.getElementById("restData").innerHTML=cityRestaurantList;
  }*/

  let getLocationList = async () => {
    let url = `${BaseUrl}location`;
    console.log(url);
    let { data } = await axios.get(url);
    if (data.status === 200) {
      setLocationList([...data.data]);
    } else {
      setLocationList([]);
    }
  };
  let getMealtypeList = async () => {
    let mealurl = `${BaseUrl}meallist`;
    let mealdata = await axios.get(mealurl);
    if (mealdata.status === 200) {
      setMeallist([...mealdata.data.data]);
    }
    console.log(cityRestaurantList)
  };
  let getRestaurantlist = async (id) => {
    let resturl = `${BaseUrl}filterbycity?city_id=${id}`;
    console.log(resturl);
    let restdata = await axios.get(resturl);
    console.log(restdata);
    if (restdata.status === 200) {
      setCityRestauratList([...restdata.data.data]);
    } else {
      setCityRestauratList([]);
    }
    console.log(cityRestaurantList)
    
  };
  useEffect(()=>{
    getLocationList();
    getMealtypeList();
  })
  /*console.log(locationList)*/
  return (
    <>
      <main>
        <section className="image1  img-s">
          <section className="row w-100">
            <section className="col-12  d-flex justify-content-end">
              <div className="justify-content-between m-2  d-md-flex d-sm-none">
                <button className=" btn btn-outline-light border-0 me-5">
                  Login
                </button>
                <button className=" btn btn-outline-light ms-1 me-5">
                  Create an account
                </button>
              </div>
            </section>
          </section>
          <section className="row">
            <section className="col-12">
              <div className="d-flex justify-content-center">
                <p className="logo">e! </p>
              </div>
              <div className=" d-flex  justify-content-center">
                <p className="text-white  h1 mt-3 fw-bold">
                  Find the best restaurants, cafés, and bars
                </p>
              </div>
            </section>
            <div className="mt-4 d-md-flex justify-content-center">
              <select
                className="me-5  mb-sm-1 text-center p-2 location"
                onChange={handleChange}
              >
                <option>Select Location</option>
                {locationList.map((location) => {
                  return (
                    <option value={location.city_id} key={location._id}>
                      {location.name}
                    </option>
                  );
                })}
              </select>

              <p className="ms-3"></p>
              <input className="searchicon text-#636F88 text-left ps-5  restaurant ms-2  h5"
                type="text" placeholder="&#xf002;Search for restaurants" id="restData" /*onFocus={displayData()}*/ />
                {/*{cityRestaurantList.filter((city)=>{
                  if(city.id===location.id){
                    return (
                      <div>city.name</div>
                )}
                else{
                  return -1
                }
                
                  

                })}*/}
            </div>
          </section>
        </section>
        <section className="row flex-wrap">
          <section className="col-12">
            <p className="ms-5 mt-3 quick fs-1 ">Quick Searches</p>
            <p className="ms-5  discover">
              Discover restaurants by type of meal
            </p>
            <article className="row">  
              <div className="col-12 d-flex flex-wrap">
                {meallist.map((item) => (
                  <div className="ms-4">
                    <div
                      className="d-flex"
                      onClick={() => {
                        navigate("/search/"+ item._id);
                      }}
                    >
                      <img
                        className="foodImg"
                        src={item.image}
                        alt="Can't Display"
                      />
                      <div className="mt-5">
                        <p className="breakFast">{item.name}</p>
                        <p className="desc">{item.content} </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
export default Home;
