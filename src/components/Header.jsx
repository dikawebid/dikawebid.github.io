import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Carousel,
    CarouselItem
} from 'reactstrap';
import $ from 'jquery';
import '../assets/css/vertical-carousel.css';
import sare from '../assets/images/ava_sare.png';
import fokus from '../assets/images/ava_fokus.png';

const items = [
    {
        caption: 'I <i class="fa fa-heart icon-first"></i> WebDevelopment'
    },
    {
        caption: 'Backend coder <i class="fa fa-code icon"></i>'
    },
    {
        caption: '<i class="fa fa-mobile"></i> Fullstack Developer'
    }
];

class Header extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            activeIndex: 1
        };
        
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        $(window).scroll(function(){
            if($(window).scrollTop() > 600) {
                $('.navbar-default').fadeIn(300);
            }
            else {
                $('.navbar-default').fadeOut(300);
            }
            
            if($(window).width() > 767) {
                if ($(this).scrollTop() > 600) {
                    $('.scroll-up').fadeIn(300);
                } else {
                    $('.scroll-up').fadeOut(300);
                }		
            }
        });

        $(document).ready(function() {	
            var ke = 1;
            setInterval(function(){     
                if(ke===1){
                    ke=2;
                    $('#ava').attr('src', sare);
                }else if(ke===2){
                    ke=3;
                    $('#ava').attr('src', fokus);
                }else{
                    ke=1;
                    $('#ava').attr('src', sare);
                }
            }, 4000);
        });
        
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render(){
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.caption}
                >
                    <h3 dangerouslySetInnerHTML={{__html: item.caption}}></h3>
                </CarouselItem>
            );
        });

        return(
            <header>
                <Navbar fixed="top" expand="md" role="navigation" className="navbar-default">
                    <Container>
                        <div className="navbar-header">
                            <img src="http://demos.themejumbo.com/freelancer/v1.3/image/jonathan.png" className="navbar-logo float-left" alt="" />
                            <NavbarBrand href="/" className="animated flipInX">
                                Ferdhika Yudira
                            </NavbarBrand>
                        </div>
                        
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto animated flipInX" navbar>
                                <NavItem>
                                    <NavLink href="/components/" className="scroll">
                                        Components
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" className="scroll">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            
                            </Nav>
                        </Collapse>
                    </Container>
                    
                </Navbar>

                <Jumbotron>
                    <img src="https://dika.web.id/assets/ava_fokus.png" id="ava" className="img-fluid scrollpoint sp-effect3" alt="" />

                    <div className="social-wrapper">
                        <ul className="brands brands-inline hidden-xs scrollpoint sp-effect1">
                            <li>
                                <a href="http://facebook.com/ferdhika31" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook hi-icon-effect-8"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://twitter.com/ferdhikaaa" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>   
                        <h2 className="scrollpoint sp-effect3">{'{F}'}</h2>
                        <ul className="brands brands-inline hidden-xs scrollpoint sp-effect2">
                            <li>
                                <a href="http://github.com/ferdhika31" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ferdhika" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>       
                    </div>	

                    <Carousel id="slideshow" className="vertical scrollpoint sp-effect3"
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        ride="carousel"
                        interval={4000}
                    >
                        {slides}
                
                    </Carousel>

                    <a href="#about" className="btn btn-reference btn-lg scroll scrollpoint sp-effect1" role="button"><i className="fa fa-smile-o"></i> Know me better</a>
                    <a href="#contact" className="btn btn-reference btn-lg btn-active scroll scrollpoint sp-effect2" role="button"><i className="fa fa-bolt"></i> Hire me</a>
                </Jumbotron>

            </header>
        );
    }

}

export default Header;