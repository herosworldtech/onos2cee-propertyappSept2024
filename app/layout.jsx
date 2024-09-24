import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyApp2 | Find your dream property",
  descriptioin: "Find your dream rental property",
  keywords: "rental, find property, rent an apartment",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
