import React from "react";
import "./contactusform.css"
import img from "../../images/form.png"
import mes from "../../images/mes.png"
import lng from "../../images/email.png"
import pho from "../../images/phone.png"

export const ContactForm = () => {
    return (
        <div className="form_container">
            <div className="form_box">
                <div className="form_col">
                    <div className="form_row">
                        <img className="form_image" src={img} />
                    </div>
                    <div className="form_row">
                        <h1>ADDRESS</h1>
                        <p>Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>

                    </div>
                    <div className="form_row">
                        <h1>PHONE</h1>
                        <div className="form_row_content">
                            <img src={pho} />
                            <p>+62-812-7313-4321</p>
                        </div>

                        <div className="form_row_content">
                            <img src={pho} />
                            <p>+62-817-000-1234</p>
                        </div>


                    </div>
                    <div className="form_row">
                        <h1>ONLINE SERVICE</h1>
                        <div className="form_row_content">
                            <img src={lng} />
                            <p>www.afrianska.com</p>
                        </div>

                        <div className="form_row_content">
                            <img src={mes} />
                            <p>hello.afrian@gmail.com </p>
                        </div>



                    </div>

                </div>

                <div className="form_col">

                    <div className="form_col_form">

                        <div className="form_row">
                        <div className="form_content">
                                <h1>SEND US MESSAGE</h1>
                            </div>
                        </div>


                        <div className="form_row">

                            <div className="form_content">
                                <span>Full name</span>
                            </div>

                            <div className="form_content">
                                <input type="text" placeholder="Full name" />
                            </div>

                        </div>


                        <div className="form_row">

                            <div className="form_content">
                                <span>Email</span>
                            </div>

                            <div className="form_content">

                                <input type="text" placeholder="Your Email" />
                            </div>

                        </div> <div className="form_row">

                            <div className="form_content">
                                <span>Message</span>
                            </div>

                            <div className="form_content">
                                <input type="text" placeholder="Your Message" />
                            </div>

                        </div>

                        <div className="form_row">
                            <div className="form_content">
                                <button type="submit"> SUBMIT </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}