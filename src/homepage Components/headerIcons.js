import React from "react";
import {Link} from 'react-router-dom';

export const Icons = () => {
    return (
        


        <div className="masterHeaderIcons">
            <div>
            <Link as={Link} to="Loginpage">Login Page</Link>
            </div>
            <br />
            <div>
            <Link as={Link} to="Homepage">Home</Link>
            </div>
            <br />
            <div>
            <Link as={Link} to="Giveimpressionpage">Give Impression</Link>
            </div>
            <br />
            <div>
            <Link as={Link} to="Profilepage">Profile</Link>
            </div>
            <br />
            <div>
            <Link as={Link} to="Empojipage">Empoji</Link>
            </div>
            <br />
            <div>
            <Link as={Link} to="Leaderboardpage">Leaderboard</Link>
            </div>
            
        </div>
    )
}

export default Icons;