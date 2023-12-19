import {React,useState} from 'react';
import './Workshop.css';


const Workshop=()=>{
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div className='workshop_container'>
            <header>Workshop</header>
            <br />
            <div className='workshop1'>
                <a href="">img</a>
                <p>
                    Brainwave Robotics Workshop
                </p>
                <button>
                    plus
                </button>
            </div>
            <div className='workshop2'>
                <a href="">img</a>
                <p>
                    Digital Signal Processing using Matlab
                </p>
                <button onClick={toggleCollapse} >
                    plus
                </button>
                {isOpen &&(
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, vel, iusto saepe beatae explicabo natus nisi voluptas, quibusdam commodi non assumenda consequuntur soluta sit id consectetur? Eaque ullam sed porro?
                    </div>
                )
                }
                
                
            </div>
            <div className='workshop3'>
                <a href="">img</a>
                <p>
                    Quantum Signal Processing Worksop
                </p>
                <button>
                    plus
                </button>
            </div>
            <div className='workshop4'>
                <a href="">img</a>
                <p>
                    Speech Recognition Workshop
                </p>
                <button>
                    plus
                </button>
            </div>
            <div className='workshop5'>
                <a href="">img</a>
                <p>
                    The Blockchain and Signal Processing Workshop
                </p>
                <button>
                    plus
                </button>
            </div>
        
        </div>
    )
}

export default Workshop