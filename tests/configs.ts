export const domain = "https://todo-front-docker.onrender.com";
export const pagesConfig = {
  home: {
    title: "Home Page",
    url: `${domain}/categories`,
    requiresAuth: false,
  },
  dashboard: {
    title: "Dashboard",
    url: "/dashboard",
    requiresAuth: true,
  },
  profile: {
    title: "User Profile",
    url: "/profile",
    requiresAuth: true,
  },

};
