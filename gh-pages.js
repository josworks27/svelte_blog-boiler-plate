import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'main', // 배포할 기본 브랜치
		repo: '깃헙 레포 url', // ex: https://github.com/josworks27/example.git
		user: {
			name: 'Seongcheol Jo',
			email: 'josworks27@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('✨ Github page에 배포가 완료되었습니다 ✨');
	}
);
