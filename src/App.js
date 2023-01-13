import React from 'react';

function App() {
  return (
    <div classNameName="App">
      
    </div>
  );
}

export default App;

function Navigation() {
  return (
    <nav className="main__nav nav">
                    <div className="nav__logo logo">
                        <img className="logo__image" 
                        src="img/logo.png" alt="logo"
                        />
                    </div>
                    <div className="nav__burger burger">
                        <span className="burger__line" />
                        <span className="burger__line" />
                        <span className="burger__line" />
                    </div>
                    <div className="nav__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                            <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                            <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                        </ul>
                    </div>
                </nav>
  );
}

function Sidebar() {
  return(
    <div className="main__sidebar sidebar">
                    <div className="sidebar__personal">
                        <p className="sidebar__personal-name">Sergey.Ivanov</p>
                        <div className="sidebar__avatar" />
                    </div>
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="/#">
                                    <img className="sidebar__img" 
                                    src="img/playlist01.png" alt="day's playlist"
                                    />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="/#">
                                    <img className="sidebar__img" 
                                    src="img/playlist02.png" alt="day's playlist"
                                    />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="/#">
                                    <img className="sidebar__img" 
                                    src="img/playlist03.png" alt="day's playlist"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

function Player(){
  return(
    <div className="bar">
                <div className="bar__content">
                    <div className="bar__player-progress" />
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <div className="player__btn-prev">
                                    <svg className="player__btn-prev-svg" alt="prev">
                                        <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                                    </svg>
                                </div>
                                <div className="player__btn-play _btn">
                                    <svg className="player__btn-play-svg" alt="play">
                                        <use xlinkHref="img/icon/sprite.svg#icon-play" />
                                    </svg>
                                </div>
                                <div className="player__btn-next">
                                    <svg className="player__btn-next-svg" alt="next">
                                        <use xlinkHref="img/icon/sprite.svg#icon-next" />
                                    </svg>
                                </div>
                                <div className="player__btn-repeat _btn-icon">
                                    <svg className="player__btn-repeat-svg" alt="repeat">
                                        <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                                    </svg>
                                </div>
                                <div className="player__btn-shuffle _btn-icon">
                                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="player__track-play track-play">
                                <div className="track-play__contain">
                                    <div className="track-play__image">
                                        <svg className="track-play__svg" alt="music">
                                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                                        </svg>
                                    </div>
                                    <div className="track-play__author">
                                        <a className="track-play__author-link" href="http://">Ты та...</a>
                                    </div>
                                    <div className="track-play__album">
                                        <a className="track-play__album-link" href="http://">Баста</a>
                                    </div>
                                </div>

                                <div className="track-play__like-dis">
                                    <div className="track-play__like _btn-icon">
                                        <svg className="track-play__like-svg" alt="like">
                                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                        </svg>
                                    </div>
                                    <div className="track-play__dislike _btn-icon">
                                        <svg className="track-play__dislike-svg" alt="dislike">
                                            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bar__volume-block volume">
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg" alt="volume">
                                        <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}