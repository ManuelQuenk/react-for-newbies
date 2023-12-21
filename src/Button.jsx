import PropTypes from "prop-types";

export function Button({ text }) {
    if (!text) {
        console.error("Text required");
    }
    return (
        <button
            onClick={() => {
                console.log("click");
            }}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
