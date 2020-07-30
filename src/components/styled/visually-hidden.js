/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import PropTypes from "prop-types";

const VisuallyHidden = ({ children }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "1px",
        width: "1px",
        overflow: "hidden",
        clip: "rect(1px 1px 1px 1px)",
        clip: "rect(1px, 1px, 1px, 1px)",
        whiteSpace: "nowrap"
      }}
    >
      {children}
    </Box>
  );
};

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired
};

export default VisuallyHidden;
