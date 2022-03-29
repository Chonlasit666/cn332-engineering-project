import React from "react";
/* import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col'; */
import Image from 'react-bootstrap/Image'


function Home() {
    return (
        <div class="flex flex-column vh-100">
            <div class="container">



                <div class="row" style={{
                    backgroundColor: '#e1e1e1',

                }}>
                    <div class="col-8 ">

                        <div class="col">

                            <div class="row">
                                <div class="col-8 mx-2 my-4 " style={{
                                    backgroundColor: '#c9c9c9',

                                }}>
                                    <div class="row">
                                        <div class="col ">
                                            <div class="row">
                                                <div class="col-auto  mt-3">
                                                    <Image src="https://i.pinimg.com/originals/0e/6e/38/0e6e38c9d47b0c0fcd20dab395ba7a57.jpg" roundedCircle width="100px" height="100px" />
                                                </div>
                                                <div class="col mt-3 ">
                                                    <div class="row h-50 " >
                                                        <div class="col-auto">
                                                            <p class="row  px-1">

                                                                นางสาว
                                                            </p>

                                                        </div>
                                                        <div class="col-auto">
                                                            <p class="row  px-1">

                                                                สุฑามาส
                                                            </p>


                                                        </div>
                                                        <div class="col-auto">
                                                            <p class="row px-1 ">

                                                                เจริญด้วยเกียรติ
                                                            </p>

                                                        </div>
                                                    </div>
                                                    <div class="row h-50 h-auto">
                                                        <div class="col-auto">
                                                            <p class="row  px-1">
                                                                นักศึกษา คณะวิศวกรรมไฟฟ้าและคอมพิวเตอร์
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col ">
                                                Status : กำลังทำโครงงาน ชื่อโครงงาน
                                            </div>
                                            <div>
                                                ที่ปรึกษาโครงงาน
                                                อาจารย์ สมหญิง รักชาย
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col my-4 " style={{
                                    backgroundColor: '#c9c9c9',

                                }}>
                                    <div class="row">
                                        <p class="text-center">
                                            ชื่อโครงงาน</p>

                                    </div>
                                    2
                                </div>
                            </div>
                        </div>


                        <div class="col" >
                            <div class="row my-2" >
                                <div class="col " style={{
                                    backgroundColor: '#c9c9c9',

                                }}>
                                    <div class="row mb-2">
                                        <p class="text-center">
                                            Schedule</p>
                                        <Image src="https://marketplace.canva.com/EADajhkl4R8/1/0/1600w/canva-blue-simple-class-schedule-y62FO4jXJBk.jpg" rounded width="100px" height="200x" />
                                    </div>

                                </div>
                                <div class="col mx-2 " style={{
                                    backgroundColor: '#c9c9c9',

                                }}>
                                    <div class="row mb-2">
                                        <p class="text-center">
                                            Update Project </p>
                                        <Image src="https://image.shutterstock.com/z/stock-vector-engineer-working-on-blueprint-engineering-drawing-technical-scheme-sketching-gear-project-1115446616.jpg" rounded width="100px" height="200x" />
                                    </div>

                                </div>
                                <div class="col   " style={{
                                    backgroundColor: '#c9c9c9',

                                }}>
                                    <div class="row ">
                                        <p class="text-center">
                                            Contacts </p>

                                    </div>
                                    <div class="row h-75">

                                        <div class="row">
                                            <div class="col-3 text-sm-center">
                                                <Image src="https://mrkeenan.com/wp-content/uploads/2021/01/new_teacher.jpeg" roundedCircle width="50px" height="50px" />
                                            </div>
                                            <div class="col-auto">
                                                <p class="row  px-1">
                                                    อาจารย์ สมหญิง รักชาย
                                                </p>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3 text-sm-center">
                                                <Image src="https://img2.storyblok.com/fit-in/1200x630/f/64062/800x450/374dd06094/world-teachers-day.jpg" roundedCircle width="50px" height="50px" />
                                            </div>
                                            <div class="col-auto">
                                                <p class="row  px-1">
                                                    อาจารย์ สมชาย รักหญิง
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                    <div class="col mx-2 mt-4 mb-2" style={{
                        backgroundColor: '#c9c9c9',
                    }}
                    >

                        <p class="text-center">
                            Dashboard
                        </p>



                    </div>



                </div>
            </div>
        </div >

    )
}
export default Home;
