import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import * as S from './Sidebar-style'


const sidebarI = [
  { title: 'playlist01', link: '/collection/1', imageSrc: '/img/playlist01.png' },
  { title: 'playlist02', link: '/collection/2', imageSrc: '/img/playlist02.png' },
  { title: 'playlist03', link: '/collection/3', imageSrc: '/img/playlist03.png' },
]

export default function Sidebar({ isFetching }) {

  return (
    <S.MainSidebar>
      <S.SidebarBlock>
        <S.SidebarList>
          {sidebarI.map((item) => (
            <S.SidebarItem key={item.title}>
              <NavLink to={item.link}>
              {isFetching ? (
                      <Skeleton height={150} />
                    ) : 
                    (<S.SidebarImg src={item.imageSrc} alt="day's playlist"/>)}
              </NavLink>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
