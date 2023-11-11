import style from "./index.module.scss"

const MenuUserInfo = ({user} : any) => {
	return (
		<div className={style.userImageContainer}>
			<div className={style.userImageContainerImage}>
				<img src={user.image} alt='notFound' />
			</div>
			<span>{user.name}</span>
	</div>
	)
}

export default MenuUserInfo