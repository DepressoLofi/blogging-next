'use client'

import { useEffect, useState } from "react";

export default function MainNavbar(){
    const [ isVisible, setIsVisible ] = useState<boolean>(true);
    const [ lastScrollY, setlastScrollY ] = useState<number>(0);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 10){
            setIsVisible(false);
        } else if (currentScrollY < lastScrollY){
            setIsVisible(true);
        }
        setlastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
          };

    }, [lastScrollY]);
    return (
        //TODO:: To fix style
        //TODO:: TO make it responsive
        <div>
            
            <nav className={`fixed top-0 left-0 right-0 bg-blue-200 text-white py-3 px-5 height-[100px]
            transition-transform duration-300 ease-in-out z-50 ${ isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <h1>This is a navbar haha</h1>
            </nav>

        </div>
        

    )
}