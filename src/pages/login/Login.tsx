import { useDesign } from "@/hooks";
import React from "react";
import './Login.less'

export const Login: React.FC = () => {
    // const handleRotatingBoxClick = () => {
    //     const rotatingBox = document.querySelector("#rotatingBox");
    //     rotatingBox.style.animation = "none";
    // };



    const { prefixCls } = useDesign('login')

    return (
        <section className={prefixCls}>

            <div className="color"></div>

            <div className="color"></div>

            <div className="color"></div>

            <div className="box" id="rotatingBox" onClick={() => {

            }}>

                <div className="square" style={{ '--i': 0 } as React.CSSProperties}></div>

                <div className="square" style={{ '--i': 1 } as React.CSSProperties}></div>

                <div className="square" style={{ '--i': 2 } as React.CSSProperties}></div>

                <div className="square" style={{ '--i': 3 } as React.CSSProperties}></div>

                <div className="square" style={{ '--i': 4 } as React.CSSProperties}></div>

                <div className="container">

                    <div className="form">

                        <h2>Login Form</h2>

                        <form>

                            <div className="inputBox">

                                <input type="text" placeholder="Username" />

                            </div>

                            <div className="inputBox">

                                <input type="password" placeholder="Password" />

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Login"/>

                            </div>


                            <p className="forget">Forget Password ??<a href="#" onClick={() => {
                                alert('login...everyone')

                            }}>Click Here</a></p>

                            <p className="forget">Don't have an account ?<a href="#">Sign up</a></p>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}