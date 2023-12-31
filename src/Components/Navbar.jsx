import React, { useEffect, useRef,useState } from 'react';
import './Navbar.css';
const Navbar=()=>{
  const [isSticky, setSticky] = useState(false);
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.8)');

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine whether to make the navbar sticky
      const isScrolled = window.scrollY > 50;
      const newOpacity = Math.min(isScrolled / 50, 0.8); 
      const newcolor = `rgba(0, 0, 0, ${newOpacity})`
      setBgColor(newcolor);
      setSticky(isScrolled);
    };

    // Attach the event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
            <div className='container'>
                <nav className={`navbar-items ${isSticky ? 'sticky' : ''}`}> 
                            <div className="navbar-links">
                                <a href="#">Home</a>
                                <a href="">About</a>
                                <a href="">Workshop</a>
                                <a href="">Contact</a>
                            </div>    
                            <div className="sponsor">
                                <a href="">our sponsor</a>
                            </div>
                            <div className="logo">
                                <a href="">Logo</a>
                            </div>
                </nav>
                  
            <div className='text'>

    <h1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa
      <strong>strong</strong>. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus
      mus. Donec quam felis, ultricies nec, pellentesque
      eu, pretium quis, sem. Nulla consequat massa quis
      enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut,
      imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede 
      mollis pretium. Integer tincidunt. Cras dapibus.
      Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu,
      consequat vitae, eleifend ac, enim. Aliquam lorem ante,
      dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum.
      Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.
    </p>
    <h1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</h1>
    <h2>Aenean commodo ligula eget dolor aenean massa</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</p>
    <h2>Aenean commodo ligula eget dolor aenean massa</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</p>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetuer.</li>
      <li>Aenean commodo ligula eget dolor.</li>
      <li>Aenean massa cum sociis natoque penatibus.</li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</p>
    
    
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</p>
   
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</p>

        </div>
    </div>    
        
    ) 
}
export default Navbar;


