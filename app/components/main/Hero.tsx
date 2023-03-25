import Image from "next/image"
import React from "react"

const Hero: React.FC = () => <div className="flex flex-wrap md items-center h-screen">
    <div className="w-full md:w-1/2 h-screen">
        <div className="mx-32">
            <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-100 lg:text-4xl">Davinci Blog</h2>

                        <h3 className="mt-2 text-2xl font-semibold text-gray-600 dark:text-gray-100">
                            <span className="text-blue-400">Hey 👋</span>
                        </h3>
                    </div>

                    <div>
                        <p className=" text-gray-600 dark:text-gray-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="w-full md:w-1/2 h-screen">
        <Image
            src="/logo.png"
            width={40}
            height={40}
            className="h-screen w-full"
            alt={"logo"}
        />
    </div>
</div>

export default Hero