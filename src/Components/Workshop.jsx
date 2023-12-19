import {React,useState} from 'react';
import './Workshop.css';


const Workshop=()=>{
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div className='workshop_container'>
            <div className='workshop_head'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3433 43.8937L36.8819 28.3551L24.8115 28.3551L24.8115 24.5623L43.357 24.5623L43.357 43.1078H39.5642L39.5642 31.0374L24.0256 46.5761L21.3433 43.8937Z" fill="#33FFA9"/>
                </svg>
                <header className='name'>Workshop</header>
            </div>
            <br />
            <div className='workshop'>
                <img src="./1.png" alt="" />
                <div className='workshop_name'>
                    Brainwave Robotics Workshop
                </div>
                <button>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                    </svg>
                </button>
            </div>
            <div className='workshop'>
                <img src="./2.png" alt="" />
                <div className='workshop_name'>
                    Digital Signal Processing using Matlab
                </div>
                <button onClick={toggleCollapse} >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                    </svg>
                </button>
                {isOpen &&
                    <div className='collapse-content'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, vel, iusto saepe beatae explicabo natus nisi voluptas, quibusdam commodi non assumenda consequuntur soluta sit id consectetur? Eaque ullam sed porro?
                    </div>
                
                }
                
                
            </div>
            <div className='workshop'>
                <img src="./3.png" alt="" />
                <div className='workshop_name'>
                    Quantum Signal Processing Worksop
                </div>
                <button>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                </svg>
                </button>
            </div>
            <div className='workshop'>
                <img src="/4.png" alt="" />
                <div className='workshop_name'>
                    Speech Recognition Workshop
                </div>
                <button>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                    </svg>
                </button>
            </div>
            <div className='workshop'>
                <img src="./5.png" alt="" />
                <div className='workshop_name'>
                    The Blockchain and Signal Processing Workshop
                </div>
                <button>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                    </svg>
                </button>
            </div>
        
        </div>
    )
}

export default Workshop