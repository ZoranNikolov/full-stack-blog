import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
	const initialValues = {
		title: "",
		postText: "",
		username: "",
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("You must input a title!"),
		postText: Yup.string().required("You must input a post!"),
		username: Yup.string()
			.min(3)
			.max(15)
			.required("You must input an username!"),
	});

	const onSubmit = (data) => {
		axios.post("http://localhost:3001/posts", data).then((response) => {
			console.log("it worked!");
		});
	};

	return (
		<div className="createPostPage">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className="formContainer">
					<label>Title:</label>
					<ErrorMessage name="title" component="span" />
					<Field
						id="inputCreatePost"
						name="title"
						placeholder="(Ex. Title ...)"
					/>
					<label>Post:</label>
					<ErrorMessage name="postText" component="span" />
					<Field
						id="inputCreatePost"
						name="postText"
						placeholder="(Ex. Post ...)"
					/>
					<label>Username:</label>
					<ErrorMessage name="username" component="span" />
					<Field
						id="inputCreatePost"
						name="username"
						placeholder="(Ex. JohnWick123 ...)"
					/>
					<button type="submit">Create Post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CreatePost;
