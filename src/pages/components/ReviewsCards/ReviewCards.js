import { Avatar, fullname, username } from "react-lorem-ipsum";

const ReviewCards = ({ gender }) => {

    return (

        <div className="ReviewCard">
            <div className="Text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id, eius quibusdam voluptatum</p>
            </div>

            <div className="Photo">
                <Avatar gender={gender} />
                <div className="Name_Job">
                    <h3>{fullname(gender)}</h3>
                    <p>{`@${username()}`}</p>
                </div>
            </div>
        </div>

    )

}

export default ReviewCards;