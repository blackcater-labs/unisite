export interface Env {
  UNISITE: string;
  UNISITE_CONFIG: string;
  CONFIG_EXTENSIONS: string[];
}

export const Env: Env = {
  UNISITE: "unisite",
  UNISITE_CONFIG: "unisite.yaml",
  CONFIG_EXTENSIONS: [".yaml", ".yml", ".json", ".js"],
};
