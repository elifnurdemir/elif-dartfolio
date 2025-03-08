import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";

const StyledWrapper = styled.div`
  .theme-switch {
    position: relative;
    display: flex;
    justify-content: center;
    direction: rtl;
  }

  #theme-checkbox {
    display: none;
  }

  #theme-checkbox + label {
    font-size: 2rem;
    height: 1em;
    width: 2.5em;
    border-radius: 0.25em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.palette.primary.main};
    position: relative;
  }

  #theme-checkbox:checked + label {
    background-color: ${(props) => props.theme.palette.primary.main};
  }

  #theme-checkbox + label:active {
    transform: scale(0.85);
    transition: transform 0.2s;
  }

  #theme-checkbox + label div {
    width: 0.8em;
    height: 0.8em;
    border-radius: inherit;
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    z-index: 10;
    transition: 0.5s cubic-bezier(1, 0.33, 0.11, 1.34);
    background-color: ${(props) => props.theme.palette.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #theme-checkbox:checked + label div {
    left: 1.6em;
    background-color: ${(props) => props.theme.palette.text.secondary};
  }
`;

type LigthSwitchProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LightSwitch = ({ darkMode, setDarkMode }: LigthSwitchProps) => {
  const theme = useTheme(); // MUI Theme'i çekiyoruz

  return (
    <StyledWrapper theme={theme}>
      <div className="theme-switch">
        <input
          type="checkbox"
          id="theme-checkbox"
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="theme-checkbox">
          <div>
            {darkMode ? (
              <DarkMode fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LightMode fontSize="small" sx={{ color: "#fff" }} />
            )}
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};
