import React from "react";
// import logo from "./png_images/illustration-intro.png";

import intro from "./png_images/illustration-intro.png";

function SecondSection() {
    return (
        <div class="w-full h-auto flex flex-col items-center text-center">
            <div class="w-1/3 h-auto flex flex-col items-center justify-center">
                <img
                    src={intro}
                    class="w-64 h-64 object-cover"
                    alt="Illustration Intro"
                />

                <div class="font-regular text-white text-2xl text-center font-bold">
                    All your files in one secure location, accessible anywhere
                </div>

                <br />
                <div class="mx-7">
                    <div class="font-regular text-white text-xs text-center">
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends, family and co-workers.
                    </div>
                </div>

                <br />

                <div class="w-40 h-10 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full text-white text-center font-bold text-xs flex items-center justify-center hover:bg-green-600 hover:cursor-pointer">
                    Get Started
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
