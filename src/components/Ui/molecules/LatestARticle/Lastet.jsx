

import React, { useState } from 'react';
import './Latest.css';
import { articles } from '../../../Pages/Home-page/ArrayItems';
import Img from '../../atoms/Img/Img';
import P from '../../atoms/P/P';
import Icon from '../../atoms/Icon';


export default function LatestArticles() {
    const [isActive, setActive] = useState(2)
    return (
        <div className="articl-box">
            {articles.map((item) => (
                <div className={`articles-flex ${isActive == item.id ? 'active-div-article' : ''}`} key={item.id} onClick={() => setActive(item.id)}>
                    <div className="articles-img">
                        <img src={item.image} alt={item.title} />
                        <P>مقاله</P>
                        <P>{item.tag}</P>
                    </div>
                    <P style="article-title">{item.title}</P>
                    <P style="article-date"><span>{item.day}</span>{item.date}</P>
                    <P style="article-desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها....
                    </P>
                    <div className="icons-box">
                        <div>
                            <span>0</span>
                        <Icon action={`${isActive == item.id ? 'chat1' : 'chat'}`}/>
                        </div>
                       <Icon action={`${isActive == item.id ? 'arrow-left-article1' : 'arrow-left-article'}`}/>


                    </div>
                </div>
            ))}
        </div>
    );

}
