import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Stack, Box, useTheme, Typography, Button } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

export const Footer = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") setIsEmailFilled(value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .send(
        "service_4izjuyk",
        "template_ba8zvec",
        {
          from_email: formData.email,
          message: formData.message,
        },
        "hDB58YOdNC8zWwPU7"
      )
      .then(
        () => {
          setButtonText("Yey! I Received Your Message");
          setTimeout(() => setButtonText("Send"), 3000);
          setFormData({ email: "", message: "" });
          setIsEmailFilled(false);
        },
        (error) => {
          console.error("Mesaj gönderme hatası:", error);
          setButtonText("An error occurred");
          setTimeout(() => setButtonText("Send"), 3000);
        }
      );
  };

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      position="relative"
      justifyContent="space-between"
      px="5vw"
      pb="5vw"
      sx={{ backgroundColor: "black" }}
    >
      <Box flex={1}>
        <Box
          mb="5vw"
          height="100px"
          sx={{
            backgroundColor: theme.palette.background.default,
            borderBottomRightRadius: "100px",
            borderBottomLeftRadius: "100px",
          }}
        />
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography
            variant="h1"
            color={theme.palette.text.secondary}
            gutterBottom
          >
            {buttonText === "Yey! I Received Your Message"
              ? "Yey! I Received Your Message"
              : "Let's Connect!"}
          </Typography>
          <Typography variant="h5" color={theme.palette.text.secondary} mb={10}>
            Got an idea, feedback, or just want to chat? Drop me a message!
          </Typography>
          <Stack direction="column" alignItems="center">
            <Box
              sx={{
                backgroundColor: theme.palette.text.secondary,
                borderRadius: "32px",
                fontSize: "32px",
                padding: "16px",
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                style={{
                  backgroundColor: theme.palette.text.secondary,
                  fontSize: "32px",
                  border: "none",
                  outline: "none",
                }}
                onChange={handleChange}
                value={formData.email}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                maxHeight: isEmailFilled ? "500px" : "0px",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                my={5}
                gap={3}
              >
                <Typography variant="h5" color={theme.palette.text.secondary}>
                  You can leave your message here
                </Typography>
                <ArrowDownward
                  fontSize="large"
                  sx={{ color: theme.palette.text.secondary }}
                />
              </Stack>
              <Stack direction="column" alignItems="center">
                <textarea
                  name="message"
                  placeholder="You Are Awesome, and I love you"
                  style={{
                    backgroundColor: theme.palette.text.secondary,
                    fontSize: "24px",
                    border: "none",
                    borderRadius: "32px",
                    padding: "24px",
                    outline: "none",
                    width: "550px",
                    height: "100%",
                    marginBottom: 64,
                    resize: "none",
                  }}
                  onChange={handleChange}
                  value={formData.message}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "64px",
                    width: "550px",
                    p: 2,
                    backgroundColor: theme.palette.secondary.main,
                  }}
                  onClick={handleSubmit}
                >
                  <Typography variant="h4">{buttonText}</Typography>
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
