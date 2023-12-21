import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { VscArrowCircleUp } from "react-icons/vsc";

export const Posts = () => {
    return (
        <button
            onClick={async () => {
                try {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/posts"
                    );
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            }}
        >
            Traer datos <VscArrowCircleUp />
        </button>
    );
};
