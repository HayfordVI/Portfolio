import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = { first_name: "",
last_name: "",
email: "",
contact: "",
subject: "",
message: ""};

const initState = { values:initValues };

export default function Home() {
  
  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
  setState((prev) => ({
    ...prev,
    values: {
      ...prev.values, 
      [target.name]: target.value,
    },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
        ...prev,
        
    }));
    await sendContactForm(values);
  };

  return (
    <>
    <Head>
      <title>Bright Hayford</title>
      <meta name="description" content="Personal portfolio"></meta>
      <link rel="icon" href="/Logo.svg"></link>
    </Head>

    {/* Home section */}
    <section id="Home" className='container h-screen bg-cover flex bg-no-repeat bg-stone-100'>
      <div className='box1 m-12 items-center w-full flex justify-center'>
        <Image src='/avatar.svg' width={505.83} height={519.16} alt={"Avatar"}/>
      </div>
      <div className='box2 m-12 items-center w-full flex justify-center text-8xl '>
        <p className="justify-center self-center">I&#39;m a web developer who elaborates in <span className="font-bold text-8xl cursor-pointer text-gold">UI/UX Design</span></p>
        <div className='copy-email absolute text-center '>
          <Link href={'#contact'}><button className='copy_email w-60 p-2.5 duration-500 flex justify-center border items-center cursor-pointer rounded-md text-gold border-gold border-2 border-solid transition-all ease-in-out duration-2000'>contact</button></Link>
        </div> 
      </div>
    </section>

    {/* About Page */}
    <section id="About">
      <div className="about bg-stone-100 h-screen">
              <div className="about-content flex relative flex-col text-4xl left-2/4 top-2/4">
                  <div className="about_summary">
                      <p className="font-extrlight">Hi, my name name is Bright Hayford.</p>
                      <p className="font-extrlight">Over the past three years, I have worked as a freelancer creating visually appealing sites for clients.</p>
                      <p className="font-extrlight">I lead the process from the clients briefing to the full launch of the website, attracting new customers with proven design methods.</p>
                      <p className="font-extrlight">I offer the following services:</p>    
                  </div>
                  <div className="service-list grid">
                    <div className="gif-container">
                        <Link href={""}><p>Website Dev</p></Link>
                        {/* <Image className="gif" loop src="/public/giphy.gif" alt="GIF" width={240} height={427} /> */}
                        {/* <video className="gif" controls src="Unc.mp4"  autoPlay loop height="300"></video> */}
                    </div>
                    <div className="gif-container">
                        <Link href={""}><p>UI/UX Design</p></Link>
                    </div>
                    <div className="gif-container">
                        <Link href={""}><p>Animations</p></Link>
                    </div>

                    <div className="gif-container">
                        <Link href={""}><p>3D Design</p></Link>
                    </div>            
                  </div>
                      
                  <p className="about_contacts">hayfordvii@brighthayford.com</p>
                  <p className="about_contacts">+233 53 179 5702</p>

              </div>
      </div>
    </section>

    {/* Work Page*/}
    <section id="Work">
        <div className='work bg-stone-100 h-full'>
            <div className="work-frame">
                <p>My journey as a freelancer I have done remote work for agencies which 
                includes a wide range of services including programming, UI/UX Design, 3D design.</p>
                <div className="work_example flex flex-wrap">
                
                    <div className="work_cards flex-wrap"></div>
                    <div className="work_cards flex-wrap"></div>
                    <div className="work_cards flex-wrap"></div>
                    <div className="work_cards flex-wrap"></div>
                    <div className="work_cards flex-wrap"></div>
                    <div className="work_cards flex-wrap"></div>
                </div>
            </div>
        </div>
    </section>

    {/* Contact Page */}
    <section id="Contact"> 
        <div className="contact bg-stone-100 h-full">
                <div className="contact-form px-40 py-64">
                    <form className="pb-4">
                        <fieldset className="block pb-5 border-0">
                            <legend>Name<span> *</span></legend>
                                <div className="f-name">
                                    <label className="flex flex-col text-xl">
                                        <input
                                        name="first_name"
                                        value={values.first_name}
                                        onChange={handleChange}
                            
                                        className="name-input p-1 outline-none w-full"
                                        type={'text'}
                                        required
                                        />
                                        <span>First name</span>
                                    </label>
                                </div>

                                <div className="l-name">
                                    <label className="flex flex-col text-xl">
                                        <input
                                        name="last_name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                        className="name-input p-1 outline-none w-full"

                                        type={'text'}
                                        required
                                        />
                                        <span>Last name</span>
                                    </label>
                                </div>
                        </fieldset>
                        
                        <div className="form-inner-wrapper">
                        <label >Email Address <span>*</span></label>
                            <input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                className="form-control w-full"
                                type={'email'}
                                required
                            /> 
                        </div>
                        
                        <div    className="form-inner-wrapper">
                            <label >Contact</label>
                            <input
                                name="contact"
                                value={values.contact}
                                onChange={handleChange}
                                className="form-control w-full"
                                type={'tel'}
                                required
                            />
                        </div>
                        
                        <div    className="form-inner-wrapper">
                            <label>Subject <span>*</span></label>
                            <input
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                className="form-control w-full"
                                type={'text'}
                                required
                            />
                        </div>
                        <div    className="form-inner-wrapper">
                            <label>Message <span>*</span></label>
                            <textarea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                className="form-control w-full"
                                type={'text'}
                                required
                            />
                        </div>
                            
                        <button className="sub relative top-8 w-36 h-20 bg-transparent"  

                            onClick={onSubmit}>SUBMIT</button>
                    </form>

                    <div className="headline">
                        <hr className="border-solid border-black "></hr>
                    </div>

                    <div className="font-bold">
                        <p>EMAIL: HAYFORDVII@BRIGHTHAYFORD.COM</p>
                    </div>

                    <div className="headline">
                        <hr className="border border-solid border-black"></hr>
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}
