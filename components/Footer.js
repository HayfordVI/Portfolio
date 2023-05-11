import Link from "next/link";
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="flex fixed w-full bottom-0 px-12 py-4 z-20 bg-stone-100">
            <Link href={"https://twitter.com/HayfordVII"} target="_blank">
                <Image className="socials mr-20"  src='/twitter.svg' width={23} height={23} alt={"dribble"}/>
            </Link>
            <Link href={"https://www.instagram.com/code_with_fordstreet/"} target="_blank">
                <Image className="socials mr-20" src='/instagram.svg' width={23} height={23} alt={"dribble"}/>
            </Link>
            <Link href={"https://dribbble.com/HayfordVII"} target="_blank">
                <Image className="socials mr-20" src='/dribble.svg' width={23} height={23} alt={"dribble"}/>
            </Link>
            <Link href={"mailto:HayfordVII"} target="_blank">
                <Image className="socials mr-20" src='/mail.svg' width={23} height={23} alt={"dribble"}/>
            </Link>
            
        </div>        
    );
}
 
export default Footer;