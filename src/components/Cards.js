import React from 'react';

export default function Cards(props) {
	return (
		<div className='card'>
			<a href={props.item.googleMapLink} className="Card-Syle" >
				<img src={props.item.coverImg} alt="images"/>
			</a>
		<div className='desc'>
			<section className='column-right'>
				<span className="card-country">{props.item.country} </span>
				<h3 className="card-country-title">{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
			</section>
		</div>
		</div>
	)
}
