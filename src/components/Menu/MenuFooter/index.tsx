import { Link } from 'react-router-dom'
import style from './index.module.scss'

interface Props {
	isOpen: boolean
}

const MenuFooter = ({
	isOpen
}: Props) => {
	return (
		<div className={`${style.menuFooter} ${isOpen ? style.menuFooterOpen : ''}`}>
			<Link to="/"><span>LANGUAGE</span></Link>
			<Link to="/"><span>GET HELP</span></Link>
			<Link to="/"><span>EXIT</span></Link>
		</div>
	)
}

export default MenuFooter