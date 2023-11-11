import MenuItem from "./MenuItem"
import { menuData } from "../../data/menuItems"

const Menu = () => {
	return (
			<ul>
				{
					menuData.map(menuItem => (
						<MenuItem key={menuItem.id} item={menuItem} />
					))
				}
			</ul>
	)
}

export default Menu