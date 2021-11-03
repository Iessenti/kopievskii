import { useState } from "react";
import { AddIcon, ChampionIcon, TopRightIcon, Avatar01, AvatarLabs, UnicornAvatar, DiamondYellowIcon, BackArrowIcon} from "../../icons";

import './styles.sass'


const data = [
    {
        title: 'Daoland',
        type: 'DLD',
        price: 3600,
        icon: <Avatar01/>,
        backgroundColor: '#F1E1FF',
    },
    {
        title: 'Smuggle',
        type: 'SMG',
        price: 3600,
        icon: <Avatar01/>,
        backgroundColor: '#EDECEC'
    },
    {
        title: 'DefiPIE',
        type: 'Pie',
        price: 3600,
        icon: <AvatarLabs/>,
        backgroundColor: 'linear-gradient(90deg, #04071A 5.26%, #08113E 94.6%)'
    },
    {
        title: 'Uniswap',
        type: 'Uni',
        price: 3600,
        icon: <UnicornAvatar/>,
        backgroundColor: ' #EFE7E7'
    },
    {
        title: 'Daoland',
        type: 'DLD',
        price: 3600,
        icon: <Avatar01/>,
        backgroundColor: ' #EFE7E7'
    },
    {
        title: 'Daoland',
        type: 'DLD',
        price: 3600,
        icon: <Avatar01/>,
        backgroundColor: '#EDECEC'
    },
]

interface CarouselProps {
    type: string;
}

export const ProjectsCarousel = ({...props}: CarouselProps) => {

    const [offset, setOffset] = useState(0)

    const nextCards = () => {
        const elem = document.querySelector('.projects-carousel-wrapper__inside-wrapper__projects-carousel') as HTMLElement
        elem.scroll({
            left: 1200,
            behavior: 'smooth'
        })
    }

    const prevCards = () => {
        const elem = document.querySelector('.projects-carousel-wrapper__inside-wrapper__projects-carousel') as HTMLElement
        elem.scroll({
            left: -1200,
            behavior: 'smooth'
        })
    }

    return (
        <div className='projects-carousel-wrapper'>
            <div className='projects-carousel-wrapper__title'>
                <span className='small-title'>{props.type}</span>
                <span className='bigger-title'>Projects</span>
            </div>

            <div className='projects-carousel-wrapper__inside-wrapper'>
                <div 
                    className='projects-carousel-wrapper__inside-wrapper__projects-carousel'
                    style={{marginLeft: `-${offset}px`}}
                >
                {
                    data.map( (e, index) => (
                        <div 
                            className='projects-carousel-wrapper__inside-wrapper__projects-carousel__project-card'
                            style={{marginRight: (index == data.length-1) ? '0px' : '32px'}}
                        >
                            <div className='projects-carousel-wrapper__inside-wrapper__projects-carousel__project-card__navbar'>
                                <div className='projects-carousel-wrapper__inside-wrapper__projects-carousel__project-card__navbar__blue-panel'>
                                    <ChampionIcon/>
                                    #{index+1}
                                </div>
                                <div className='projects-carousel-wrapper__inside-wrapper__projects-carousel__project-card__navbar__icons'>
                                    <AddIcon />
                                    <TopRightIcon />
                                </div>
                            </div>

                            <div className='divider'>j</div>

                            <div className='projects-carousel-wrapper__inside-wrapper__projects-carousel__project-card__main'>
                                <div 
                                    className='circle-icon'
                                    style={{background: e.backgroundColor}} 
                                >    
                                    {e.icon}
                                    <div className='additional-icon'><DiamondYellowIcon/></div>
                                </div>
                                <div className='project-card-title'>{e.title} <span>{e.type}</span></div>
                                <div className='project-card-price'>{e.price} <span>MRCH</span></div>
                            </div>
                            
                        </div>
                    ))
                }
                </div>
                <div className='projects-carousel-wrapper__inside-wrapper__arrows-wrapper'>
                    <div onClick={ () => prevCards()}>
                        <BackArrowIcon/>
                    </div>

                    <div className='reversed' onClick={() => nextCards()}>
                        <BackArrowIcon/>
                    </div>
                </div>
            </div>


        </div>
    )
}