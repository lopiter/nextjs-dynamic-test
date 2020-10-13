import dynamic from 'next/dynamic'
const COMPONENTS = { 1: {'mobile/a': dynamic(() => import('components/1/mobile/a'))
,'pc/a': dynamic(() => import('components/1/pc/a'))
,'pc/b': dynamic(() => import('components/1/pc/b'))
,'pc/c': dynamic(() => import('components/1/pc/c'))
,'pc/d': dynamic(() => import('components/1/pc/d'))
,'mobile/mypage/a': dynamic(() => import('components/1/mobile/mypage/a'))
,'mobile/tour/a': dynamic(() => import('components/1/mobile/tour/a'))
,},
2: {'pc/a': dynamic(() => import('components/2/pc/a'))
,'pc/b': dynamic(() => import('components/2/pc/b'))
,'mobile/a': dynamic(() => import('components/2/mobile/a'))
,},
3: {'mobile/a': dynamic(() => import('components/3/mobile/a'))
,'mobile/b': dynamic(() => import('components/3/mobile/b'))
,'pc/a': dynamic(() => import('components/3/pc/a'))
,'pc/b': dynamic(() => import('components/3/pc/b'))
,},
}
export default COMPONENTS