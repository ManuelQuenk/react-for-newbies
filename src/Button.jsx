import PropTypes from "prop-types";

export function Button({ text }) {
    if (!text) {
        console.error("Text required");
    }
    return <button>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
