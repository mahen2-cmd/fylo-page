import React from "react";
import logo from "./png_images/illustration-intro.png";

function SecondSection() {
    return (
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center w-500 h-700  ">
                <img src={logo} alt="Logo" width="500px" height="500px" />
                <div class="font-regular text-white text-xl text-center font-bold">
                    All your files in one secure location, accessible anywhere
                </div>
                <div class="font-regular text-white text-xl text-center font-bold">
                    accessible anywhere
                </div>

                <br />
                <div class="font-regular text-white text-sm text-center">
                    Fylo stores all your most important files in one secure
                    location.
                </div>
                <div class="font-regular text-white text-sm text-center">
                    Access them wherever you need, share and collaborate with
                </div>
                <div class="font-regular text-white text-sm text-center">
                    friends, family and co-workers.
                </div>

                <br />
                <br />
                {/* <div class="font-regular text-white text-sm text-center w-70 h-25 bg-hsl-198-60-50">
                    Get started
                </div> */}

                {/* <div class="flex items-center justify-center w-70 h-25 bg-hsl-198-60-50 rounded-lg">
                    <div class="font-regular text-white text-sm text-center">
                        Get started
                    </div>
                </div> */}

                {/* <div class="flex items-center justify-center w-70 h-25 bg-blue-500 rounded-lg">
                    <div class="font-regular text-white text-sm text-center font-bold">
                        Get started
                    </div>
                </div> */}

                <div class="flex items-center justify-center w-70 h-25 bg-blue-500 rounded-lg">
                    <div class="flex-shrink-0 font-regular text-white text-sm text-center font-bold">
                        Get started
                    </div>
                </div>


                
            </div>
        </div>
    );
}

export default SecondSection;
