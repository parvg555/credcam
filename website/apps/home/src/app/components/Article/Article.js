/* Library import */
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

/* Dependency import */
import './css/Article.css';
import useWindowDimensions from './hooks/useWindowDimensions';

/* Component import */
import DesktopArticle from './DesktopArticle';
import MobileArticle from './MobileArticle';

/* Asset imports */

function Article(){

    const { screenHeight, screenWidth } = useWindowDimensions();
    const {articleId} = useParams();

    //function to fetch article details
    const article = [
        {
            type:"Title",
            data:"How to build a Gesture Controlled Web based Game using Tensorflow Object Detection Api"
        },
        {
            type:"Image",
            url:"https://miro.medium.com/max/700/1*LChMXQ5wyRKUdKqTr9pA0A.gif"
        },
        {
            type:"Paragraph",
            data:"With the TensorFlow object detection api, we have seen examples where models are trained to detect custom objects in images (e.g. detecting hands, toys, racoons, mac n cheese). Naturally, an interesting next step is to explore how these models can be deployed in real world use cases — for example, interaction design."
        },
        {
            type:"Paragraph",
            data:"In this post, I cover a basic body-as-input interaction example where real time results from a hand tracking model (web cam stream as input) is mapped to the controls of a web-based game (Skyfall). The system demonstrates how the integration of a fairly accurate, light weight hand detection model can be used to track player hands and enable realtime body-as-input interactions."
        },
        {
            type:"Heading",
            data:"Always Available (Body as) Input"
        },
        {
            type:"Paragraph",
            data:"Using parts of the human body as input has the benefit of being always available as the user is not required to carry any secondary device. Importantly, appropriating parts of the human body for gesture based interaction has been shown to improve user experience [2] and overall engagement [1]. While the idea of body as input is not entirely new, existing approaches which leverage computer vision, wearables and sensors (kinect, wii, [5]) etc sometimes suffer from accuracy challenges, are not always portable and can be challenging to integrate with 3rd party software. Advances in light-weight deep neural networks (DNNs), specifically models for object detection (see [3]) and key point extraction (see [4]) hold promise in addressing these issues and furthering the goal of always available (body as) input. These models allow us track the human body with good accuracy using 2D images and with the benefit of easy integration with a range of applications and devices (desktop, web, mobile). While tracking from 2D images does not give us much depth information, it is still surprisingly valuable in building interactions as shown in the Skyfall game example."
        },
        {
            type:"Image",
            url:"https://miro.medium.com/max/700/1*MIU-z3d_Q-tdX3SVB04Dyw.gif"
        }
    ]
    

    return(
        <div className='Article'>
            {
                (screenWidth>950)?(
                    <DesktopArticle/>
                ):(
                    <MobileArticle/>
                )
            }

        </div>
    );
}

export default Article;