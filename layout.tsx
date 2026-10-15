import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'생태계 탐사와 엽서',description:'모둠으로 관찰하고 기록한 뒤 개인 생태계 엽서를 만들어요'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
