import {
  OptionsObject,
  useSnackbar as useNotistackSnackbar,
} from "@/lib/notistack";

export const useSnackbar = () => {
  const { enqueueSnackbar } = useNotistackSnackbar();
  const defaultConfig = {
    anchorOrigin: { vertical: "top", horizontal: "center" },
    autoHideDuration: 4000,
  } as OptionsObject;

  const enqueueSuccessSnackbar = (message: string) =>
    enqueueSnackbar({
      ...defaultConfig,
      variant: "success",
      message,
    });

  const enqueueErrorSnackbar = (message: string) =>
    enqueueSnackbar({
      ...defaultConfig,
      variant: "error",
      message,
    });

  return { enqueueSuccessSnackbar, enqueueErrorSnackbar };
};
