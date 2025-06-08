import { StepIconProps } from "@mui/material/StepIcon";
import { StepLabel } from "@mui/material";
import { FC } from "react";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Step, Stepper, styled } from "@mui/material";
import theme from "@/app/utils/rtl-theme";
import cacheRtl from "@//app/utils/rtl-cache";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const StyleConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
    "&::before": {
      content: '""',
      backgroundColor: "transparent",
      height: 1,
      position: "absolute",
      top: "0%",
      width: "10px",
      transform: "rotate(45deg)",
      transformOrigin: "bottom right",
      right: "0px",
      zIndex: 1,
    },
    "&::after": {
      content: '""',
      backgroundColor: "transparent",
      height: 1,
      right: "0.49px",
      position: "absolute",
      top: "20%",
      width: "10px",
      transform: "rotate(-45deg)",
      transformOrigin: "bottom right",
      zIndex: 1,
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0D61A7",
    },
    "&::before": {
      backgroundColor: "#0D61A7",
    },
    "&::after": {
      backgroundColor: "#0D61A7",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#0D61A7",
    },
    "&::before": {
      backgroundColor: "#0D61A7",
    },
    "&::after": {
      backgroundColor: "#0D61A7",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "transparent",
    borderTopWidth: 1.5,
    borderRadius: 1,
  },
}));

const StepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme }) => ({
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    "& .QontoStepIcon-completedIcon": {
      color: "#ffffff",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[700],
    }),
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          color: "#ffffff",
        },
      },
    ],
  })
);

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] border border-[#0D61A7] bg-[#0D61A7] rounded-full flex justify-center items-center">
          <Check className="QontoStepIcon-completedIcon" />
        </div>
      ) : (
        <div
          className={`w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]  border ${
            active ? "border-[#0D61A7]" : "border-[#D9D6D6]"
          } rounded-full flex justify-center items-center`}
        >
          <div
            className={`w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] rounded-full ${
              active ? "bg-[#0D61A7]" : "bg-[#D9D6D6]"
            }`}
          />
        </div>
      )}
    </StepIconRoot>
  );
}

type StepStatusProps = {
  steps: string[];
  activeStep: number;
};

const StepStatus: FC<StepStatusProps> = ({ steps, activeStep }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Stepper
          className="w-full"
          activeStep={activeStep}
          alternativeLabel
          connector={<StyleConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>
                <p className="text-[8px] sm:text-[14px] font-bold">{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default StepStatus;
