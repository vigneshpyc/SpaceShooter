import React, { useRef } from 'react'

import './Game.css';

function Game() {

    const monster = useRef('');
    const bullet = useRef('');
    const spcship = useRef('');

    const monsterMove = ()=>{
        var top  = monster.current.getBoundingClientRect().top;
        if(top!==500){
            monster.current.style.top = `${top+10}px`
        }
        else{
            monster.current.style.display = 'none'
            monster.current.style.top = `${150}px`
            monster.current.style.left = `${Math.floor(Math.random()*(window.innerWidth-100))}px`
            monster.current.style.display = 'block'
        }
        
    }
    const start = ()=>{
        const id = setInterval(monsterMove,100);
    }
    let shtmve;
    const shoot = ()=>{
        shtmve = setInterval(bulletmove,100);

    }

    const bulletmove = ()=>{
        var bulletPos = bullet.current.getBoundingClientRect().top;
        if(bulletPos>=0){
            bullet.current.style.top = `${bulletPos-20}px`
            console.log(bulletPos);
        }
        else{
            clearInterval(shtmve);
            bullet.current.style.top = `${window.innerHeight-200}px`
        }
    }
    const shipLeftMve = ()=>{
        var shipPos = spcship.current.getBoundingClientRect().left;
        var bulPos = bullet.current.getBoundingClientRect().left;
        spcship.current.style.left = `${shipPos-20}px`
        bullet.current.style.left = `${bulPos-20}px`
    }
    const shipRightMve = ()=>{
        var shipPos = spcship.current.getBoundingClientRect().left
        var bulPos = bullet.current.getBoundingClientRect().left
        spcship.current.style.left = `${shipPos+20}px`
        bullet.current.style.left = `${bulPos+20}px`
    }
  return (
   <>
   <div className="main">
    <div className="score">
        <div className="scboard">
            <img src="/assets/skull.png" alt="Somoe Technical Error" />
            <h1>Kill Rate : 158</h1>
        </div>
        <button className='start' onClick={start}>Start</button>
    </div>
    <div className="ground">
        <img src="/assets/monster.png" alt="Some Technical error" ref={monster}
        style={{
            position:'absolute',
            top:150,
            left:Math.floor(Math.random()*(window.innerWidth-100))
        }}
        />
        <img src="/assets/spcship.png" ref={spcship} alt="Some Technical Error"
        style={{
            position:'absolute',
            bottom:150,
            width:100,
            height:100,
            zIndex:1
        }}
        />
        <img src="/assets/bullet.png" ref={bullet} alt="Some Technical Error"
        style={{
            position:'absolute',
            bottom:150,
            width:50,
            height:50,
            zIndex:-1
        }}
        />
    </div>
    <div className="footer">
        <img className='shooter' onClick={shoot} src="/assets/shooter.png" alt="Some Technical Error" />
        <div className='controls'>
            <i className='lefticon fa-solid fa-arrow-left' onClick={shipLeftMve}></i>
            <i className='righticon fa-solid fa-arrow-right' onClick={shipRightMve}></i>
        </div>
    </div>
   </div>
   </>
  )
}

export default Game