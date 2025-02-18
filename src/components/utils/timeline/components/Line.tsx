import { Box, useTheme } from "@mui/material";

interface LineProps {
  children?: React.ReactNode; // Allows any React component to be passed as children
  lineheight?: number;
}

export const Line: React.FC<LineProps> = ({ children, lineheight = 256 }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "40px",
        height: `${lineheight}px`,
      }}
    >
      {children}
    </Box>
  );
};
