import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
	let { id } = useParams();

	useEffect(() => {
		axios.get("http://localhost:3001/posts").then((response) => {});
	});

	return <div>{id}</div>;
}

export default Post;
