import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const Portfolio = () => {
  const theme = useTheme();

  const cardsData = Array.from({ length: 8 }, (_, index) => ({
    id: index,
    title: `Lorem Ipsum`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  }));

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          bgcolor={theme.palette.secondary.main}
          width={"100%"}
          p={2}
        >
          <Typography variant="h1" color={theme.palette.background.default}>
            My
          </Typography>
        </Stack>
        <AppBar
          sx={{
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            m: "auto",
            px: 5,
            pb: 5,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            boxShadow: "0px 2px 1px #00000050",
          }}
          position={"sticky"}
          elevation={0}
        >
          <Typography variant="h1" color={theme.palette.background.default}>
            Portfolio
          </Typography>
        </AppBar>

        <Grid2 container justifyContent={"center"} p={5} spacing={10}>
          {cardsData.map((card) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={card.id}>
              <Card
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  border: "5px solid",
                  borderColor: theme.palette.secondary.main,
                }}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="240"
                  image={"https://picsum.photos/345/240"}
                  sx={{ borderRadius: 1 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    sx={{ color: "text.secondary" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 1,
                  }}
                >
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        color: theme.palette.background.default,
                        backgroundColor: theme.palette.secondary.main,
                      }}
                    >
                      View Project
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: theme.palette.secondary.main,
                        borderColor: theme.palette.secondary.main,
                      }}
                    >
                      View Source Code
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};
