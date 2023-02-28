import './Post.scss';
import * as React from 'react';
import { deleteFetchedPost } from '../../../store/posts/actions';
import { PostType } from '../../../types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

type Props = {
	post: PostType,
	setPosts: (value: PostType[]) => void,
	posts: PostType[],
}

export const Post: React.FC<Props> = ({ post, setPosts, posts }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [isError, setIsError] = useState(false);
	const deletePost = async () => {
		await dispatch(deleteFetchedPost(post, posts, setIsError, setPosts))
	}

	return (
		<>
			{isError &&
				<div className='error-message'>{t('post.error')}</div>
			}
			<div className='post__item'>
				<div className='post__text'>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
				<IconButton
					color="primary"
					aria-label="delete"
					onClick={deletePost}
				>
					<DeleteIcon />
				</IconButton>
			</div>
		</>
	)
}