import { useEffect, useState } from "react";
import { api } from "../api";
import { PostItem } from "../components/PostItem";
import { Post } from "../types/Post";
import { Link } from "react-router-dom";

export const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);

	const loadPosts = async () => {
		setLoading(true);
		let json = await api.getAlbums();
		setLoading(false);
		setPosts(json);
	};

	useEffect(() => {
		loadPosts();
		
	}, []);

	return (
		<div>
			{loading && 
				<div>Carregando...</div>
			}

			{!loading && posts.length > 0 &&
				<>
					<div>
						{posts.map((item, index) => (
							<Link to={`albums/${++index}`} key={index} >
								<PostItem data={item} />
							</Link>
						))}
					</div>
				</>
			}

			{!loading && posts.length === 0 &&
				<div>Não há posts para exibir.</div>
			}
		</div>
	);
}