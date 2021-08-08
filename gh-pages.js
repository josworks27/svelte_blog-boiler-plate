import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/josworks27/blog.git', // Update to point to your repository
		user: {
			name: 'Seongcheol Jo', // update to use your name
			email: 'josworks27@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
