import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_search_api } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
   
  const [searchQuerry, setsearchQuerry] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const [selectionoption, setselectionoption] = useState([]);
  const dispatch = useDispatch();
  const searchCache=useSelector((store)=>store.search);
  useEffect(() => {
    const timer = setTimeout(() =>{ 
        if(searchCache[searchQuerry]){
            setsuggestions(searchCache[searchQuerry]);   
        }
        else{
            getSearchSuggestions()
        }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const getSearchSuggestions = async () => {
    console.log(searchQuerry);
    const data = await fetch(Youtube_search_api + searchQuerry);
    const json = await data.json();
    setsuggestions(json[1]);

    dispatch(
        cacheResult({
            [searchQuerry]:json[1]
        })
    )
    //console.log(json[1]);
  };

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 space-x-6">
        <img
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer h-7"
          alt="menu"
          src="https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"
        />

        <img
          className="h-6"
          alt="youtube-logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        />
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 h-10 px-5 border border-gray-600 rounded-l-3xl"
            type="text "
            value={searchQuerry}
            onChange={(e) => setsearchQuerry(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setshowSuggestion(false)}
          />
          <button className="items-center w-16 h-10 bg-gray-200 border border-black rounded-r-3xl">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed px-2 py-2 bg-white rounded-lg w-[34rem] border-gray-200 absolute">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="relative px-3 py-2 shadow-sm hover:bg-gray-100"
                  onClick={() => setselectionoption()}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="icon"
          src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
};

export default Head;
