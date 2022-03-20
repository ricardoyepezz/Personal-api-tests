import React, { useEffect, useState } from "react";

const Home = () => {
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		getTask();
	}, []);

	function getTask() {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ricardoyepez",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setDatos(result);
			})
			.catch((error) => console.log("error", error));
	}

	return (
		<div className="text-center">
			{datos?.map((e, index) => {
				return <li key={index}>{e.label}</li>;
			})}
		</div>
	);
};

export default Home;
