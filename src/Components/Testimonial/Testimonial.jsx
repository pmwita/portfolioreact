import React from 'react'
import './Testimonial.css'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';

const Testimonial = () => {
	const clients=[
	{
		img:profilePic1,
		review:
		"Very keen to detail love his work!",
	},
	{
	img:profilePic2,
		review:
		"Very profesional and timely work!",
	},
	{
	img:profilePic3,
		review:
		"Peter is very hardworking and listens to clients request loved working with him!",
	},
	{
	img:profilePic4,
		review:
		"I would recommed him if you need your web project done!",
	},
	]
	return(
		<div className="t-wrapper" id="testimonial">
		
		<div className="t-heading">

		<span>Clients always get</span>
		<span>Exceptional Work</span>
		<span>from Me....</span>
		<div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
		<div className="blur t-blur2" style={{background: "skyblue"}}></div>

		</div>

		{/*slider*/}
		<Swiper
		modules={[Pagination]}
		slidesPerView={1}
		pagination={{clickable: true}}

        >
			{clients.map((client, index)=>{
				return(
				<SwiperSlide key={index}>

				<div className="testimonial">
				<img src={client.img} alt="" />
				<span>{client.review}</span>
				</div>

				</SwiperSlide>
				)
			})}
		</Swiper>
		</div>
		)
}

export default Testimonial