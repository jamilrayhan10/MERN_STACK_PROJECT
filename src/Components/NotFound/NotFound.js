import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/404-img.png';

const NotFound = () => {
    
    return (
        <>
            <div className="container">
                <div className="row my-5 py-5">
                    <div className="col-lg-12 text-center">
                        <div className="404_img">
                            <img style={{height:'350px'}} src={notFoundImg} alt="" />
                        </div>
                        <h3 className="my-4">Oops! Page Is Not Found</h3>
                        <Link to="/home">
                            <button className="regular_btn">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;