import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import * as S from './Sidebar-style'


const sidebarI = [
  { title: 'playlist01', link: '/day_playlist', imageSrc: 'img/playlist01.png' },
  { title: 'playlist02', link: '/100_tracks', imageSrc: 'img/playlist02.png' },
  { title: 'playlist03', link: '/indy', imageSrc: 'img/playlist03.png' },
]

export default function Sidebar() {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(setIsLoading, 5000, false)

  return (
    <S.MainSidebar>
      {/* <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal> */}
      <S.SidebarBlock>
        <S.SidebarList>
          {sidebarI.map((item) => (
            <S.SidebarItem key={item.title}>
              <NavLink to={item.link}>
              {isLoading ? (
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
