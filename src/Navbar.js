import { Link} from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
        <img src="https://r6.emb.gov.ph/wp-content/uploads/2016/06/cropped-logo.png" height="50px" width="50px" alt="React Image" />
        </Link>
        <ul>
        <CustomLink to="./pages/Roles">Roles</CustomLink>
        <CustomLink to="./pages/Type">Type</CustomLink>  
        <CustomLink to="./pages/Paths">Paths</CustomLink>
        <CustomLink to="./pages/Records">Records</CustomLink> 
        <CustomLink to="./pages/Users">Users</CustomLink>     
        
        </ul>
    </nav>  
    )
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
          <Link to ={to} {...props}>
            {children}
            </Link> 
        </li>
    )
}