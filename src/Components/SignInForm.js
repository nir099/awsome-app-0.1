
import React,{Component} from 'react'
import { Link } from 'react-router-dom';


class SignInForm extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields">



              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button><Link to="/" className="FormTitle__Link">Create an account</Link>
              </div>

            </form>
          </div>









        );



    }


}
export default SignInForm