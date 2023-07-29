'use client';

import { FC, useState, useRef } from "react";
import cx from '@styles/MainStyle.module.scss';
import clsx from "clsx";
import { projects } from "@sections/Project/page";
import Navbar from "@components/Navbar/page";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Images
import builder1 from '@public/assests/images/builder-1.png';
import builder2 from '@public/assests/images/builder-2.png';
import builder3 from '@public/assests/images/builder-3.png';
import builder4 from '@public/assests/images/builder-4.png';
import builder5 from '@public/assests/images/builder-5.png';
import builder6 from '@public/assests/images/builder-6.png';
import builder7 from '@public/assests/images/builder-7.png';
import builder8 from '@public/assests/images/builder-8.png';
import listing1 from '@public/assests/images/listing-1.png';
import listing2 from '@public/assests/images/listing-2.png';
import listing3 from '@public/assests/images/listing-3.png';
import listing4 from '@public/assests/images/listing-4.png';
import listing5 from '@public/assests/images/listing-5.png';
import listing6 from '@public/assests/images/listing-6.png';
import listing7 from '@public/assests/images/listing-7.png';
import listing8 from '@public/assests/images/listing-8.png';
import bmis1 from '@public/assests/images/bmis-1.png';
import bmis2 from '@public/assests/images/bmis-2.png';
import bmis3 from '@public/assests/images/bmis-3.png';
import bmis4 from '@public/assests/images/bmis-4.png';
import bmis5 from '@public/assests/images/bmis-5.png';
import bmis6 from '@public/assests/images/bmis-6.png';
import bmis7 from '@public/assests/images/bmis-7.png';
import bmis8 from '@public/assests/images/bmis-8.png';
import bmis9 from '@public/assests/images/bmis-9.png';
import bmis10 from '@public/assests/images/bmis-10.png';

// Icons
import IconOpentab from '@public/assests/icons/icon-opentab.svg';

interface pageProps {
    params: {projects: string}
}

// data by each id [website link, github link, description, role, responsibilities]
const data = Object.create({
    clkh2w8y70000bcvjctn8eyk4: ['https://suite.real.ph/', '', 'Dedicated for real estate agents, a powerful Listing Presentation Builder allows you to create stunning presentations that will help you secure more listings. \n\nInstead of presenting dull, printed presentations, you can create professional digital presentations that will bring your brand to life and propel you ahead of the competition.', 'Software Engineer Intern', 'Frontend Development, Backend Development, Data Handling'],
    clkh2whog0002bcvje4yu0ax1: ['https://builder.real.ph/', '', 'For distinguished real estate agents, it’s high time that you have your own agent website. With this Website Builder, agenst can create a professional-looking website to showcase their properties and establish their brand online. \nChoose from a gallery of beautifully-designed templates to create your website in minutes. No coding or design skills required.', 'Software Engineer Intern', 'Frontend Development, Backend Development, Data Handling'],
    clkh2wlg50004bcvjgl8qe0ge: ['https://barangayconcepciondos.com/', '', 'A Barangay Management and Information System that organized records of data of Barangay Concepcion Dos, Marikina City. The system provided a feasible and efficient medium to cater to and provide the needs of the residents and officials as well.', 'Lead Developer', 'Frontend Development, Backend Development, SQL, Prototype, Deployment, Testing'],
});

