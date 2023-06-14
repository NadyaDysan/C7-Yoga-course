import * as S from './Sidebar-style'

const sidebarI = [
  { title: 'playlist01', link: '/#', imageSrc: 'img/playlist01.png' },
  { title: 'playlist02', link: '/#', imageSrc: 'img/playlist02.png' },
  { title: 'playlist03', link: '/#', imageSrc: 'img/playlist03.png' },
]

export default function Sidebar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {sidebarI.map((item) => (
            <S.SidebarItem key={item.title}>
              <S.SidebarLink href={item.link}>
                <S.SidebarImg src={item.imageSrc} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
