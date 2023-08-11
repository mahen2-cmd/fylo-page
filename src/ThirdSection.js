import React from "react";
import computer from "./png_images/icon-access-anywhere.png";
import files from "./png_images/icon-any-file.png"
import collaboration from "./png_images/icon-collaboration.png"
import security from "./png_images/icon-security.png"

function ThirdSection() {
    return (
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center w-500 h-700  ">
                <div class="grid grid-cols-2 gap-x-80 gap-y-60">
                    <div class="text-white">
                        <img
                            src={computer}
                            alt="Logo"
                            width="70px"
                            height="70px"
                        />
                        <div class="text-lg font-bold">
                            Access your files, anywhere
                        </div>
                        <br />
                        <div class="text-xs">
                            The ability to use a smartphone, tablet, or computer{" "}
                            <br />
                            to access your account means your files follow you
                            everywhere <br />
                            everywhere.
                        </div>
                    </div>

                    <div class="text-white">
                        <img
                            src={files}
                            alt="Logo"
                            width="70px"
                            height="70px"
                        />

                        <div class="text-lg font-bold">
                            Security you can trust
                        </div>
                        <br />
                        <div class="text-xs">
                            2-factor authentication and user controlled
                            encryption are <br />
                            just a couple of the security features we allow to
                            help <br />
                            secure your files.
                        </div>
                    </div>

                    <div class="text-white">
                        <img
                            src={collaboration}
                            alt="Logo"
                            width="70px"
                            height="70px"
                        />

                        <div class="text-lg font-bold">
                            Real-time collaboration
                        </div>
                        <br />
                        <div class="text-xs">
                            Securely share files and folders with friends, family and{" "}
                            <br />
                            colleagues for live collaboration. No email attachments<br />
                            required.
                        </div>
                    </div>

                    <div class="text-white">
                        <img
                            src={security}
                            alt="Logo"
                            width="70px"
                            height="70px"
                        />

                        <div class="text-lg font-bold">
                            Store any type of file
                        </div>
                        <br />
                        <div class="text-xs">
                            Whether you're sharing holidays photos or work{" "}
                            <br />
                            documents. Fylo has you covered allowing for all file<br />
                            types to be securely stores and shared.
                        </div>
                    </div>
                </div>

                <div class="text-white">Hello World</div>
            </div>
        </div>
    );
}

export default ThirdSection;