// Tech used in every project [per id]
const techstack = Object.create({
    clkh2w8y70000bcvjctn8eyk4: ['Next.js', 'Typescript', 'Prisma', 'Redux', 'Tailwind', 'GraphQL', 'PostgreSQL'],
    clkh2whog0002bcvje4yu0ax1: ['Next.js', 'Typescript', 'Prisma', 'Redux', 'Tailwind', 'GraphQL', 'PostgreSQL'],
    clkh2wlg50004bcvjgl8qe0ge: ['PHP', 'HTML&CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
});

const images = [builder1, builder2, builder3, builder4, builder5, builder6, builder7, builder8, bmis1, bmis2, bmis3, bmis4, bmis5, bmis6, bmis7, bmis8, bmis9, bmis10, listing1, listing2, listing3, listing4, listing5, listing6, listing7, listing8];

const page: FC<pageProps> = ({params}) => {
    const newTitlesArray = projects.map(([url]) => {
        return url;
    });

    const [isHovered, setIsHovered] = useState({
        website: false,
        github: false,
    });

    const ref = useRef(null);
    const isInView = useInView(ref);

    const newTitle = projects.find(([url]) => url === params.projects)?.[1] || '';
    const indicator = projects.find(([url]) => url === params.projects)?.[2] || '';
    const projectExists = newTitlesArray.includes(params.projects);

    return (
        <div className={cx['projects-section']}>
            <Navbar
                decider={false}
            />
            <section className={cx['projects-section--content']}>
                {!projectExists ? (
                <div className={cx['projects-section--invalid-div']}>
                    <h1 className={cx['projects-section--invalid-div--font']}>Invalid URL</h1>
                    <Link href='../#' className={cx['projects-section--invalid-div--link']}>
                        Home
                    </Link>
                </div>
                ) : (
                <div className={cx['projects-section--proj-div']}>
                    <Swiper
                        effect={'coverflow'}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 3000, disableOnInteraction: false, }}
                        centeredSlides={true}
                        spaceBetween={24}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                          }}
                        draggable={false}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                    >
                        {images.map((src, index) => {
                            if(src.src.includes(indicator)){
                                return (
                                    <SwiperSlide key={index} className={cx['projects-section--slide']}>
                                        <Image
                                            src={src}
                                            key={index}
                                            alt={`${indicator} photo ${index}`}
                                            fill
                                            sizes="(max-width: 768px) 187px,
                                                (max-width: 1200px) 217px,
                                                289px"
                                            className='object-cover'
                                        />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                    <div className="bg-white">
                        <div className={cx['projects-section--details-div']}>
                            <h1 className={cx['projects-section--details-div--title']}>{newTitle}</h1>
                            <div className={cx['projects-section--button-div']}>
                                <a 
                                    href={data[params.projects][0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cx['projects-section--link-button']}
                                    onMouseEnter={() => setIsHovered({ ...isHovered, website: true })}
                                    onMouseLeave={() => setIsHovered({ ...isHovered, website: false })}
                                    onClick={() => setIsHovered({ ...isHovered, website: !isHovered.website })}
                                >
                                    <p>Visit Website</p><IconOpentab className={clsx(cx['projects-section--icon'], {'!fill-white': isHovered.website})}/>
                                </a>
                                {data[params.projects][1] && (
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cx['projects-section--link-button']}
                                        onMouseEnter={() => setIsHovered({ ...isHovered, github: true })}
                                        onMouseLeave={() => setIsHovered({ ...isHovered, github: false })}
                                        onClick={() => setIsHovered({ ...isHovered, github: !isHovered.github })}
                                    >
                                        <p>GitHub</p><IconOpentab className={clsx(cx['projects-section--icon'], {'!fill-white': isHovered.github})}/>
                                    </a>
                                )}
                            </div>
                            <div className={cx['projects-section--tech-div']}>
                                <h2 className={cx['projects-section--tech-div--title']}>Tech Stack Used:</h2>
                                {techstack[params.projects].map((items: any, index: number) => (
                                    <motion.span 
                                        key={index} 
                                        whileHover={{ y: -10 }}
                                        className={cx['projects-section--tech-div--span']
                                    }>
                                        {items}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.div
                                ref={ref}
                                initial={{ width: 0 }} // Set initial width to 0 to animate from left
                                animate={isInView ? { width: "100%" } : { width: 0 }} // Set animate width to 100% to animate to right
                                transition={{ duration: 1.5 }} // Animation duration in seconds
                            >
                                <hr className={cx["projects-section--hr"]}/>
                            </motion.div>
                            <div className={cx["projects-section--desc-div"]}>
                                <div className='col-span-2'>
                                    <p className={cx["projects-section--desc-div--desc"]}>{data[params.projects][2]}</p>
                                </div>
                                <div className={cx['projects-section--desc-div--rolerep']}>
                                    <h2 className={cx['projects-section--desc-div--rolerep--title']}>ROLE</h2>
                                    <p className={clsx(cx['projects-section--desc-div--rolerep--desc'], 'mb-4 desktop:mb-8')}>{data[params.projects][3]}</p>
                                    <h2 className={cx['projects-section--desc-div--rolerep--title']}>RESPONSIBILITIES</h2>
                                    <p className={cx['projects-section--desc-div--rolerep--desc']}>{data[params.projects][4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                )}
            </section>
        </div>
    );
}

export default page;