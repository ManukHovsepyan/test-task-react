import { Link } from "react-router-dom";
import style from "./index.module.scss"

const MenuItem = ({ item }: any) => {
	return (
		<li className={style.menuItem}>
			<Link to={item.path}>
				<div className={style.menuItemIcon}>
					<img src={item.image} alt={item.image} />
				</div>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem;