
import React,{Component} from 'react'
import { Link } from 'react-router-dom';


class SignUpForm extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" >

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
              </div>



              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
              </div>

              <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />I agree all statements in <a href="" className="FormField__TermsLink">terms of services</a>
              </label>

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button><Link to="/sign-in" className="FormTitle__Link">I'm already member</Link>
              </div>

            </form>
          </div>









        );



    }


}
export default SignUpForm