import './News.scss'
import * as React from "react";
import { LoadMoreButton } from "./LoadMoreButton";
import { Post } from "./Post/Post";
import { fetchPosts } from "../../store/posts/actions";
import { RootState } from '../../store/store';
import { PostType } from '../../types';
import Card from '@mui/material/Card';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

export const usePosts = () => {
	return useSelector((state: RootState) => {
		return state.posts;
	})
}
export const News = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts(dispatch));
	}, []);

	const postsFromStore: any = usePosts()

	useEffect(() => {
		setPosts(postsFromStore.posts);
	}, [postsFromStore.posts]);

	const [posts, setPosts] = useState(postsFromStore.posts);
	const { t } = useTranslation();

	return (
		<>
			<h1>
				{t(`header.news`)}
			</h1>
			{
				posts ?
					<>
						<div className='posts__sub-title'>
							<LoadMoreButton start={posts[posts.length - 1].id || 0} limit={10}
							/>
							<h2>{t(`news.postsAmount`)} {posts.length}</h2>
						</div>
						<ul className="posts__list">
							{posts.map((post: PostType) => {
								return (
									<li
										key={post.id}
										className="posts__item"
									>
										<Card variant="outlined"
											className='card'>
											<Post
												post={post}
												posts={posts}
												setPosts={setPosts}
											/>
										</Card>
									</li>
								);
							})}
						</ul>
					</>
					: <div>No posts found</div>
			}
		</>
	)
}