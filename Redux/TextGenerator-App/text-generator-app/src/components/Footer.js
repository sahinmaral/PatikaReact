import React from "react";

function Footer() {
    return (
        <footer className="text-center" id='footer'>
            <div className="container p-4">
                <section className="mb-4">

                    <a
                        className="btn btn-floating m-1"
                        href="https://www.hackerrank.com/sahin_maral"
                        role="button"
                    >
                        <i className="fa-brands fa-hackerrank"></i>
                    </a>

                    <a
                        className="btn btn-floating m-1"
                        href="https://www.linkedin.com/in/sahinmaral/"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        className="btn btn-floating m-1"
                        href="https://github.com/sahinmaral"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        className="btn btn-floating m-1"
                        href="mailto:sahin.maral@hotmail.com"
                        role="button"
                    >
                        <i className="fa-solid fa-at"></i>
                    </a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;