declare namespace TOOLS {
  interface MenuItem {
    key: string;
    name: string;
    children?: MenuItem[];
  }
}
