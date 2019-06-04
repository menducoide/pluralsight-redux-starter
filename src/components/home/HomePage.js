import React from 'react'
import { Link } from "react-router";
import  generateGUID  from "../../generateGUID"
 
class HomePage extends React.Component
{
    render(){
      
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administration </h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
                <p>GUID: {generateGUID()}</p>
                <Link to='About' className="btn btn-primary btn-lg">Learn more </Link>
            </div>
        )
    }
}
export default HomePage;