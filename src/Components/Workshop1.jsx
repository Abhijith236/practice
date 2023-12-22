import React from 'react';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import img5 from './imgs/5.png';

const Workshop1=()=>{
    const Border = {
        borderBottom: '1.013px solid var(--Black-700, #282828)',
        
      };
    return(
        <>
            <div className='Workshop_container w-100 h-100 bg-black justify-content-center'>
                <div className='workshop_head d-flex align-item-center '>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3433 43.8937L36.8819 28.3551L24.8115 28.3551L24.8115 24.5623L43.357 24.5623L43.357 43.1078H39.5642L39.5642 31.0374L24.0256 46.5761L21.3433 43.8937Z" fill="#33FFA9"/>
                    </svg>
                    <div className='text-sm'>Workshop</div>
                </div>
                <div className='workshop1 d-flex  m-5 align-items-center justify-content-between'>
                    <img src={img1} alt="" />
                    <p className=''>Brainwave Robotics Workshop</p>
                    <button className='btn' data-bs-toggle='collapse' type='button' data-bs-target='#coll1'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                        </svg>
                    </button>
                </div>
                <div className='content1 pb-3' id='coll1' style={Border}>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima magni corrupti accusantium, quo natus deleniti laudantium. Debitis modi pariatur consequuntur dolorum deserunt nobis? Distinctio in fugiat libero obcaecati nemo!</p>
                    <button className='btn btn-light' type='button'>Know More</button>
                </div>
                <div className='workshop2 d-flex m-5 align-items-center justify-content-between '>
                    <img src={img2} alt="" />
                    <p className=''>Digital Signal Processing using Matlab</p>
                    <button className='btn' data-bs-toggle='collapse' type='button' data-bs-target='#coll2'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                        </svg>
                    </button>
                </div>
                <div className='pb-3' id='coll2' style={Border} >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima magni corrupti accusantium, quo natus deleniti laudantium. Debitis modi pariatur consequuntur dolorum deserunt nobis? Distinctio in fugiat libero obcaecati nemo!</p>
                    <button className='btn btn-light' type='button'>Know More</button>
                </div>
                <div className='workshop3 d-flex m-5 align-items-center  justify-content-sm-between'>
                    <img src={img3} alt="" />
                    <p>Quantum Signal Processing Workshop</p>
                    <button className='btn' data-bs-toggle='collapse' type='button' data-bs-target='#coll3'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                        </svg>
                    </button>
                </div>
                <div className='content3 pb-3' id='coll3' style={Border}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima magni corrupti accusantium, quo natus deleniti laudantium. Debitis modi pariatur consequuntur dolorum deserunt nobis? Distinctio in fugiat libero obcaecati nemo!</p>
                    <button className='btn' type='button'>Know More</button>
                </div>
                <div className='workshop4 d-flex m-5 align-items-center justify-content-between'>
                    <img src={img4} alt="" />
                    <p>Speech Recognition Workshop</p>
                    <button className='btn' data-bs-toggle='collapse' type='button' data-bs-target='#coll4'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                        </svg>
                    </button>
                </div>
                <div className='content4 pb-3' id='coll4' style={Border}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima magni corrupti accusantium, quo natus deleniti laudantium. Debitis modi pariatur consequuntur dolorum deserunt nobis? Distinctio in fugiat libero obcaecati nemo!</p>
                    <button className='btn btn-light' type='button'>Know More</button>
                </div>
                <div className='workshop5 d-flex m-5 align-items-center justify-content-between'>
                    <img src={img5} alt="" />
                    <p>The Blockchain and Signal Processing Workshop</p>
                    <button className='btn ' data-bs-toggle='collapse' type='button' data-bs-target='#coll5'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                        </svg>
                    </button>
                </div>
                <div className='content5 pb-3' id='coll5' style={Border}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima magni corrupti accusantium, quo natus deleniti laudantium. Debitis modi pariatur consequuntur dolorum deserunt nobis? Distinctio in fugiat libero obcaecati nemo!</p>
                    <button className='btn btn-light' type='button'>Know More</button>
                </div>
            </div>
        </>
    )
}
export default Workshop1;