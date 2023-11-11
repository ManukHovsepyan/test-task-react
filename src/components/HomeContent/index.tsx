import style from "./index.module.scss"
import Carousel from "../../shared/ui/carousel";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { changeActive, setActiveFromSessionStorage, setFilmData } from "store/filmSlice";
import Video from "shared/ui/Video";
import { useEffect, useState } from "react";
import Button from "shared/ui/Button";
import PlayIcon from "assets/icons/play.svg"
import { getConvertedTime, sortFilmsByLastClicked } from "shared/helpers/helper";

const HomeContent = () => {
	const dispatch = useDispatch();
	const films = useSelector((state: RootState) => state.film.filmData).slice(0, 50);
	const activeFilm = useSelector((state: RootState) => state.film.activeFilm);

	const changeBanner = (item: Record<string, any>) => {
		if (item?.VideoUrl) {
			setTimeout(() => {
				setActiveElem('video');
			}, 2000);
		}
	}

	const handleClickedItem = (item: any) => {
		dispatch(changeActive(item));
		setActiveElem('photo');
		changeBanner(item)
	};

	const [activeElem, setActiveElem] = useState('photo');

	useEffect(() => {
		if (activeFilm) {
			dispatch(setActiveFromSessionStorage());
			changeBanner(activeFilm)
			const newFilms = sortFilmsByLastClicked(films, activeFilm.Id)
			dispatch(setFilmData(newFilms))
		}
		// eslint-disable-next-line
	}, [activeFilm]);


	return (
		<div className={style.homeContainer}>
			<div className={style.homeContainerBody}>
				<div className={style.homeContainerTop}>
					<span>{activeFilm?.Category}</span>
					<img src={require(`assets/images/${activeFilm.TitleImage}`)} alt={activeFilm?.TitleImage} />
					<p>{activeFilm?.ReleaseYear} {activeFilm?.MpaRating} {getConvertedTime(activeFilm?.Duration) || ''}</p>
					<p>{activeFilm?.Description}</p>
					<div className={style.homeContainerButtons}>
						<Button><img width='10px' src={PlayIcon} alt="" className={style.playIcon} /> Play</Button>
						<Button>More Info</Button>
					</div>
				</div>
				<Carousel data={films} onItemClick={handleClickedItem} />
			</div>
			<div className={style.homeContainerBanner}>
				{activeElem === 'video' && <Video video={activeFilm} />}
				{activeElem === 'photo' && <img src={require(`assets/images/${activeFilm.CoverImage}`)} alt="" />}
			</div>
		</div>
	)
}

export default HomeContent;