"use client";
import { useRouter } from "next/navigation";
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser";
import {FaUserAlt} from "react-icons/fa"
import { toast } from "react-hot-toast";
import {FcAbout} from "react-icons/fc";

interface HeaderProps {
    children: React.ReactNode;  
    className?: string;

}
const Header: React.FC<HeaderProps> = ({
    children, className
}) =>{
const authModal =useAuthModal();
const router = useRouter();

const supabaseClient = useSupabaseClient();
const {user} = useUser();

const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //refresh any playing song
    router.refresh();
   
    if (error) {
        toast.error(error.message);
      } else{
        toast.success('Logged out')
      }
}
    return(
     <div className={twMerge(`h-fit bg-gradient-to-b from-pink-800 p-6 `, className)}>
        <div className="
        w-full
        mb-4
        flex
        item-center
        justify-between
        ">
            <div className="
            hidden
            md:flex
            gap-x-2
            item-center">
             <button className="rounded-full
                p-2
                bg-black
                flex
                items-center
                justify-center
                hover:opacity-75
                transition
             ">
                <RxCaretLeft className="text-white" size={35}/>
             </button>
             <button className="rounded-full
                p-2
                bg-black
                flex
                items-center
                justify-center
                hover:opacity-75
                transition">
                <RxCaretRight className="text-white" size={35}/>
             </button>
            </div>
            <div className="flex md:hidden gap-x-3 items-center">
                <button
                className="rounded-full
                p-2
                bg-white
                flex
                items-center
                justify-center
                hover:opacity-75
                transition">
                    <HiHome className="text-black" size={20}/>
                </button>
                <button
                className="rounded-full
                p-2
                bg-white
                flex
                items-center
                justify-center
                hover:opacity-75
                transition">
                    <FcAbout className="text-black" size={20}/>
                </button>
                <button
                className="rounded-full
                p-2
                bg-white
                flex
                items-center
                justify-center
                hover:opacity-75
                transition">
                    <BiSearch className="text-black" size={20}/>
                </button>
            </div>
            <div className="flex
            justify-center
            items-center
            gap-x-4
            ">
               {user ?(
               <div className="flex gap-x-4 items-center">
               <Button 
                 onClick={handleLogout} 
                 className="bg-white px-6 py-2 rounded-full"
               >
                 Logout
               </Button>
               <Button 
                 onClick={() => router.push('/account')} 
                 className="bg-white rounded-full"
               >
                <FaUserAlt />
               </Button>
             </div>
               ) : (
                <>
                <div>
                    <Button 
                    onClick={authModal.onOpen}
                    className="bg-transparent
                    text-neutral-300
                    font-medium
                    "
                    >
                        Sign Up
                    </Button>
                </div>
                <div>
                    <Button 
                    onClick={authModal.onOpen}
                    className="bg-white
                    rounded-full
                    px-6
                    py-2
                    "
                    >
                       Log in
                    </Button>
                </div>
                </>
                )}

            </div>
        </div>
        {children}
     </div>
    );

}
export default Header;
