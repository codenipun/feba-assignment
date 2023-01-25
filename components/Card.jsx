import React from 'react'
import Image from 'next/image'

const Card = ({path, city, rating, name, price}) => {
  return (
    <>
    <style jsx>
        {`
            .tag{
                background-color : rgb(190,25, 100);
                color : white;
                padding : 7px 5px;
                border-radius : 5px;
                margin-top : 5px;
                font-size : 12px;
                
            }

            .pic{
                border-radius : 10px;
                width : 350px;
                height : 230px
            }
            .mainCnt{
                display : flex;
                flex-direction : column;
                align-items : center;
                justify-content : center;
                cursor : pointer;
                font-family : "Roboto"
            }
            .detailsSec{
                margin-top : 5px
            }
            .detailSubSec1{
                display : flex;
                align-items : center;
                justify-content : space-between
            }

            .detailSubSec2{
                padding : 10px 0px;
                font-size : 23px;
                font-weight : 300;
                color : #444;
            }
            .detailSubSec3{
                font-weight : bold
            }
        `
        }
    </style>
    <div className='mainCnt'>
        <div>
            <img className='pic' src={path}/>
            <div className='detailsSec'>
                <div className='detailSubSec1'>
                    <span className='tag'>SUPER VENDOR</span>
                    <span>{city}</span>
                    <span>★{rating}</span>                   
                </div>
                <div className='detailSubSec2'>{name}</div>
                <div className='detailSubSec3'>₹ {price}</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card