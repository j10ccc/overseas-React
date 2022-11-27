import { defineConfig } from "umi";
export default defineConfig({
  npmClient: "pnpm",
  routes: [
    { path: "/", component: "@/pages/Home" },
    {
      path: "/demo",
      component: "@/pages/Demo",
      routes: [
        {
          path: "translate",
          component: "@/pages/Demo/TranslateDemo",
        },
        { path: "corpus", component: "@/pages/Demo/CorpusDemo" },
      ],
    },
    {
      path: "/product",
      routes: [
        {
          path: "writing-assistant",
          component: "@/pages/WritingAssistant",
        },
        {
          path: "liveroom",
          component: "@/pages/Demo/LiveRoomDemo",
        },
      ],
    },
    {
      path: "*",
      component: "@/pages/PageNotFound",
    },
  ],
});
