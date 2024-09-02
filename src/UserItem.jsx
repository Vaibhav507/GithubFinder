import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const UserItem = ({user : {login, avatar_url, html_url}}) => {
    return (
    <div className="card text-center">
        <img src={avatar_url} alt="" className="card-img-top rounded-circle mx-auto mt-2" style={{width: "60px"}}/>
        <div className="card-body">
            <h3 className="card-title">{login}</h3>
            <a href={html_url} target="_blank" className="btn btn-primary">More</a>
        </div>
    </div>
    )
}

UserItem.propTypes= {
    user: PropTypes.object.isRequired
}

export default UserItem