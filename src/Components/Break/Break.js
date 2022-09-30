import React from 'react';
import './Break.css'

const Break = () => {
    const breakTimes = [5,10,15,20];

    const addToDB=(time) =>{
        let breakTime = time;
        document.getElementById('break').innerText = `${breakTime}min`
        localStorage.setItem('break-time',time);
    }

    return (
        <div  className='break-times'>
            {
                breakTimes.map(time => <Button key = {time} addToDB = {addToDB} time={time}></Button>)
            }
        </div>
    );
};

function Button(props){
    const allBreakbtns = document.getElementsByClassName('break-btn');
    for(const breakBtn of allBreakbtns){
        breakBtn.addEventListener('click',function(event){
            activeBtn(event.target);
        })
    }

    function activeBtn(btn) {
    document.querySelectorAll('.break-btn').forEach(a => {
        a.classList.remove('active');
    });
    btn.classList.add('active');
    }

    return (
        <button onClick={()=>props.addToDB(props.time)} className='break-btn'>{props.time}m</button>
    )
}

export default Break;