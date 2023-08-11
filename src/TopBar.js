import React from "react";
import logo from "./png_images/logo.png";

function TopBar(){






    return (
        <div class="mx-10 my-10">
            <div class="w-full  h-10">
                <div class="flex-row flex">
                    <div class="w-1/2">
                        <img
                            src={logo}
                            alt="Logo"
                            width="100px"
                            height="100px"
                        />
                    </div>

                    <div class="flex justify-end w-1/2 h-10">
                        <div class="grid grid-cols-3 gap-4 w-64 items-end justify-self-end ">
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
                </div>
            </div>
        </div>
    );

}

export default TopBar;