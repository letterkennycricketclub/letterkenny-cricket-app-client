import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AppProps, Media } from '../../core/props';



export default class ClubCarousel extends React.Component<AppProps> {

    render() {
        if (this.props.medias && this.props.medias.length > 0) {
        const mediaCards = this.props.medias.map((media: Media, index: number) => {
            return <div key={index}>
                        {media.type === 'img' ? <img src={media.url} alt={media.title} /> : ''}
                        <p className="legend">{media.title}</p>
                    </div>
        });

        return (
            <Carousel showArrows infiniteLoop autoPlay showThumbs={false} className="mb-10">
             {mediaCards}
            </Carousel>
        )
        }
        return <p>No Data</p>;
    }
}