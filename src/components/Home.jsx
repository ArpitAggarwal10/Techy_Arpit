import React from "react";
import vg from "../assests/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TECHY_ARPIT</h1>
                    <p>Solution to all your problems.</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solutions to the tech prtoblems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo quo, illum soluta dolorum mollitia veniam dignissimos id impedit placeat quas ipsam expedita aspernatur! Voluptatum, architecto soluta. Pariatur hic voluptas, mollitia ad quas voluptatum nesciunt repellat facilis qui similique in ea nobis. Obcaecati minima neque ipsa nobis illum ea vel minus praesentium error similique reiciendis excepturi qui rerum nulla quisquam laudantium aliquam voluptas voluptatum pariatur, animi sapiente dolore velit perferendis. Aperiam corporis doloribus esse eligendi dolorem iure praesentium, incidunt laboriosam et quos accusamus est quod id tenetur expedita commodi soluta quaerat quae? Dolorem ullam expedita qui vitae consequatur pariatur alias!</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;