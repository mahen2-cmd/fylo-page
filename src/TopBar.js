import React from "react";
import logo from "./png_images/logo.png";

function TopBar(){






    return (
        <div class="flex justify-between w-1000 mx-20 ">
            <img src={logo} alt="Logo" width="100px" height="100px" />


            <div class="grid grid-cols-3 gap-4 w-64 h-30 flex items-end justify-items-center">
                <div class="font-regular text-white text-sm text-center">
                    Features
                </div>
                <div class="font-regular text-white text-sm text-center">
                    Team
                </div>
                <div class="font-regular text-white text-sm text-center">
                    Sign in
                </div>
            </div>

        </div>
    );

}

export default TopBar;