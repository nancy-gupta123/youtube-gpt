import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    const dispatch=useDispatch();
const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
};

    
  return (


    
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
        <div className="flex col-span-1 space-x-6">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="cursor-pointer h-7"
        alt="menu"
        src="https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"/>


        <img className="h-6"
        alt="youtube-logo"
        src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"/>
    </div>
    <div className="flex col-span-10 text-center">
        <input  className="w-1/2 h-10 border border-gray-600 rounded-l-3xl"
        type="text "/>
        <button className="items-center w-16 h-10 bg-gray-200 border border-black rounded-r-3xl"><img className="w-6 h-6 mx-4 rounded-full" alt="seachicon" src="https://th.bing.com/th/id/OIP.b3LgbjytOXFP_mxuD6NfjgHaHv?rs=1&pid=ImgDetMain"/></button>
    </div>
    <div className="col-span-1">
        <img className="h-8" 
        alt="icon"
        src ="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"/>
    </div>
    </div>
  )
}

export default Head