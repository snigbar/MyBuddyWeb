import styled from "@emotion/styled";
import { Box} from "@mui/material";


export const WidgetWrapper = styled(Box)(({theme}) => ({
padding:"1.5rem 2.5rem 0.75rem 2rem",
backgroundColor: theme.palette.background.alt,
borderRadius: "0.75rem",
}))