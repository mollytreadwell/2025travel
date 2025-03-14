import React from 'react';

export default function Cards(props) {
	return (
		<div className='card'>
			<a className="Card-Syle" href={props.item.page} >
				<img src={props.item.coverImg} alt="images"/>
			</a>
		<div className='desc'>
			<section className='column-right'>
				<span className='material-symbols-outlined'>location_on</span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink}>View in Maps</a>
				<h3 className="card-country-title">{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
				<span>Read more..</span>
			</section>
		</div>
		</div>
	)
}
