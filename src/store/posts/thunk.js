export const getPostsThunk = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5', {
				method: "GET",
			});

			if (response.status === 200) {
				const result = await response.json();
				return result
			}

		} catch (error) {
			throw new Error(error);
		}
};
