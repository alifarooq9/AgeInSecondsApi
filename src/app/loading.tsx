import { Loader2 } from "lucide-react";
import { FC } from "react";

const Loading: FC = () => {
	return (
		<div className="w-full mt-36 flex justify-center items-center">
			<Loader2 className="h-9 w-9 animate-spin" />
		</div>
	);
};

export default Loading;
