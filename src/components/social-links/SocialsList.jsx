import { Facebook, LinkedIn, Gmail } from '../../assets/index';
const socialsArray = [
	{
		icon: Facebook,
		name: 'facebook',
	},
	{
		icon: LinkedIn,
		name: 'linkedin',
	},
	{
		icon: Gmail,
		name: 'gmail',
	},
];

const SocialIcons = socialsArray.map((link, index) => {
	return (
		<li key={index} className='rounded-full border-2 border-light-green mx-1'>
			<a href='#'>
				<img className='w-8' src={link.icon} alt={link.name} />
			</a>
		</li>
	);
});

export const SocialsList = () => (
	<ul className='m-auto flex w-1/4 justify-center'>{SocialIcons}</ul>
);
