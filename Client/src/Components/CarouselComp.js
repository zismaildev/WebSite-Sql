import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap' 

export default class CarouselComp extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZyUyMGd0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&h=400&w=1200&q=80"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1597274394071-b7362c4a54ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c3RhbmclMjBndHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=400&w=1200&q=80"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c3RhbmclMjBndHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=400&w=1200&q=80"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
