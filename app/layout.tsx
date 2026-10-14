import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'생태계에서 온 엽서',description:'함께 관찰하고 이야기하며 만드는 우리 모둠의 생태계 엽서'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
