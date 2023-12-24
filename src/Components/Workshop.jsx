import {React,useState} from 'react';
import './Workshop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import img5 from './imgs/5.png';

const Workshop=()=>{
    const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleCollapse = (index) => {
    setIsOpen((prevOpen) => {
      const newState = [...prevOpen];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const workshops = [
    {
      img: img1,
      name: 'Brainwave Robotics Workshop',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      img: img2,
      name: 'Digital Signal Processing using Matlab',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      img: img3,
      name: 'Quantum Signal Processing Workshop',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
        img: img4,
        name: 'Speech Recognition Workshop',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
        img: img5,
        name: 'The Blockchain and Signal Processing Workshop',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
   
  ];
  return (
    <div className='workshop_container'>
        <div className='workshop_head'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3433 43.8937L36.8819 28.3551L24.8115 28.3551L24.8115 24.5623L43.357 24.5623L43.357 43.1078H39.5642L39.5642 31.0374L24.0256 46.5761L21.3433 43.8937Z" fill="#33FFA9"/>
                </svg>
                <header className='name'>Workshop</header>
        </div>
        <br />
      {workshops.map((workshop, index) => (
        <div key={index} className='workshop'>
          <img src={workshop.img} alt='' />
          <div className='workshop_name'>{workshop.name}</div>
          <button onClick={() => toggleCollapse(index) } className='collapse-button' >
            {isOpen[index] ? (
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8379 11.5335C12.5553 11.2509 12.0971 11.2509 11.8144 11.5335C11.5318 11.8161 11.5318 12.2744 11.8144 12.557L19.6611 20.4037L11.8145 28.2503C11.5319 28.5329 11.5319 28.9912 11.8145 29.2738C12.0971 29.5564 12.5554 29.5564 12.838 29.2738L20.6846 21.4272L28.5313 29.2739C28.8139 29.5565 29.2721 29.5565 29.5548 29.2739C29.8374 28.9912 29.8374 28.533 29.5548 28.2504L21.7081 20.4037L29.5548 12.5569C29.8375 12.2743 29.8375 11.8161 29.5548 11.5335C29.2722 11.2508 28.814 11.2508 28.5314 11.5335L20.6846 19.3802L12.8379 11.5335Z" fill="#9D9FA2"/>
            </svg>
            ) : (
              <svg
                width='42'
                height='42'
                viewBox='0 0 42 42'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.9042 9.32677C21.9042 8.92707 21.5802 8.60306 21.1805 8.60306C20.7808 8.60306 20.4568 8.92707 20.4568 9.32677V20.4237H9.36C8.96031 20.4237 8.63629 20.7477 8.63629 21.1474C8.63629 21.5471 8.96031 21.8711 9.36 21.8711H20.4568V32.968C20.4568 33.3677 20.7808 33.6917 21.1805 33.6917C21.5802 33.6917 21.9042 33.3677 21.9042 32.968V21.8711H33.0012C33.4009 21.8711 33.7249 21.5471 33.7249 21.1474C33.7249 20.7477 33.4009 20.4237 33.0012 20.4237H21.9042V9.32677Z'
                  fill='#9D9FA2'
                />
              </svg>
            )}
          </button>
          {isOpen[index] && (
            <div className='collapse-content'>
                {workshop.content}
                <button className='knowmore'>
                    Know more
                </button>
            </div>
          )}
        </div>
        
      ))}
      
    </div>
  )
}

export default Workshop

/*<div class="accordion" id="accordionExample">
            <div class="accordion-item">
                
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         Accordion Item #1
                    </button>
                
                <div id="collapseOne" class="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                
                <div id="collapseTwo" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
  
            <div class="accordion-item">
                
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                        Accordion Item #2
                    </button>
                
                <div id="collapsethree" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>*/