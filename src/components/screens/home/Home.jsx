import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'

function Home() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage='/images/gobg.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'NEW' : 'SIGN IN'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home
