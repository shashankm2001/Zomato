import Bigchill from "../CSS/Bigchill.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import restDetails from "./Details";
import BaseUrl from "./base-url";
import Header from "./Header";
let SearchPage = () => {
  let navigate = useNavigate();
  {/*let [mealtype,setMeallist]= useState([0]);
  let getmeallist= async()=>{
    let url=`${BaseUrl}+search/+${restDetails.id}`;
    console.log(url);

  }*/}

  const [ filter, setFilter ] = useState([]);
  const [ sort, setSort] = useState([]);

  function handleCheckbox(search) {
      const index = filter.indexOf(search);
      if (index > -1) { // only splice array when item is found
        filter.splice(index,1);// 2nd parameter means remove one item only
        setFilter([...filter]) 
      }
      
     else {
      filter.push(search);
      setFilter([...filter]);
    }
  }

  function handleSortChange(evt) {
    setSort(evt.target.value);    
  }

 
  useEffect(() => {
    
  })
  let mealdata = ()=>{
    let Url=BaseUrl+"search";

  }

  let filteredRestDetails = [...restDetails];

  if (filter.length) {
    filteredRestDetails = restDetails.filter(det => (
      filter.indexOf(det.cussines) > -1
    ))
  }

  if(sort === 'lowtohigh')
    filteredRestDetails.sort((a, b) => a.cost > b.cost ? 1 :-1)
  else if (sort === 'hightolow')
    filteredRestDetails.sort((a, b) => a.cost < b.cost ? 1 :-1)
  return (
    <>
      <section className="headerSection">
        <header className="header">
          <div style={{ flex: "1" }}>
            <Header/>
          </div>
        </header>
      </section>
      <p className="descript"> Breakfast Places in Mumbai</p>
      <div>
        <section className="minisection">
          <section className="selection">
            <div className="head">
              <h1> Filters</h1>
              <div>
                <p className="mt-3"> Select Location</p>

                <select className="dropdown">
                  <option>Select Location</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                  <option>Tiruvanantha-Puram</option>
                  <option>Ranchi</option>
                </select>
              </div>

              <article className="filterMargin">
                <p>Cuisine</p>
                <div className="chkboxColor">
                  <div>
                    <input type="checkbox" onChange={() => handleCheckbox("North Indian")} className="myinput" id="North" />
                    <label htmlFor="North">North Indian</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={()=>handleCheckbox("South Indian")} id="South" />
                    <label htmlFor="South">South Indian</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={ ()=>handleCheckbox("Chinese")} id="Chinese" />
                    <label htmlFor="Chinese">Chinese</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={()=>handleCheckbox("FastFood")} id="FastFood"  />
                    <label htmlFor="FastFood">Fast Food</label>
                  </div>
                  <div>
                    <input type="checkbox"  onChange= {()=>handleCheckbox("StreetFood")} id="StreetFood" />
                    <label htmlFor="StreetFood">Street Food</label>
                  </div>
                </div>
              </article>
              {/*<p> Cost For  two</p>
              <article className="radioboxColor">
                <div>
                  <input type="radio" />
                  <label htmlFor="">Less than ` 500</label>
                </div>
                <div>
                  <input type="radio" />
                  <label htmlFor="">` 500 to ` 1000</label>
                </div>
                <div>
                  <input type="radio" />
                  <label htmlFor="">`1000 to `1500</label>
                </div>
                <div>
                  <input type="radio" />
                  <label htmlFor="">`1500 to `2000</label>
                </div>
                <div>
                  <input type="radio" />
                  <label htmlFor="">`2000+</label>
                </div>
  </article>*/}

              <article className="sorting">
                <p> Sort</p>
                <div>
                  <div className="sortingRadio">
                    <input type="radio" value="lowtohigh"  onChange={handleSortChange} name="price"/>
                    <label htmlFor="">Price low to high</label>
                  </div>
                  <div>
                    <input type="radio" value="hightolow"  onChange={handleSortChange} name="price" />
                    <label htmlFor="">Price high to low</label>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <div className="demo-container">
            {filteredRestDetails.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="demo"
                  onClick={() => navigate("/final/" + obj.id)}
                >
                  <section className="hotel1">
                    <img
                      src={Bigchill}
                      className="imageAdjust"
                      alt="Can't Display"
                    />
                    <div className="info">
                      <p className="hello1">{obj.Name}</p>
                      <p className="hello2">{obj.location}</p>
                      <p className="hello3"> {obj.address}</p>
                    </div>
                  </section>

                  <hr />
                  <section className="Cost">
                    <div className="left_desc">
                      <p> CUISINES:</p>
                      <p> COST FOR One:</p>
                    </div>
                    <div className="right_desc">
                      <p className="bakery">{obj.cussines}</p>
                      <p className="cost1">{obj.cost}</p>
                    </div>
                  </section>
                </div>
              
              );
            })}
          </div>
        </section>
        <div className="info" onClick={() => navigate("/final")}></div>
      </div>

      <section>
        <ul className="pagingnation">
          <li className="borderpaging">
            <i className="fa fa-chevron-left " aria-hidden="true"></i>
          </li>
          <li className="borderpaging">1</li>
          <li className="borderpaging">2</li>
          <li className="borderpaging">3</li>
          <li className="borderpaging">4</li>
          <li className="borderpaging">5</li>
          <li className="borderpaging">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SearchPage;
