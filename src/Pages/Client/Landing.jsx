import React, { useEffect, useState } from 'react'
import Navbar from '../Layouts/Client/Navbar'
import { TypeAnimation } from 'react-type-animation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdMenuBook } from "react-icons/md";
import supabase from '@/supabase-client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Landing() {

    const [activeTab, setActiveTab] = useState("tutor")

    const tutorServices = [
        {
            title: "English",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat dicta dolore animi fugit velit provident magnam quibusdam officia, quaerat quo magni beatae. Itaque autem maiores, libero laborum temporibus illum?"
        },
        {
            title: "Mathematics",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat dicta dolore animi fugit velit provident magnam quibusdam officia, quaerat quo magni beatae. Itaque autem maiores, libero laborum temporibus illum?"
        },
        {
            title: "Science",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat dicta dolore animi fugit velit provident magnam quibusdam officia, quaerat quo magni beatae. Itaque autem maiores, libero laborum temporibus illum?"
        },
        {
            title: "Chemistry",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat dicta dolore animi fugit velit provident magnam quibusdam officia, quaerat quo magni beatae. Itaque autem maiores, libero laborum temporibus illum?"
        },
        {
            title: "Biology",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat dicta dolore animi fugit velit provident magnam quibusdam officia, quaerat quo magni beatae. Itaque autem maiores, libero laborum temporibus illum?"
        },
    ]

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        const { data, error } = await supabase
            .from('tutor_services_tbl')
            .select('id, topic, description, difficulty, subject_description(subject)');

        if (error) {
            console.error('Error fetching subjects:', error);
        } else {
            setSubjects(data ?? []);
            console.log('Fetched subjects:', data);
        }
    };


    return (
        <>
            {/* Homepage Section */}
            <section className="relative h-screen overflow-hidden text-slate-700">
                <img
                    src="/landing_background.svg"
                    alt="Students learning with tutors"
                    className="absolute inset-0 calc(h-screen - 45px) w-full object-cover"
                />

                <img
                    src="/landing-animation.gif"
                    alt="Students learning with tutors"
                    className="absolute left-[2rem] top-[55%] translate-y-[-55%] bottom-0 z-10 h-[550px] object-cover"
                />

                <span className="absolute z-10 top-[50%] translate-y-[-50%] right-[5%] text-5xl w-[650px] text-left text-white font-bold drop-shadow-xl">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Learn Everyday & gain new knowledge with Professional Instructors.',
                            5000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Affordable, Flexible, and Personalized Tutoring Services for All Ages.',
                            5000, // wait 1s before replacing "Mice" with "Hamsters"
                        ]}
                        wrapper="span"
                        speed={150}
                        repeat={Infinity}
                    />

                </span>

                {/* <div className="absolute inset-0 bg-black/35" /> */}

                <div className="absolute top-0 w-full z-10">
                    <Navbar />
                </div>
            </section>

            {/* Services Section */}
            <section className="h-full py-16 px-12 bg-slate-50">
                <div className="flex justify-center mb-8">
                    <div className="w-[600px]">
                        <h2 className="text-3xl font-bold drop-shadow text-orange-500 mx-[5rem] pb-2 border-b-2 border-orange-500">SERVICES WE OFFER</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut nihil in repudiandae architecto, accusamus error at, sunt beatae rerum hic reiciendis. Exercitationem voluptas porro nam repellendus vero velit fuga.</p>
                    </div>
                </div>

                <Tabs defaultValue="tutor" className="mb-8 flex w-full flex-col items-center">
                    <TabsList className="flex justify-evenly items-center gap-4 w-fit  px-8 py-2 mb-6 bg-transparent">
                        <TabsTrigger
                            value="tutor"
                            onClick={() => setActiveTab("tutor")}
                            className={` border-orange-500 text-orange-500 rounded-full px-4 py-2 ${activeTab === 'tutor' ? 'bg-orange-500 text-white shadow-md hover:text-white' : ''}`}
                        >
                            Tutor Services
                        </TabsTrigger>
                        <TabsTrigger
                            value="board-exam"
                            onClick={() => setActiveTab("board-exam")}
                            className={` border-orange-500 text-orange-500 rounded-full px-4 py-2 ${activeTab === 'board-exam' ? 'bg-orange-500 text-white shadow-md hover:text-white' : ''}`}
                        >
                            Board Exam Preparation
                        </TabsTrigger>
                        <TabsTrigger
                            value="courses"
                            onClick={() => setActiveTab("courses")}
                            className={` border-orange-500 text-orange-500 rounded-full px-4 py-2 ${activeTab === 'courses' ? 'bg-orange-500 text-white shadow-md hover:text-white' : ''}`}
                        >
                            Crash Courses
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="tutor" className="w-full">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                            {
                                tutorServices.map((service, index) => (
                                    <div className="relative min-h-[160px] group" key={index}>
                                        <div className="relative z-10 text-left rounded-xl bg-white p-4 drop-shadow transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl">
                                            <MdMenuBook className='text-[40px] mb-3' />

                                            <div>
                                                <h3 className="text-xl font-bold">{service.title}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>

                                        <div className="pointer-events-none absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-xl bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                                    </div>
                                ))
                            }
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="min-h-[400px] p-4">
                                {
                                    subjects.map((subject, index) => (
                                        <Accordion type="single" collapsible key={index}>
                                            <AccordionItem value="item-1" className="bg-gray-200 drop-shadow-sm">
                                                <AccordionTrigger
                                                    className="font-bold text-md hover:bg-orange-500 hover:text-white hover:no-underline px-4"
                                                >
                                                    {subject.topic}
                                                </AccordionTrigger>
                                                <AccordionContent className='px-4 mt-4'>
                                                    <div className="mb-4">
                                                        <h6 className="text-md font-bold mb-2">Description</h6>
                                                        <p className="text-sm text-justify">{subject.description}</p>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))
                                }

                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="courses" className="w-full">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                            <div className="relative min-h-[160px] group">
                                <div className="relative z-10 rounded-xl bg-white p-4 drop-shadow transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl">
                                    <h3 className="text-xl font-bold mb-2">Algebra Fundamentals</h3>
                                    <p>Build strong basics in equations, inequalities, and function graphing.</p>
                                </div>

                                <div className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[150px] w-full rounded-xl bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="relative min-h-[160px] group">
                                <div className="relative z-10 rounded-xl bg-white p-4 drop-shadow transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl">
                                    <h3 className="text-xl font-bold mb-2">Geometry & Trigonometry</h3>
                                    <p>Master theorems, angles, and trigonometric concepts with practice sets.</p>
                                </div>

                                <div className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[150px] w-full rounded-xl bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="relative min-h-[160px] group">
                                <div className="relative z-10 rounded-xl bg-white p-4 drop-shadow transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl">
                                    <h3 className="text-xl font-bold mb-2">Physics Essentials</h3>
                                    <p>Learn core mechanics and problem-solving methods for school-level physics.</p>
                                </div>

                                <div className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[150px] w-full rounded-xl bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="relative min-h-[160px] group">
                                <div className="relative z-10 rounded-xl bg-white p-4 drop-shadow transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl">
                                    <h3 className="text-xl font-bold mb-2">SAT / ACT Math Prep</h3>
                                    <p>Timed drills and strategy lessons to improve test speed and accuracy.</p>
                                </div>

                                <div className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[150px] w-full rounded-xl bg-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>


            </section>
        </>


    )
}
