import { AppNavigation, AuthNavigation } from "./appNavigation";

export const RootNavigation = () => {
  return true ? <AppNavigation /> : <AuthNavigation />;
};
