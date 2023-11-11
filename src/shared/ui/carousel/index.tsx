import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from "./index.module.scss"

const Carousel = ({data, onItemClick} : any) => {
	const handleChangeItem = (item : any) => {
		onItemClick(item);
	}
	return (
		<div className={style.owlBody}>
			<p className={style.owlTitle}>Trending Now</p>
			<Swiper
				spaceBetween={50}
				slidesPerView={8}
				slidesPerGroup={1}
				className={style.swipper}
			>
				{
					data?.map((item : any) => (
						<SwiperSlide className={style.swiperSlide} key={item.Id} onClick={() => handleChangeItem(item)}>
							<img className={style.swiperImage} src={require(`assets/images/${item.CoverImage}`)} alt="" />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default Carousel