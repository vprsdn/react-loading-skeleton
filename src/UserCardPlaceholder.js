import React from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./UserCardPlaceholder.module.scss";

const UserCardPlaceholder = () => {
	return (
		<div className={styles.userCard}>
			<h2>{<Skeleton></Skeleton>}</h2>
			<h4>{<Skeleton></Skeleton>}</h4>
			<h4>{<Skeleton></Skeleton>}</h4>
		</div>
	);
};

export default UserCardPlaceholder;
