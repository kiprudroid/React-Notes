import { Outlet, Link } from "react-router-dom";
import SideBarElement from "./sidebar";
import NavBar from "./navbar";

const Layout = () => {

    return(
        <>
    <NavBar />   

    <div class ="row">
    <div className="col-sm-2" style={{
            height : "100vh",
            width : "auto",
            borderRight : "1px solid rgb(41,41,41)"
        }}>
            <Link to="/">            
                <SideBarElement title = "Home" icon = "bi bi-house"/>
            </Link>

            <Link to="notes">            
                <SideBarElement title = "Notes" icon = "bi bi-card-list" />
            </Link>

            <Link to="recents">
                <SideBarElement title = "Recents" icon = "bi bi-clock-history" />            
            </Link>

            <Link to="compose">
                <SideBarElement title = "Compose" icon = "bi bi-pen" />
            </Link>

            <Link to="favourites">
                <SideBarElement title = "Favourites" icon = "bi bi-star" />
            </Link>

        </div>
    <Outlet/>
        
    </div> 
</>
    )
}

export default Layout