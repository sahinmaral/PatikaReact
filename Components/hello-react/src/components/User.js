import { v4 as uuidv4 } from 'uuid';
import React from "react";
import PropTypes from 'prop-types'

//Array veya map indexleri vermek yerine
//.NET üzerindeki GUID şeklinde UUID diye tabir edilen
//eşsiz anahtar oluşturulabilir.
function User(props) {
    if(!props.isLoggedIn)
    return <p>Giriş Yapmadınız</p>
    
    return (
        <div>
            <p>props.name : {props.name}</p>
            <p>props.surname : {props.surname}</p>

            <p>Giriş Yaptınız </p>

            {props.friends.map((friend) => {
                return <div key={uuidv4()}>
                    {friend.name}
                </div>;
            })}
        </div>
    );
}

User.propTypes = {
    name : PropTypes.string,
    surname : PropTypes.string,
    isLoggedIn : PropTypes.bool,
    age : PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    friends : PropTypes.array.isRequired,
    address: PropTypes.shape({
        title : PropTypes.string.isRequired,
        zipCode : PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
    })
}

User.defaultProps = {
    isLoggedIn : false
}

export default User;
