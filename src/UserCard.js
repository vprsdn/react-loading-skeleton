import styles from "./UserCard.module.scss";

const UserCard = ({ user }) => {
	return (
		<div className={styles.userCard}>
			<h2>{user.name}</h2>
			<h4>{user.email}</h4>
			<h4>{user.website}</h4>
		</div>
	);
};

export default UserCard;
