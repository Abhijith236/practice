import {React,useState} from "react";
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import img5 from './imgs/5.png';
import './Workshop3.css';

const Workshop3 = () =>{
    
    const[selected,setSelected] = useState(null);
    
    const toogle=(i)=>{
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i);
    }
    
    
    const workshops = [
        {
          img: img1,
          name: 'Brainwave Robotics Workshop',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
          button: '',
        },
        {
          img: img2,
          name: 'Digital Signal Processing using Matlab',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
          button: '',
        },
        {
          img: img3,
          name: 'Quantum Signal Processing Workshop',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
          button: '',
        },
        {
            img: img4,
            name: 'Speech Recognition Workshop',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
            button: '',
        },
        {
            img: img5,
            name: 'The Blockchain and Signal Processing Workshop',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
            button: '',
        },
       
      ];
    
    return(
        <>
            <div className="container ">
                <div className="accordian">
                    <div className='workshop-head'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3433 43.8937L36.8819 28.3551L24.8115 28.3551L24.8115 24.5623L43.357 24.5623L43.357 43.1078H39.5642L39.5642 31.0374L24.0256 46.5761L21.3433 43.8937Z" fill="#33FFA9"/>
                    </svg>
                    <header className='name'>Workshop</header>
                    </div>
                    <br />
                    {workshops.map((items,i)=>(
                        <div className="items">
                            
                            <div className="title" onClick={()=>toogle(i)}>
                                
                            <img src={items.img} alt="" className="workshop-img" />
                                
                                <div>{items.name}</div>
                                
                                <span className="crxnpls">{selected === i? 
                                (<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Add"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M12.8379 12.2955C12.5553 12.0129 12.0971 12.0129 11.8144 12.2955C11.5318 12.5782 11.5318 13.0364 11.8144 13.319L19.6611 21.1657L11.8145 29.0123C11.5319 29.2949 11.5319 29.7532 11.8145 30.0358C12.0971 30.3184 12.5554 30.3184 12.838 30.0358L20.6846 22.1892L28.5313 30.0359C28.8139 30.3185 29.2721 30.3185 29.5548 30.0359C29.8374 29.7532 29.8374 29.295 29.5548 29.0124L21.7081 21.1657L29.5548 13.319C29.8375 13.0363 29.8375 12.5781 29.5548 12.2955C29.2722 12.0128 28.814 12.0128 28.5314 12.2955L20.6846 20.1422L12.8379 12.2955Z" fill="#9D9FA2"/></g>
                                </svg>
                                ) 
                                : 
                                (<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon/Add">
                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z" fill="#9D9FA2"/>
                                </g>
                                </svg>
                                )}</span>
                            
                            </div>
                            
                            
                            <div className={selected === i? 'content show' : 'content'}>
                                <div>{items.content}</div>
                                <button className="know-more">
                                    Know more
                                </button>
                            </div>
                            
                        
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Workshop3;