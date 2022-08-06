import { Post } from '../types/Post';

type Props = {
	data: Post;
}

export const PostItem = ({ data }: Props) => {
	return (
		<div className="my-4 border-2 border-black p-3">
			<h4 className="font-bold">{data.title}</h4>
		</div>
	);
}