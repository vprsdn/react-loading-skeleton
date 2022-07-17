import React, { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonTheme } from "react-loading-skeleton";

import UserCard from "./UserCard";
import UserCardPlaceholder from "./UserCardPlaceholder";

const App = () => {
	const [users, setUsers] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	const getUsers = async () => {
		setIsFetching(true);
		const response = await axios({
			method: "get",
			url: "https://jsonplaceholder.typicode.com/users",
		});

		if (response.status === 200) {
			setUsers(response.data);
		} else {
			setUsers([]);
		}
		setTimeout(() => {
			setIsFetching(false);
		}, 5000);
	};

	const getPlaceholderUserCards = () => {
		return Array(9)
			.fill(1)
			.map((user, index) => {
				return <UserCardPlaceholder key={index}></UserCardPlaceholder>;
			});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<SkeletonTheme baseColor="#bababa" highlightColor="#ffa500">
			<div className="app">
				<h2 className="heading">Users</h2>
				<div className="users">
					{isFetching
						? getPlaceholderUserCards()
						: (users || []).map((user) => {
								return <UserCard key={user.id} user={user}></UserCard>;
						  })}
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default App;
