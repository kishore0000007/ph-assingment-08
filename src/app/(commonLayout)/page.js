import AboutShop from '@/components/modules/Home/AboutShop'
import Banner from '@/components/modules/Home/Banner'
import MeetOurChef from '@/components/modules/Home/MeetOurChef'
import Reviews from '@/components/modules/Home/Reviews'
import SignatureTreats from '@/components/modules/Home/SignatureTreats'

const HomePage = () => {
	return (
		<div>
			<Banner />
			<SignatureTreats />
			<AboutShop></AboutShop>
			<MeetOurChef />
			<Reviews />
		</div>
	)
}

export default HomePage